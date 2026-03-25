/**
 * custom-room-card – Main Lovelace card element.
 *
 * An adaptive room layout card with:
 * - Freely-positioned entity buttons with custom backgrounds and overlay modes
 * - Customizable card background (color, image, opacity)
 * - Nested Lovelace cards with full background styling
 * - Custom YAML cards for advanced configurations
 * - Global font family and text styling (title, labels, state)
 * - Responsive design with automatic scaling
 * - Drag-and-drop positioning preview in editor
 */
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { CustomRoomCardConfig, HomeAssistant, LovelaceCard, CARD_NAME } from "./types";
export declare class CustomRoomCard extends LitElement implements LovelaceCard {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    private _config;
    private _nestedCards;
    /** Responsive scale factor: actualWidth / designWidth */
    private _cardScale;
    private _resizeObserver?;
    private _observedContainer?;
    private _holdTimer;
    private _holdTriggered;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: CustomRoomCardConfig): void;
    getCardSize(): number;
    /** Expose the editor element. */
    static getConfigElement(): HTMLElement;
    /** Provide a stub configuration for the editor. */
    static getStubConfig(): Record<string, unknown>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _renderEntityButton;
    private _renderNestedCard;
    private _renderCustomYamlCard;
    private _createNestedCards;
    private _createCustomYamlCards;
    private _parseYamlToConfig;
    private _parseYamlValue;
    private _createCardElement;
    private _onPointerDown;
    private _onPointerUp;
    private _cancelHold;
    private _addRipple;
    /**
     * Sets up the ResizeObserver that tracks the card container width
     * and recomputes the scale factor whenever the card is resized.
     */
    private _setupResizeObserver;
    /**
     * Scales a CSS size value (px) proportionally to the card scale.
     * Percentage and 'auto' values are returned unchanged.
     */
    private _scaleCssSize;
    private _aspectRatioPadding;
}
declare global {
    interface HTMLElementTagNameMap {
        [CARD_NAME]: CustomRoomCard;
    }
}
