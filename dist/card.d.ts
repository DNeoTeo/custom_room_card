/**
 * custom-room-card – Main Lovelace card element.
 *
 * An adaptive room layout card with freely-positioned entity buttons,
 * customizable background, and support for nested cards.
 */
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { CustomRoomCardConfig, HomeAssistant, LovelaceCard, CARD_NAME } from "./types";
export declare class CustomRoomCard extends LitElement implements LovelaceCard {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    private _config;
    private _nestedCards;
    private _holdTimer;
    private _holdTriggered;
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
    private _createNestedCards;
    private _createCardElement;
    private _onPointerDown;
    private _onPointerUp;
    private _cancelHold;
    private _addRipple;
    private _aspectRatioPadding;
}
declare global {
    interface HTMLElementTagNameMap {
        [CARD_NAME]: CustomRoomCard;
    }
}
