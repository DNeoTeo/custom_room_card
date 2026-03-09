/**
 * custom-room-card-editor – Visual configuration editor.
 *
 * Provides a graphical UI inside the Home Assistant card editor to configure
 * background, entity buttons with drag-preview, and basic card options.
 */

import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import {
  CustomRoomCardConfig,
  EntityButtonConfig,
  NestedCardConfig,
  HomeAssistant,
  DEFAULT_ENTITY_BUTTON,
  DEFAULT_NESTED_CARD,
  LovelaceCardConfig,
} from "./types";
import { editorStyles } from "./styles";
import { deepClone } from "./helpers";

const EDITOR_TAG = "custom-room-card-editor";

@customElement(EDITOR_TAG)
export class CustomRoomCardEditor extends LitElement {
  static styles = editorStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: CustomRoomCardConfig;

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  public setConfig(config: CustomRoomCardConfig): void {
    this._config = deepClone(config);
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<div>Loading editor…</div>`;
    }

    return html`
      <div class="editor-container">
        <!-- General settings -->
        ${this._renderGeneralSection()}
        <!-- Text styling section -->
        ${this._renderTextStyleSection()}
        <!-- Background settings -->
        ${this._renderBackgroundSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
        <!-- Nested cards -->
        ${this._renderNestedCardsSection()}
        <!-- Position preview -->
        ${this._renderPreview()}
      </div>
    `;
  }

  // ── General section ────────────────────────────────────────────────────────

  private _renderGeneralSection(): TemplateResult {
    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:cog"></ha-icon>
          General
        </div>
        <div class="form-row">
          <ha-textfield
            label="Title"
            .value=${this._config.title ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateConfig("title", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Aspect Ratio (e.g. 16/9)"
            .value=${this._config.aspect_ratio ?? "16/9"}
            @input=${(ev: InputEvent) =>
              this._updateConfig("aspect_ratio", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-textfield
            label="Card Height (px, overrides ratio)"
            type="number"
            .value=${this._config.card_height?.toString() ?? ""}
            @input=${(ev: InputEvent) => {
              const v = (ev.target as HTMLInputElement).value;
              this._updateConfig("card_height", v ? Number(v) : undefined);
            }}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Design Width (px)"
            type="number"
            min="100"
            max="2000"
            .value=${this._config.design_width?.toString() ?? "600"}
            @input=${(ev: InputEvent) => {
              const v = (ev.target as HTMLInputElement).value;
              this._updateConfig("design_width", v ? Number(v) : 600);
            }}
          ></ha-textfield>
        </div>
        <div class="responsive-info">
          <ha-icon icon="mdi:responsive"></ha-icon>
          <span>
            Responsive scaling active: entity buttons and nested cards scale
            proportionally to the card width relative to the design width
            (<strong>${this._config.design_width ?? 600}px</strong>).
          </span>
        </div>
      </div>
    `;
  }

  // ── Text styling section ───────────────────────────────────────────────────

  private _renderTextStyleSection(): TemplateResult {
    const titleStyle = this._config.title_style ?? {};
    const labelStyle = this._config.button_label_style ?? {};
    const stateStyle = this._config.button_state_style ?? {};

    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:format-text"></ha-icon>
          Text Styling
        </div>

        <!-- Title styling -->
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--divider-color, #e0e0e0);">
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Title</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Family"
              .value=${titleStyle.font_family ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("title_style", "font_family", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${titleStyle.font_size?.toString() ?? ""}
              @input=${(ev: InputEvent) => {
                const v = (ev.target as HTMLInputElement).value;
                this._updateTextStyle("title_style", "font_size", v ? Number(v) : undefined);
              }}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-textfield
              label="Text Color"
              .value=${titleStyle.text_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("title_style", "text_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
        </div>

        <!-- Button label styling -->
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--divider-color, #e0e0e0);">
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Button Label</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Family"
              .value=${labelStyle.font_family ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_label_style", "font_family", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${labelStyle.font_size?.toString() ?? ""}
              @input=${(ev: InputEvent) => {
                const v = (ev.target as HTMLInputElement).value;
                this._updateTextStyle("button_label_style", "font_size", v ? Number(v) : undefined);
              }}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-textfield
              label="Text Color"
              .value=${labelStyle.text_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_label_style", "text_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
        </div>

        <!-- Button state styling -->
        <div>
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Button State</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Family"
              .value=${stateStyle.font_family ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_state_style", "font_family", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${stateStyle.font_size?.toString() ?? ""}
              @input=${(ev: InputEvent) => {
                const v = (ev.target as HTMLInputElement).value;
                this._updateTextStyle("button_state_style", "font_size", v ? Number(v) : undefined);
              }}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-textfield
              label="Text Color"
              .value=${stateStyle.text_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_state_style", "text_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
        </div>
      </div>
    `;
  }

  // ── Background section ─────────────────────────────────────────────────────

  private _renderBackgroundSection(): TemplateResult {
    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:image"></ha-icon>
          Background
        </div>
        <div class="form-row">
          <ha-textfield
            label="Image URL (/local/... or https://...)"
            .value=${this._config.background_image ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateConfig("background_image", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Background Color"
            .value=${this._config.background_color ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateConfig("background_color", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-textfield
            label="Opacity (0-1)"
            type="number"
            min="0"
            max="1"
            step="0.1"
            .value=${this._config.background_opacity?.toString() ?? "1"}
            @input=${(ev: InputEvent) =>
              this._updateConfig("background_opacity", Number((ev.target as HTMLInputElement).value))}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Size (cover, contain, 100%)"
            .value=${this._config.background_size ?? "cover"}
            @input=${(ev: InputEvent) =>
              this._updateConfig("background_size", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-textfield
            label="Position (center, top left…)"
            .value=${this._config.background_position ?? "center"}
            @input=${(ev: InputEvent) =>
              this._updateConfig("background_position", (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
      </div>
    `;
  }

  // ── Entities section ───────────────────────────────────────────────────────

  private _renderEntitiesSection(): TemplateResult {
    const entities = this._config.entities ?? [];

    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
          Entity Buttons
        </div>

        <div class="entity-list">
          ${entities.map((e, i) => this._renderEntityRow(e, i))}
        </div>

        <button class="add-btn" @click=${this._addEntity} title="Add entity button">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `;
  }

  private _renderEntityRow(
    entity: EntityButtonConfig,
    index: number
  ): TemplateResult {
    return html`
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${entity.entity ?? ""}
          allow-custom-entity
          @value-changed=${(ev: CustomEvent) =>
            this._updateEntity(index, "entity", ev.detail.value)}
        ></ha-entity-picker>

        <button
          class="remove-btn"
          @click=${() => this._removeEntity(index)}
          title="Remove"
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>

        <div class="entity-extra-row">
          <ha-textfield
            label="Left %"
            type="number"
            min="0"
            max="100"
            .value=${entity.left?.toString() ?? "50"}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "left", Number((ev.target as HTMLInputElement).value))}
          ></ha-textfield>
          <ha-textfield
            label="Top %"
            type="number"
            min="0"
            max="100"
            .value=${entity.top?.toString() ?? "50"}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "top", Number((ev.target as HTMLInputElement).value))}
          ></ha-textfield>
        </div>

        <div class="entity-extra-row">
          <ha-textfield
            label="Icon"
            .value=${entity.icon ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "icon", (ev.target as HTMLInputElement).value || undefined)}
          ></ha-textfield>

          <ha-textfield
            label="Label"
            .value=${entity.label ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "label", (ev.target as HTMLInputElement).value || undefined)}
          ></ha-textfield>
        </div>

        <div class="entity-extra-row">
          <ha-textfield
            label="W (px)"
            type="number"
            .value=${entity.width?.toString() ?? "60"}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "width", Number((ev.target as HTMLInputElement).value) || 60)}
          ></ha-textfield>

          <ha-textfield
            label="H (px)"
            type="number"
            .value=${entity.height?.toString() ?? "60"}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "height", Number((ev.target as HTMLInputElement).value) || 60)}
          ></ha-textfield>

