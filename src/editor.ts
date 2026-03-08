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
  HomeAssistant,
  DEFAULT_ENTITY_BUTTON,
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
        <!-- Background settings -->
        ${this._renderBackgroundSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
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

        <div class="entity-position">
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

        <button
          class="remove-btn"
          @click=${() => this._removeEntity(index)}
          title="Remove"
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
    `;
  }

  // ── Position preview ───────────────────────────────────────────────────────

  private _renderPreview(): TemplateResult {
    const entities = this._config.entities ?? [];
    if (entities.length === 0) return html`${nothing}`;

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
          ${entities.map(
            (e, i) => html`
              <div
                class="preview-dot"
                style=${styleMap({
                  left: `${e.left ?? 50}%`,
                  top: `${e.top ?? 50}%`,
                })}
                draggable="true"
                @dragstart=${(ev: DragEvent) => this._onDotDragStart(ev, i)}
                @dragend=${(ev: DragEvent) => this._onDotDragEnd(ev, i)}
              >
                <span class="dot-label">${e.label || e.entity || `#${i + 1}`}</span>
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

  private _onDotDragStart(ev: DragEvent, index: number): void {
    this._dragIndex = index;
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = "move";
      // Required for Firefox
      ev.dataTransfer.setData("text/plain", String(index));
    }
  }

  private _onDotDragEnd(ev: DragEvent, index: number): void {
    const box = this.shadowRoot?.querySelector(".preview-box") as HTMLElement;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const left = Math.round(
      Math.min(100, Math.max(0, ((ev.clientX - rect.left) / rect.width) * 100))
    );
    const top = Math.round(
      Math.min(100, Math.max(0, ((ev.clientY - rect.top) / rect.height) * 100))
    );
    this._updateEntity(index, "left", left);
    this._updateEntity(index, "top", top);
    this._dragIndex = -1;
  }

  private _onPreviewClick(_ev: MouseEvent): void {
    // Only act if no drag occurred
    if (this._dragIndex >= 0) return;
  }
}

// ── Declaration ──────────────────────────────────────────────────────────────

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: CustomRoomCardEditor;
  }
}
