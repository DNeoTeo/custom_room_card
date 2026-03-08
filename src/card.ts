/**
 * custom-room-card – Main Lovelace card element.
 *
 * An adaptive room layout card with freely-positioned entity buttons,
 * customizable background, and support for nested cards.
 */

import { LitElement, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

import {
  CustomRoomCardConfig,
  EntityButtonConfig,
  HomeAssistant,
  LovelaceCard,
  LovelaceCardConfig,
  NestedCardConfig,
  DEFAULT_NESTED_CARD,
  CARD_NAME,
  CARD_DESCRIPTION,
  CARD_VERSION,
} from "./types";

import { cardStyles } from "./styles";

import {
  mergeButtonDefaults,
  entityIcon,
  entityName,
  isEntityActive,
  handleAction,
} from "./helpers";

// ── Registration ─────────────────────────────────────────────────────────────

// Register the card with Home Assistant's custom card registry
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: CARD_NAME,
  name: "Custom Room Card",
  description: CARD_DESCRIPTION,
  preview: true,
  documentationURL: "https://github.com/your-user/custom-room-card",
});

console.info(
  `%c CUSTOM-ROOM-CARD %c v${CARD_VERSION} `,
  "color: white; background: #2196f3; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "color: #2196f3; background: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;"
);

// ── Main Card Element ────────────────────────────────────────────────────────

@customElement(CARD_NAME)
export class CustomRoomCard extends LitElement implements LovelaceCard {
  static styles = cardStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: CustomRoomCardConfig;
  @state() private _nestedCards: Map<number, LovelaceCard> = new Map();

  // Hold timer for long-press
  private _holdTimer: ReturnType<typeof setTimeout> | undefined;
  private _holdTriggered = false;

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  public setConfig(config: CustomRoomCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    this._config = {
      show_title: true,
      background_size: "cover",
      background_position: "center",
      background_opacity: 1,
      aspect_ratio: "16/9",
      ...config,
    };
    // Recreate nested cards when config changes
    this._nestedCards = new Map();
  }

  public getCardSize(): number {
    if (this._config?.card_height) {
      return Math.ceil(this._config.card_height / 50);
    }
    return 6;
  }

  /** Expose the editor element. */
  public static getConfigElement(): HTMLElement {
    return document.createElement("custom-room-card-editor");
  }

  /** Provide a stub configuration for the editor. */
  public static getStubConfig(): Record<string, unknown> {
    return {
      title: "My Room",
      background_image: "",
      aspect_ratio: "16/9",
      entities: [],
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has("_config")) return true;
    if (!changedProps.has("hass")) return true;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (!oldHass) return true;

    // Only re-render if any of our entities changed state
    const entities = this._config?.entities ?? [];
    return entities.some(
      (e) => oldHass.states[e.entity] !== this.hass.states[e.entity]
    );
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    // Create nested cards on first render or config change
    if (changedProps.has("_config") && this._config?.nested_cards?.length) {
      this._createNestedCards();
    }
    // Propagate hass to nested cards
    if (changedProps.has("hass")) {
      this._nestedCards.forEach((card) => {
        card.hass = this.hass;
      });
    }
  }

  // ── Rendering ──────────────────────────────────────────────────────────────

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading…</ha-card>`;
    }

    const containerClasses = {
      "room-container": true,
      "aspect-ratio": !this._config.card_height,
      "fixed-height": !!this._config.card_height,
    };

    const containerStyles: Record<string, string> = {};
    if (this._config.card_height) {
      containerStyles["--card-height"] = `${this._config.card_height}px`;
    } else if (this._config.aspect_ratio) {
      containerStyles["padding-bottom"] = this._aspectRatioPadding(this._config.aspect_ratio);
    }

    const bgStyles: Record<string, string> = {};
    if (this._config.background_image) {
      bgStyles["background-image"] = `url('${this._config.background_image}')`;
    }
    if (this._config.background_color) {
      bgStyles["background-color"] = this._config.background_color;
    }
    if (this._config.background_size) {
      bgStyles["background-size"] = this._config.background_size;
    }
    if (this._config.background_position) {
      bgStyles["background-position"] = this._config.background_position;
    }
    if (this._config.background_opacity !== undefined) {
      bgStyles["opacity"] = String(this._config.background_opacity);
    }

    // Apply custom card styles
    const cardCustomStyles: Record<string, string> = this._config.card_styles ?? {};

    return html`
      <ha-card style=${styleMap(cardCustomStyles)}>
        <div class=${classMap(containerClasses)} style=${styleMap(containerStyles)}>
          <!-- Background -->
          <div class="room-bg" style=${styleMap(bgStyles)}></div>

          <!-- Content layer -->
          <div class="room-content">
            <!-- Title overlay -->
            ${this._config.show_title && this._config.title
              ? html`<div class="room-title">${this._config.title}</div>`
              : nothing}

            <!-- Entity buttons -->
            ${(this._config.entities ?? []).map((e) => this._renderEntityButton(e))}

