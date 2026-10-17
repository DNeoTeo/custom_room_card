/**
 * custom-room-card-editor – Visual configuration editor.
 *
 * Provides a comprehensive GUI for editing:
 * - General card settings (title and global font)
 * - Text styling (title, button labels, entity state)
 * - Entity button positioning, sizing, icons, and labels
 * - Nested card selection and configuration through Home Assistant's native UI
 * - Live position preview with drag indicators
 */

import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import {
  CustomRoomCardConfig,
  BackgroundConditionConfig,
  EntityButtonConfig,
  NestedCardConfig,
  HomeAssistant,
  DEFAULT_ENTITY_BUTTON,
  DEFAULT_NESTED_CARD,
  LovelaceCardConfig,
} from "./types";
import { editorStyles } from "./styles";
import { deepClone } from "./helpers";
import { AVAILABLE_FONTS } from "./fonts";

const EDITOR_TAG = "custom-room-card-editor";

@customElement(EDITOR_TAG)
export class CustomRoomCardEditor extends LitElement {
  static styles = editorStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: unknown;
  @state() private _config!: CustomRoomCardConfig;
  @state() private _showNestedCardPicker = false;
  @state() private _isUploadingBackground = false;
  @state() private _backgroundUploadError?: string;
  /** Keep the native picker detached from the dashboard's active view. */
  private readonly _nestedCardsLovelace = { views: [] };

  /**
   * The native Lovelace picker/editor dispatches `config-changed`, the same
   * event used by the dashboard editor. Capture these events inside this
   * shadow root before they can reach the view editor, then write only to our
   * `nested_cards` configuration.
   */
  private readonly _onNestedCardConfigChanged = (event: Event): void => {
    const path = event.composedPath();
    const picker = path.find(
      (target): target is HTMLElement =>
        target instanceof HTMLElement && target.hasAttribute("data-nested-card-picker")
    );
    const cardEditor = path.find(
      (target): target is HTMLElement =>
        target instanceof HTMLElement && target.hasAttribute("data-nested-card-index")
    );

    if (!picker && !cardEditor) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    const card = (event as CustomEvent<{ config?: LovelaceCardConfig }>).detail?.config;
    if (!card?.type) return;

    if (picker) {
      this._addNestedCard(card);
      return;
    }

    const index = Number(cardEditor?.dataset.nestedCardIndex);
    if (Number.isInteger(index) && index >= 0) {
      this._updateNestedCard(index, "card", card);
    }
  };

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  public setConfig(config: CustomRoomCardConfig): void {
    this._config = deepClone(config);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.renderRoot.addEventListener("config-changed", this._onNestedCardConfigChanged, true);
  }

