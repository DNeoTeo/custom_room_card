/**
 * custom-room-card-editor – Visual configuration editor.
 *
 * Provides a comprehensive GUI for editing:
 * - General card settings (title, global font, aspect ratio)
 * - Text styling (title, button labels, entity state)
 * - Background images and colors with positioning/opacity control
 * - Entity button positioning, sizing, icons, labels, and backgrounds
 * - Nested card configuration with YAML editor and background customization
 * - Background overlay modes (normal or transparent-children)
 * - Custom YAML card support with full YAML textarea editing
 * - Live position preview with drag indicators
 */
import { LitElement, TemplateResult } from "lit";
import { CustomRoomCardConfig, HomeAssistant } from "./types";
declare const EDITOR_TAG = "custom-room-card-editor";
export declare class CustomRoomCardEditor extends LitElement {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    private _config;
    setConfig(config: CustomRoomCardConfig): void;
    protected render(): TemplateResult;
    private _renderGeneralSection;
    private _renderTextStyleSection;
    private _renderBackgroundSection;
    private _renderEntitiesSection;
    private _renderEntityRow;
    /** Known built-in HA card types for the dropdown */
    private _renderNestedCardsSection;
    private _renderNestedCardRow;
    private _renderCustomYamlCardsSection;
    private _renderCustomYamlRow;
    private _renderPreview;
    private _addEntity;
    private _removeEntity;
    private _updateEntity;
    private _updateTextStyle;
    private _addNestedCard;
    private _removeNestedCard;
    private _updateNestedCard;
    private _openImagePathDialog;
    private _addCustomYamlCard;
    private _removeCustomYamlCard;
    private _updateCustomYamlCard;
    /**
     * Converts a card config object (minus `type`) to a simple YAML-like string.
     * Only handles flat key:value and simple nested objects.
     */
    private _cardConfigToYaml;
    /**
     * Parses a simple YAML-like string back into a card config object.
     * Handles flat key: value pairs. For complex configs, falls back to JSON.
     */
    private _yamlToCardConfig;
    private _parseYamlValue;
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