          <ha-textfield
            label="Font (px)"
            type="number"
            min="6"
            max="48"
            .value=${entity.font_size?.toString() ?? "10"}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "font_size", Number((ev.target as HTMLInputElement).value) || undefined)}
          ></ha-textfield>
        </div>

        <!-- Button background styling -->
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--divider-color, #e0e0e0);">
          <label style="display: block; font-size: 0.85em; color: var(--secondary-text-color); margin-bottom: 8px;">
            Button Background
          </label>
          <div class="entity-extra-row">
            <ha-textfield
              label="Background Color"
              .value=${entity.button_background_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateEntity(index, "button_background_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
          <div class="entity-extra-row">
            <ha-textfield
              label="Background Image URL"
              .value=${entity.button_background_image ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateEntity(index, "button_background_image", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
        </div>
      </div>
    `;
  }

  // ── Nested cards section ────────────────────────────────────────────────────

  /** Known built-in HA card types for the dropdown */
  // Available card types for reference:
  // button, entities, entity, gauge, glance, history-graph, light, map,
  // markdown, media-control, picture, sensor, thermostat, weather-forecast,
  // tile, mushroom-entity-card, custom:button-card, etc.

  private _renderNestedCardsSection(): TemplateResult {
    const nestedCards = this._config.nested_cards ?? [];

    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:cards-outline"></ha-icon>
          Nested Cards
        </div>

        <div class="nested-cards-list">
          ${nestedCards.map((nc, i) => this._renderNestedCardRow(nc, i))}
        </div>

        <button class="add-btn" @click=${this._addNestedCard} title="Add nested card">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `;
  }

  private _renderNestedCardRow(
    nc: NestedCardConfig,
    index: number
  ): TemplateResult {
    const cardType = nc.card?.type ?? "";
    const yamlConfig = this._cardConfigToYaml(nc.card);

    return html`
      <div class="nested-card-row">
        <div class="nested-card-header">
          <ha-icon icon="mdi:card-outline"></ha-icon>
          <span class="nested-card-title">
            ${nc.label || cardType || `Card #${index + 1}`}
          </span>
          <button
            class="remove-btn"
            @click=${() => this._removeNestedCard(index)}
            title="Remove card"
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="form-row">
          <ha-textfield
            label="Label (editor only)"
            .value=${nc.label ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "label", (ev.target as HTMLInputElement).value || undefined)}
          ></ha-textfield>
        </div>

        <!-- Card type selector -->
        <div class="form-row">
          <ha-textfield
            label="Card Type (e.g. button, sensor, custom:button-card)"
            .value=${cardType}
            @input=${(ev: InputEvent) => {
              const newType = (ev.target as HTMLInputElement).value;
              const newCard = { ...nc.card, type: newType };
              this._updateNestedCard(index, "card", newCard);
            }}
          ></ha-textfield>
        </div>

        <!-- Quick type chips -->
        <div class="type-chips">
          ${["button", "sensor", "gauge", "tile", "entity", "thermostat", "weather-forecast", "markdown"].map(
            (t) => html`
              <button
                class="type-chip ${cardType === t ? "active" : ""}"
                @click=${() => {
                  const newCard = { ...nc.card, type: t };
                  this._updateNestedCard(index, "card", newCard);
                }}
              >${t}</button>
            `
          )}
        </div>

        <!-- Card YAML configuration -->
        <div class="form-row">
          <textarea
            class="yaml-editor"
            rows="5"
            placeholder="Card YAML config (without 'type:')&#10;e.g.:&#10;entity: sensor.temperature&#10;name: My Sensor"
            .value=${yamlConfig}
            @change=${(ev: Event) => {
              const yaml = (ev.target as HTMLTextAreaElement).value;
              const parsed = this._yamlToCardConfig(yaml, cardType);
              this._updateNestedCard(index, "card", parsed);
            }}
          ></textarea>
        </div>

        <!-- Position & Size -->
        <div class="form-row">
          <ha-textfield
            label="Left %"
            type="number"
            min="0"
            max="100"
            .value=${nc.left?.toString() ?? "50"}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "left", Number((ev.target as HTMLInputElement).value))}
          ></ha-textfield>
          <ha-textfield
            label="Top %"
            type="number"
            min="0"
            max="100"
            .value=${nc.top?.toString() ?? "50"}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "top", Number((ev.target as HTMLInputElement).value))}
          ></ha-textfield>
          <ha-textfield
            label="Width (px, %, auto)"
            .value=${nc.width ?? "200px"}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "width", (ev.target as HTMLInputElement).value || "200px")}
          ></ha-textfield>
          <ha-textfield
            label="Height (px, %, auto)"
            .value=${nc.height ?? "auto"}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "height", (ev.target as HTMLInputElement).value || "auto")}
          ></ha-textfield>
        </div>

        <!-- Advanced options (collapsed by default) -->
        <details class="advanced-options">
          <summary>Advanced options</summary>
          <div class="form-row">
            <ha-textfield
              label="Z-Index"
              type="number"
              .value=${nc.z_index?.toString() ?? "2"}
              @input=${(ev: InputEvent) =>
                this._updateNestedCard(index, "z_index", Number((ev.target as HTMLInputElement).value) || 2)}
            ></ha-textfield>
            <ha-textfield
              label="Border Radius (CSS)"
              .value=${nc.border_radius ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateNestedCard(index, "border_radius", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${nc.hide_card_border ?? false}
                @change=${(ev: Event) =>
                  this._updateNestedCard(index, "hide_card_border", (ev.target as HTMLInputElement).checked)}
              />
              Hide card border/shadow (transparent background)
            </label>
          </div>
        </details>
      </div>
    `;
  }

  // ── Position preview ───────────────────────────────────────────────────────

  private _renderPreview(): TemplateResult {
    const entities = this._config.entities ?? [];
    const nestedCards = this._config.nested_cards ?? [];
    if (entities.length === 0 && nestedCards.length === 0) return html`${nothing}`;

    const bgStyle: Record<string, string> = {};
    if (this._config.background_image) {
      bgStyle["background-image"] = `url('${this._config.background_image}')`;
      bgStyle["background-size"] = this._config.background_size ?? "cover";
      bgStyle["background-position"] = this._config.background_position ?? "center";
      bgStyle["background-repeat"] = "no-repeat";
      if (this._config.background_opacity !== undefined) {
        bgStyle["opacity"] = String(this._config.background_opacity);
      }
    }
    if (this._config.background_color) {
      bgStyle["background-color"] = this._config.background_color;
    }

    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          Position Preview
        </div>
        <div class="preview-box" style=${styleMap(bgStyle)}
             @click=${(ev: MouseEvent) => this._onPreviewClick(ev)}>
          <!-- Entity dots (blue) -->
          ${entities.map(
            (e, i) => html`
              <div
                class="preview-dot entity-dot"
                style=${styleMap({
                  left: `${e.left ?? 50}%`,
                  top: `${e.top ?? 50}%`,
                })}
                draggable="true"
                @dragstart=${(ev: DragEvent) => this._onDotDragStart(ev, i, "entity")}
                @dragend=${(ev: DragEvent) => this._onDotDragEnd(ev, i, "entity")}
              >
                <span class="dot-label">${e.label || e.entity || `E#${i + 1}`}</span>
              </div>
            `
          )}
          <!-- Nested card dots (orange rectangles) -->
          ${nestedCards.map(
            (nc, i) => html`
              <div
                class="preview-dot card-dot"
                style=${styleMap({
                  left: `${nc.left ?? 50}%`,
                  top: `${nc.top ?? 50}%`,
                })}
                draggable="true"
                @dragstart=${(ev: DragEvent) => this._onDotDragStart(ev, i, "card")}
                @dragend=${(ev: DragEvent) => this._onDotDragEnd(ev, i, "card")}
              >
                <span class="dot-label">${nc.label || nc.card?.type || `C#${i + 1}`}</span>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  // ── Event handlers ─────────────────────────────────────────────────────────

  private _addEntity(): void {
    const entities = [...(this._config.entities ?? [])];
    entities.push({
      entity: "",
      left: DEFAULT_ENTITY_BUTTON.left!,
      top: DEFAULT_ENTITY_BUTTON.top!,
    });
    this._updateConfig("entities", entities);
  }

  private _removeEntity(index: number): void {
    const entities = [...(this._config.entities ?? [])];
    entities.splice(index, 1);
    this._updateConfig("entities", entities);
  }

  private _updateEntity(
    index: number,
    key: keyof EntityButtonConfig,
    value: unknown
  ): void {
    const entities = deepClone(this._config.entities ?? []);
    if (!entities[index]) return;
    (entities[index] as any)[key] = value;
    this._updateConfig("entities", entities);
  }

  // ── Text style handlers ────────────────────────────────────────────────────

  private _updateTextStyle(
    styleKey: "title_style" | "button_label_style" | "button_state_style",
    property: "font_family" | "font_size" | "text_color",
    value: string | number | undefined
  ): void {
    const currentStyle = deepClone((this._config as any)[styleKey] ?? {});
    if (value === undefined || value === "") {
      delete currentStyle[property];
    } else {
      currentStyle[property] = value;
    }
    const isEmptyStyle = Object.keys(currentStyle).length === 0;
    this._updateConfig(styleKey, isEmptyStyle ? undefined : currentStyle);
  }

  // ── Nested card handlers ───────────────────────────────────────────────────

  private _addNestedCard(): void {
    const nestedCards = [...(this._config.nested_cards ?? [])];
    nestedCards.push({
      card: { type: "button" },
      left: DEFAULT_NESTED_CARD.left!,
      top: DEFAULT_NESTED_CARD.top!,
      width: DEFAULT_NESTED_CARD.width,
      height: DEFAULT_NESTED_CARD.height,
    });
    this._updateConfig("nested_cards", nestedCards);
  }

  private _removeNestedCard(index: number): void {
    const nestedCards = [...(this._config.nested_cards ?? [])];
    nestedCards.splice(index, 1);
    this._updateConfig("nested_cards", nestedCards);
  }

  private _updateNestedCard(
    index: number,
    key: keyof NestedCardConfig,
    value: unknown
  ): void {
    const nestedCards = deepClone(this._config.nested_cards ?? []);
    if (!nestedCards[index]) return;
    (nestedCards[index] as any)[key] = value;
    this._updateConfig("nested_cards", nestedCards);
  }

  // ── YAML helpers ───────────────────────────────────────────────────────────

  /**
   * Converts a card config object (minus `type`) to a simple YAML-like string.
   * Only handles flat key:value and simple nested objects.
   */
  private _cardConfigToYaml(cardConfig: LovelaceCardConfig | undefined): string {
    if (!cardConfig) return "";
    const lines: string[] = [];
    for (const [key, value] of Object.entries(cardConfig)) {
      if (key === "type") continue;
      if (value === undefined || value === null) continue;
      if (typeof value === "object" && !Array.isArray(value)) {
        lines.push(`${key}:`);
        for (const [k2, v2] of Object.entries(value as Record<string, unknown>)) {
          lines.push(`  ${k2}: ${JSON.stringify(v2)}`);
        }
      } else if (Array.isArray(value)) {
        lines.push(`${key}: ${JSON.stringify(value)}`);
      } else {
        lines.push(`${key}: ${value}`);
      }
    }
    return lines.join("\n");
  }

  /**
   * Parses a simple YAML-like string back into a card config object.
   * Handles flat key: value pairs. For complex configs, falls back to JSON.
   */
  private _yamlToCardConfig(yaml: string, cardType: string): LovelaceCardConfig {
    const config: Record<string, unknown> = { type: cardType };
    const lines = yaml.split("\n");
    let currentObj: Record<string, unknown> | null = null;
    let currentKey = "";

    for (const line of lines) {
      const trimmed = line.trimEnd();
      if (!trimmed || trimmed.startsWith("#")) continue;

      // Indented line = sub-property
      if (trimmed.startsWith("  ") && currentObj !== null) {
        const match = trimmed.trim().match(/^([^:]+):\s*(.*)$/);
        if (match) {
          currentObj[match[1].trim()] = this._parseYamlValue(match[2].trim());
        }
        continue;
      }

      // Top-level line
      const match = trimmed.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const key = match[1].trim();
        const val = match[2].trim();
        if (key === "type") continue; // Ignore type in YAML

        if (val === "" || val === undefined) {
          // Start of nested object
          currentKey = key;
          currentObj = {};
          config[currentKey] = currentObj;
        } else {
          currentObj = null;
          config[key] = this._parseYamlValue(val);
        }
      }
    }

    return config as LovelaceCardConfig;
  }

  private _parseYamlValue(val: string): unknown {
    if (val === "true") return true;
    if (val === "false") return false;
    if (val === "null" || val === "~") return null;
    // Try JSON (for arrays/objects)
    if (val.startsWith("[") || val.startsWith("{")) {
      try { return JSON.parse(val); } catch { /* fallback */ }
    }
    // Number
    if (/^-?\d+(\.\d+)?$/.test(val)) return Number(val);
    // Strip quotes
    if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
      return val.slice(1, -1);
    }
    return val;
  }

  private _updateConfig(key: string, value: unknown): void {
    this._config = { ...this._config, [key]: value };
    this._fireConfigChanged();
  }

  private _fireConfigChanged(): void {
    const event = new CustomEvent("config-changed", {
      bubbles: true,
      composed: true,
      detail: { config: this._config },
    });
    this.dispatchEvent(event);
  }

  // ── Drag & drop in preview ─────────────────────────────────────────────────

  private _dragIndex = -1;
  private _dragItemType: "entity" | "card" = "entity";

  private _onDotDragStart(ev: DragEvent, index: number, type: "entity" | "card"): void {
    this._dragIndex = index;
    this._dragItemType = type;
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.setData("text/plain", `${type}:${index}`);
    }
  }

  private _onDotDragEnd(ev: DragEvent, index: number, type: "entity" | "card"): void {
    const box = this.shadowRoot?.querySelector(".preview-box") as HTMLElement;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const left = Math.round(
      Math.min(100, Math.max(0, ((ev.clientX - rect.left) / rect.width) * 100))
    );
    const top = Math.round(
      Math.min(100, Math.max(0, ((ev.clientY - rect.top) / rect.height) * 100))
    );
    if (type === "entity") {
      this._updateEntity(index, "left", left);
      this._updateEntity(index, "top", top);
    } else {
      this._updateNestedCard(index, "left", left);
      this._updateNestedCard(index, "top", top);
    }
    this._dragIndex = -1;
  }

  private _onPreviewClick(_ev: MouseEvent): void {
    // Only act if no drag occurred
    if (this._dragIndex >= 0 && this._dragItemType) return;
  }
}

// ── Declaration ──────────────────────────────────────────────────────────────

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: CustomRoomCardEditor;
  }
}