            <!-- Nested cards -->
            ${(this._config.nested_cards ?? []).map((_, i) => this._renderNestedCard(i))}
          </div>
        </div>
      </ha-card>
    `;
  }

  // ── Entity button rendering ────────────────────────────────────────────────

  private _renderEntityButton(rawCfg: EntityButtonConfig): TemplateResult {
    const cfg = mergeButtonDefaults(rawCfg);
    const stateObj = this.hass.states[cfg.entity];
    const active = isEntityActive(stateObj);
    const unavailable = !stateObj || stateObj.state === "unavailable";
    const icon = cfg.icon ?? entityIcon(cfg.entity, stateObj);
    const label = entityName(cfg, stateObj);

    const btnClasses = {
      "entity-btn": true,
      active,
      unavailable,
    };

    const btnStyles: Record<string, string> = {
      left: `${cfg.left}%`,
      top: `${cfg.top}%`,
      width: `${cfg.width ?? 60}px`,
      height: `${cfg.height ?? 60}px`,
      transform: "translate(-50%, -50%)",
      ...((cfg.styles as Record<string, string>) ?? {}),
    };

    return html`
      <button
        class=${classMap(btnClasses)}
        style=${styleMap(btnStyles)}
        @pointerdown=${(ev: PointerEvent) => this._onPointerDown(ev, cfg)}
        @pointerup=${() => this._onPointerUp(cfg)}
        @pointercancel=${() => this._cancelHold()}
        @contextmenu=${(ev: Event) => ev.preventDefault()}
        title=${label}
      >
        <ha-icon .icon=${icon}></ha-icon>
        ${cfg.show_label !== false
          ? html`<span class="btn-label">${label}</span>`
          : nothing}
        ${cfg.show_state && stateObj
          ? html`<span class="btn-state">${this.hass.formatEntityState(stateObj)}</span>`
          : nothing}
      </button>
    `;
  }

  // ── Nested cards ───────────────────────────────────────────────────────────

  private _renderNestedCard(index: number): TemplateResult {
    const raw = this._config.nested_cards![index];
    const ncCfg: NestedCardConfig = { ...DEFAULT_NESTED_CARD, ...raw } as NestedCardConfig;
    const wrapperStyles: Record<string, string> = {
      left: `${ncCfg.left}%`,
      top: `${ncCfg.top}%`,
      width: ncCfg.width ?? "200px",
      height: ncCfg.height ?? "auto",
      transform: "translate(-50%, -50%)",
      "z-index": String(ncCfg.z_index ?? 2),
      ...(ncCfg.border_radius ? { "border-radius": ncCfg.border_radius, overflow: "hidden" } : {}),
      ...((ncCfg.styles as Record<string, string>) ?? {}),
    };

    return html`
      <div class="nested-card-wrapper ${ncCfg.hide_card_border ? "no-border" : ""}"
           style=${styleMap(wrapperStyles)}
           id="nested-${index}">
      </div>
    `;
  }

  private async _createNestedCards(): Promise<void> {
    if (!this._config.nested_cards) return;

    // Wait for the shadow DOM to render
    await this.updateComplete;

    for (let i = 0; i < this._config.nested_cards.length; i++) {
      const ncCfg = this._config.nested_cards[i];
      const wrapper = this.shadowRoot?.querySelector(`#nested-${i}`);
      if (!wrapper) continue;

      // Clear existing content
      wrapper.innerHTML = "";

      try {
        const cardEl = await this._createCardElement(ncCfg.card);
        if (cardEl) {
          cardEl.hass = this.hass;
          wrapper.appendChild(cardEl);
          this._nestedCards.set(i, cardEl);
        }
      } catch (err) {
        console.error(`[custom-room-card] Failed to create nested card ${i}:`, err);
        wrapper.innerHTML = `<div style="color:var(--error-color);padding:8px;">Error loading card</div>`;
      }
    }
  }

  private async _createCardElement(
    cardConfig: LovelaceCardConfig
  ): Promise<LovelaceCard> {
    // Use HA's built-in card creation helpers
    const helpers = await (window as any).loadCardHelpers?.();
    if (helpers?.createCardElement) {
      const el = helpers.createCardElement(cardConfig) as LovelaceCard;
      return el;
    }
    // Fallback: create custom element directly
    const tag =
      cardConfig.type.startsWith("custom:")
        ? cardConfig.type.substring(7)
        : `hui-${cardConfig.type}-card`;
    const el = document.createElement(tag) as unknown as LovelaceCard;
    el.setConfig(cardConfig);
    return el;
  }

  // ── Interaction handlers ───────────────────────────────────────────────────

  private _onPointerDown(ev: PointerEvent, cfg: EntityButtonConfig): void {
    this._holdTriggered = false;
    this._holdTimer = setTimeout(() => {
      this._holdTriggered = true;
      if (cfg.hold_action) {
        handleAction(this.hass, cfg.entity, cfg.hold_action);
      }
      this._addRipple(ev);
    }, 500);
  }

  private _onPointerUp(cfg: EntityButtonConfig): void {
    this._cancelHold();
    if (!this._holdTriggered) {
      handleAction(this.hass, cfg.entity, cfg.tap_action ?? { action: "toggle" });
    }
  }

  private _cancelHold(): void {
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
  }

  private _addRipple(ev: PointerEvent): void {
    const btn = (ev.target as HTMLElement).closest(".entity-btn") as HTMLElement;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${ev.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${ev.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  private _aspectRatioPadding(ratio: string): string {
    const parts = ratio.split("/").map(Number);
    if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) {
      return `${(parts[1] / parts[0]) * 100}%`;
    }
    return "56.25%"; // 16:9 fallback
  }
}

// ── Declaration for TypeScript ───────────────────────────────────────────────

declare global {
  interface HTMLElementTagNameMap {
    [CARD_NAME]: CustomRoomCard;
  }
}
