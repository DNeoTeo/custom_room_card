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
import { LitElement, TemplateResult } from "lit";
import { CustomRoomCardConfig, HomeAssistant } from "./types";
declare const EDITOR_TAG = "custom-room-card-editor";
export declare class CustomRoomCardEditor extends LitElement {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    lovelace?: unknown;
    private _config;
    private _showNestedCardPicker;
    /** Keep the native picker detached from the dashboard's active view. */
    private readonly _nestedCardsLovelace;
    /**
     * The native Lovelace picker/editor dispatches `config-changed`, the same
     * event used by the dashboard editor. Capture these events inside this
     * shadow root before they can reach the view editor, then write only to our
     * `nested_cards` configuration.
     */
    private readonly _onNestedCardConfigChanged;
    setConfig(config: CustomRoomCardConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _renderGeneralSection;
    private _renderTextStyleSection;
    private _renderEntitiesSection;
    private _renderEntityRow;
    private _renderNestedCardsSection;
    private _renderNestedCardRow;
    private _renderPreview;
    private _addEntity;
    private _removeEntity;
    private _updateEntity;
    private _updateTextStyle;
    private _colorPickerValue;
    private _onFontSelected;
    private _addNestedCard;
    private _removeNestedCard;
    private _updateNestedCard;
    private _updateConfig;
    private _fireConfigChanged;
    private _dragIndex;
    private _dragItemType;
    private _onDotDragStart;
    private _onDotDragEnd;
    private _onPreviewClick;
}
declare global {
    interface HTMLElementTagNameMap {
        [EDITOR_TAG]: CustomRoomCardEditor;
    }
}
export {};
