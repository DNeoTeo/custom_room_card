/**
 * Utility helpers for custom-room-card.
 */
import { ActionConfig, EntityButtonConfig, HomeAssistant } from "./types";
import { HassEntity } from "home-assistant-js-websocket";
/** Extracts the domain from an entity_id. */
export declare function domainOf(entityId: string): string;
/** Returns the default icon for a given domain. */
export declare function domainIcon(entityId: string): string;
/** Returns the icon for a given entity (prefers entity attribute, falls back to domain). */
export declare function entityIcon(entityId: string, stateObj?: HassEntity): string;
/** Checks whether the entity state counts as "active". */
export declare function isEntityActive(stateObj?: HassEntity): boolean;
/** Returns a human-friendly name for the entity. */
export declare function entityName(btnCfg: EntityButtonConfig, stateObj?: HassEntity): string;
/** Merges user button config with defaults. */
export declare function mergeButtonDefaults(cfg: EntityButtonConfig): EntityButtonConfig;
export declare function handleAction(hass: HomeAssistant, entityId: string, actionCfg?: ActionConfig): void;
/** Fires a more-info event for an entity. */
export declare function fireMoreInfo(entityId: string): void;
/** Debounce helper. */
export declare function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void;
/** Deep clone a plain object (JSON-safe). */
export declare function deepClone<T>(obj: T): T;
