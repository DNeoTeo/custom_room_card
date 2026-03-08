/**
 * custom-room-card-editor – Visual configuration editor.
 *
 * Provides a graphical UI inside the Home Assistant card editor to configure
 * background, entity buttons with drag-preview, and basic card options.
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
    private _renderBackgroundSection;
    private _renderEntitiesSection;
    private _renderEntityRow;
    /** Known built-in HA card types for the dropdown */
    private _renderNestedCardsSection;
    private _renderNestedCardRow;
    private _renderPreview;
    private _addEntity;
    private _removeEntity;
    private _updateEntity;
    private _addNestedCard;
    private _removeNestedCard;
    private _updateNestedCard;
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
