import { HassEntity } from "home-assistant-js-websocket";
export interface HomeAssistant {
    states: Record<string, HassEntity>;
    callService(domain: string, service: string, serviceData?: Record<string, unknown>, target?: {
        entity_id: string | string[];
    }): Promise<void>;
    formatEntityState(stateObj: HassEntity): string;
    formatEntityAttributeValue(stateObj: HassEntity, attribute: string): string;
    localize(key: string, ...args: unknown[]): string;
    themes: {
        darkMode: boolean;
        theme: string;
    };
    locale: {
        language: string;
    };
    user: {
        name: string;
        is_admin: boolean;
    };
    connection: unknown;
    config: {
        unit_system: Record<string, string>;
    };
}
export interface LovelaceCard extends HTMLElement {
    hass?: HomeAssistant;
    setConfig(config: LovelaceCardConfig): void;
    getCardSize?(): number | Promise<number>;
}
export interface LovelaceCardConfig {
    type: string;
    [key: string]: unknown;
}
export interface LovelaceCardEditor extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: unknown;
    setConfig(config: LovelaceCardConfig): void;
}
export interface EntityButtonConfig {
    /** Entity ID (e.g. light.living_room) */
    entity: string;
    /** Horizontal position in % (0-100) */
    left: number;
    /** Vertical position in % (0-100) */
    top: number;
    /** Button width in px (default: 60) */
    width?: number;
    /** Button height in px (default: 60) */
    height?: number;
    /** Custom icon (mdi:xxx) – defaults to entity domain icon */
    icon?: string;
    /** Custom label */
    label?: string;
    /** Show label below icon */
    show_label?: boolean;
    /** Show entity state */
    show_state?: boolean;
    /** Custom tap action */
    tap_action?: ActionConfig;
    /** Custom hold action */
    hold_action?: ActionConfig;
    /** Custom CSS styles for this button */
    styles?: Record<string, string>;
}
export interface ActionConfig {
    action: "toggle" | "more-info" | "call-service" | "navigate" | "url" | "none";
    service?: string;
    service_data?: Record<string, unknown>;
    navigation_path?: string;
    url_path?: string;
}
export interface NestedCardConfig {
    /** Standard Lovelace card config */
    card: LovelaceCardConfig;
    /** Horizontal position in % (0-100) */
    left: number;
    /** Vertical position in % (0-100) */
    top: number;
    /** Width – CSS value: px, %, or 'auto' (default: '200px') */
    width?: string;
    /** Height – CSS value: px, %, or 'auto' (default: 'auto') */
    height?: string;
    /** Optional label shown in editor preview */
    label?: string;
    /** z-index layer order (default: 2) */
    z_index?: number;
    /** CSS border-radius override */
    border_radius?: string;
    /** Hide the card's own ha-card shadow/border */
    hide_card_border?: boolean;
    /** Custom CSS styles applied to the wrapper */
    styles?: Record<string, string>;
}
export declare const DEFAULT_NESTED_CARD: Partial<NestedCardConfig>;
export interface CustomRoomCardConfig extends LovelaceCardConfig {
    type: string;
    /** Card title */
    title?: string;
    /** Background image URL or /local/ path */
    background_image?: string;
    /** Background color (CSS) */
    background_color?: string;
    /** Background size (CSS background-size) */
    background_size?: string;
    /** Background position (CSS background-position) */
    background_position?: string;
    /** Background opacity (0-1) */
    background_opacity?: number;
    /** Card aspect ratio (e.g. "16/9", "4/3", "1/1") */
    aspect_ratio?: string;
    /** Card height in px (overrides aspect_ratio if set) */
    card_height?: number;
    /** Entity buttons */
    entities?: EntityButtonConfig[];
    /** Nested Lovelace cards */
    nested_cards?: NestedCardConfig[];
    /** Show room title overlay */
    show_title?: boolean;
    /** Custom CSS for the whole card */
    card_styles?: Record<string, string>;
}
export declare const CARD_NAME = "custom-room-card";
export declare const CARD_DESCRIPTION = "Adaptive room layout card with positioned entity buttons and custom backgrounds.";
export declare const CARD_VERSION = "1.0.0";
export declare const DOMAIN_ICONS: Record<string, string>;
export declare const DEFAULT_ENTITY_BUTTON: Partial<EntityButtonConfig>;