  disconnectedCallback(): void {
    this.renderRoot.removeEventListener("config-changed", this._onNestedCardConfigChanged, true);
    super.disconnectedCallback();
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
          <ha-select
            label="Global Font Family"
            .value=${this._config.global_font_family ?? "system-ui"}
            .options=${AVAILABLE_FONTS}
            @selected=${this._onFontSelected}
            @value-changed=${this._onFontSelected}
          >
            <!-- Compatibility with Home Assistant versions that still use slots. -->
            ${AVAILABLE_FONTS.map(
              (font) => html`<mwc-list-item value=${font.value}>${font.label}</mwc-list-item>`
            )}
          </ha-select>
        </div>
        <p class="native-layout-info">
          La largeur et la hauteur de la carte sont gérées par Home Assistant. Le canevas s'adapte automatiquement pour le placement des éléments.
        </p>
        <div class="background-upload">
          <div class="background-upload-title">Image de fond par défaut</div>
          <div class="background-upload-actions">
            <label class="file-upload-btn">
              <ha-icon icon="mdi:upload"></ha-icon>
              ${this._isUploadingBackground ? "Import en cours…" : "Importer une image"}
              <input
                type="file"
                accept="image/*"
                ?disabled=${this._isUploadingBackground}
                @change=${this._uploadBackgroundImage}
              />
            </label>
            ${this._config.background_image
              ? html`
                  <button type="button" class="clear-btn" @click=${this._clearBackgroundImage}>
                    Remove image
                  </button>
                `
              : nothing}
          </div>
          <ha-selector
            class="background-media-selector"
            .hass=${this.hass}
            .selector=${{ media: { accept: ["image/*"], hide_content_type: true } }}
            .value=${this._mediaSelectorValue(this._config.background_image)}
            @value-changed=${this._onDefaultBackgroundSelected}
          ></ha-selector>
          <p class="background-help">Choisir une image déjà présente dans la médiathèque Home Assistant.</p>
          ${this._config.background_image
            ? html`<div class="background-upload-name">${this._config.background_image}</div>`
            : nothing}
          ${this._backgroundUploadError
            ? html`<div class="upload-error">${this._backgroundUploadError}</div>`
            : nothing}
        </div>
        ${this._renderBackgroundConditions()}
      </div>
    `;
  }

  private _renderBackgroundConditions(): TemplateResult {
    const rules = this._config.background_conditions ?? [];
    return html`
      <div class="background-conditions">
        <div class="background-upload-title">Fonds conditionnels</div>
        <p class="background-help">
          La première règle satisfaite est appliquée. Les conditions sont celles des automatisations Home Assistant.
        </p>
        ${rules.map((rule, index) => this._renderBackgroundCondition(rule, index))}
        <button type="button" class="add-condition-btn" @click=${this._addBackgroundCondition}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Ajouter une règle de fond
        </button>
      </div>
    `;
  }

  private _renderBackgroundCondition(
    rule: BackgroundConditionConfig,
    index: number
  ): TemplateResult {
    return html`
      <div class="background-condition-row">
        <div class="background-condition-header">
          <span>Règle ${index + 1}</span>
          <button type="button" class="remove-btn" @click=${() => this._removeBackgroundCondition(index)} title="Supprimer la règle">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{ media: { accept: ["image/*"], hide_content_type: true } }}
          .value=${this._mediaSelectorValue(rule.image)}
          @value-changed=${(event: CustomEvent) => this._updateBackgroundConditionImage(index, event)}
        ></ha-selector>
        <ha-selector
          class="background-condition-selector"
          .hass=${this.hass}
          .selector=${{ condition: { optionsInSidebar: false } }}
          .value=${rule.conditions}
          @value-changed=${(event: CustomEvent) => this._updateBackgroundConditions(index, event)}
        ></ha-selector>
      </div>
    `;
  }

  // ── Text styling section ───────────────────────────────────────────────────

  private _renderTextStyleSection(): TemplateResult {
    const titleStyle = this._config.title_style ?? {};
    const labelStyle = this._config.button_label_style ?? {};

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
              label="Font Size (px)"
              type="number"
              .value=${titleStyle.font_size?.toString() ?? ""}
              @input=${(ev: InputEvent) => {
                const v = (ev.target as HTMLInputElement).value;
                this._updateTextStyle("title_style", "font_size", v ? Number(v) : undefined);
              }}
            ></ha-textfield>
            <ha-textfield
              label="Text Color"
              .value=${titleStyle.text_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("title_style", "text_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
            <input
              class="color-picker"
              type="color"
              aria-label="Pick title color"
              .value=${this._colorPickerValue(titleStyle.text_color)}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("title_style", "text_color", (ev.target as HTMLInputElement).value)}
            />
          </div>
        </div>

        <!-- Button label styling -->
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--divider-color, #e0e0e0);">
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Button Label</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${labelStyle.font_size?.toString() ?? ""}
              @input=${(ev: InputEvent) => {
                const v = (ev.target as HTMLInputElement).value;
                this._updateTextStyle("button_label_style", "font_size", v ? Number(v) : undefined);
              }}
            ></ha-textfield>
            <input
              class="color-picker"
              type="color"
              aria-label="Pick button label color"
              .value=${this._colorPickerValue(labelStyle.text_color)}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_label_style", "text_color", (ev.target as HTMLInputElement).value)}
            />
            <ha-textfield
              label="Text Color"
              .value=${labelStyle.text_color ?? ""}
              @input=${(ev: InputEvent) =>
                this._updateTextStyle("button_label_style", "text_color", (ev.target as HTMLInputElement).value || undefined)}
            ></ha-textfield>
          </div>
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

        <button type="button" class="add-btn" @click=${this._addEntity} title="Add entity button">
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
        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: {} }}
          .value=${entity.entity ?? ""}
          @value-changed=${(ev: CustomEvent) =>
            this._updateEntity(index, "entity", ev.detail.value)}
        ></ha-selector>

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
            label="Button Background Color"
            .value=${entity.background_color ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "background_color", (ev.target as HTMLInputElement).value || undefined)}
          ></ha-textfield>
          <input
            class="color-picker"
            type="color"
            aria-label="Pick entity button background color"
            .value=${this._colorPickerValue(entity.background_color)}
            @input=${(ev: InputEvent) =>
              this._updateEntity(index, "background_color", (ev.target as HTMLInputElement).value)}
          />
        </div>

        <div class="entity-extra-row">
          <ha-icon-picker
            label="Icon"
            .value=${entity.icon ?? ""}
            @value-changed=${(ev: CustomEvent) =>
              this._updateEntity(index, "icon", ev.detail.value || undefined)}
          ></ha-icon-picker>

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

      </div>
    `;
  }

  // ── Nested cards section ────────────────────────────────────────────────────

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

        ${this._showNestedCardPicker
          ? html`
              <div class="card-picker">
                <hui-card-picker
                  data-nested-card-picker
                  .hass=${this.hass}
                  .lovelace=${this._nestedCardsLovelace}
                ></hui-card-picker>
                <button class="cancel-btn" @click=${() => (this._showNestedCardPicker = false)}>
                  Cancel
                </button>
              </div>
            `
          : nothing}

        <button class="add-btn" @click=${() => (this._showNestedCardPicker = true)} title="Add nested card">
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

        <hui-card-element-editor
          data-nested-card-index=${String(index)}
          .hass=${this.hass}
          .lovelace=${this._nestedCardsLovelace}
          .value=${nc.card}
        ></hui-card-element-editor>

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

        <div class="form-row">
          <ha-textfield
            label="Nested Card Background Color"
            .value=${nc.background_color ?? ""}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "background_color", (ev.target as HTMLInputElement).value || undefined)}
          ></ha-textfield>
          <input
            class="color-picker"
            type="color"
            aria-label="Pick nested card background color"
            .value=${this._colorPickerValue(nc.background_color)}
            @input=${(ev: InputEvent) =>
              this._updateNestedCard(index, "background_color", (ev.target as HTMLInputElement).value)}
          />
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

        </details>
      </div>
    `;
  }

  // ── Position preview ───────────────────────────────────────────────────────

  private _renderPreview(): TemplateResult {
    const entities = this._config.entities ?? [];
    const nestedCards = this._config.nested_cards ?? [];
    if (entities.length === 0 && nestedCards.length === 0) return html`${nothing}`;

    return html`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          Position Preview
        </div>
        <div class="preview-box"
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

  private _addEntity = (): void => {
    const entities = [...(this._config.entities ?? [])];
    entities.push({
      entity: "",
      left: DEFAULT_ENTITY_BUTTON.left!,
      top: DEFAULT_ENTITY_BUTTON.top!,
    });
    this._updateConfig("entities", entities);
    // Update the editor immediately; Home Assistant will subsequently echo the
    // config-changed event back through setConfig.
    this.requestUpdate();
  };

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
    styleKey: "title_style" | "button_label_style",
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

  private _colorPickerValue(value: string | undefined): string {
    return /^#[0-9a-f]{6}$/i.test(value ?? "") ? value! : "#000000";
  }

  private _onFontSelected(event: Event): void {
    const detailValue = (event as CustomEvent<{ value?: unknown }>).detail?.value;
    const elementValue = (event.currentTarget as { value?: unknown } | null)?.value;
    const value = typeof detailValue === "string" ? detailValue : elementValue;
    if (typeof value === "string" && value) {
      this._updateConfig("global_font_family", value);
    }
  }

  private _clearBackgroundImage = (): void => {
    this._backgroundUploadError = undefined;
    this._updateConfig("background_image", undefined);
  };

  /** Convert the value emitted by HA's media selector into our compact URI. */
  private _mediaContentId(value: unknown): string | undefined {
    if (typeof value === "string") return value || undefined;
    if (value && typeof value === "object") {
      const contentId = (value as { media_content_id?: unknown }).media_content_id;
      return typeof contentId === "string" && contentId ? contentId : undefined;
    }
    return undefined;
  }

  private _mediaSelectorValue(image?: string): Record<string, string> | undefined {
    return image ? { media_content_id: image } : undefined;
  }

  private _onDefaultBackgroundSelected = (event: CustomEvent): void => {
    this._backgroundUploadError = undefined;
    this._updateConfig("background_image", this._mediaContentId(event.detail?.value));
  };

  private _addBackgroundCondition = (): void => {
    const rules = [...(this._config.background_conditions ?? [])];
    rules.push({ image: "", conditions: [] });
    this._updateConfig("background_conditions", rules);
  };

  private _removeBackgroundCondition(index: number): void {
    const rules = [...(this._config.background_conditions ?? [])];
    rules.splice(index, 1);
    this._updateConfig("background_conditions", rules);
  }

  private _updateBackgroundConditionImage(index: number, event: CustomEvent): void {
    const rules = deepClone(this._config.background_conditions ?? []);
    if (!rules[index]) return;
    rules[index].image = this._mediaContentId(event.detail?.value) ?? "";
    this._updateConfig("background_conditions", rules);
  }

  private _updateBackgroundConditions(index: number, event: CustomEvent): void {
    const conditions = event.detail?.value;
    if (!Array.isArray(conditions)) return;
    const rules = deepClone(this._config.background_conditions ?? []);
    if (!rules[index]) return;
    rules[index].conditions = conditions;
    this._updateConfig("background_conditions", rules);
  }

  private _uploadBackgroundImage = async (event: Event): Promise<void> => {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;

    this._backgroundUploadError = undefined;
    if (!file.type.startsWith("image/")) {
      this._backgroundUploadError = "Please choose an image file.";
      return;
    }

    this._isUploadingBackground = true;
    try {
      const formData = new FormData();
      // Keep this card's assets contained in one media folder. Home Assistant
      // creates the missing folders safely during the upload.
      formData.append("media_content_id", "media-source://media_source/local/imported_images");
      formData.append("file", file, file.name);
      // Use Home Assistant's authenticated fetch helper. A regular browser
      // fetch has no bearer token and the media endpoint correctly rejects it.
      const response = await this.hass.fetchWithAuth("/api/media_source/local_source/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Upload failed (${response.status})`);
      }
      const result = (await response.json()) as { media_content_id?: string };
      if (!result.media_content_id) {
        throw new Error("Home Assistant did not return the uploaded image.");
      }
      this._updateConfig("background_image", result.media_content_id);
    } catch (error) {
      this._backgroundUploadError = error instanceof Error ? error.message : "Unable to import the image.";
    } finally {
      this._isUploadingBackground = false;
    }
  };

  // ── Nested card handlers ───────────────────────────────────────────────────

  private _addNestedCard(card: LovelaceCardConfig): void {
    const nestedCards = [...(this._config.nested_cards ?? [])];
    nestedCards.push({
      card,
      left: DEFAULT_NESTED_CARD.left!,
      top: DEFAULT_NESTED_CARD.top!,
      width: DEFAULT_NESTED_CARD.width,
      height: DEFAULT_NESTED_CARD.height,
    });
    this._showNestedCardPicker = false;
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

  private _updateConfig(key: string, value: unknown): void {
    this._config = { ...this._config, [key]: value };
    this.requestUpdate();
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
