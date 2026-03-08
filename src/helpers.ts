/**
 * Utility helpers for custom-room-card.
 */

import {
  ActionConfig,
  DOMAIN_ICONS,
  EntityButtonConfig,
  DEFAULT_ENTITY_BUTTON,
  HomeAssistant,
} from "./types";
import { HassEntity } from "home-assistant-js-websocket";

// ── Entity helpers ───────────────────────────────────────────────────────────

/** Extracts the domain from an entity_id. */
export function domainOf(entityId: string): string {
  return entityId.split(".")[0];
}

/** Returns the default icon for a given domain. */
export function domainIcon(entityId: string): string {
  const domain = domainOf(entityId);
  return DOMAIN_ICONS[domain] ?? "mdi:help-circle";
}

/** Returns the icon for a given entity (prefers entity attribute, falls back to domain). */
export function entityIcon(
  entityId: string,
  stateObj?: HassEntity
): string {
  if (stateObj?.attributes?.icon) {
    return stateObj.attributes.icon as string;
  }
  return domainIcon(entityId);
}

/** Checks whether the entity state counts as "active". */
export function isEntityActive(stateObj?: HassEntity): boolean {
  if (!stateObj) return false;
  const state = stateObj.state;
  return (
    state !== "off" &&
    state !== "unavailable" &&
    state !== "unknown" &&
    state !== "idle" &&
    state !== "closed" &&
    state !== "locked" &&
    state !== "disarmed"
  );
}

/** Returns a human-friendly name for the entity. */
export function entityName(
  btnCfg: EntityButtonConfig,
  stateObj?: HassEntity
): string {
  if (btnCfg.label) return btnCfg.label;
  if (stateObj?.attributes?.friendly_name) {
    return stateObj.attributes.friendly_name as string;
  }
  return btnCfg.entity;
}

/** Merges user button config with defaults. */
export function mergeButtonDefaults(
  cfg: EntityButtonConfig
): EntityButtonConfig {
  return { ...DEFAULT_ENTITY_BUTTON, ...cfg } as EntityButtonConfig;
}

// ── Action handling ──────────────────────────────────────────────────────────

export function handleAction(
  hass: HomeAssistant,
  entityId: string,
  actionCfg?: ActionConfig
): void {
  if (!actionCfg) return;

  switch (actionCfg.action) {
    case "toggle":
      hass.callService("homeassistant", "toggle", {}, { entity_id: entityId });
      break;
    case "more-info":
      fireMoreInfo(entityId);
      break;
    case "call-service":
      if (actionCfg.service) {
        const [domain, service] = actionCfg.service.split(".");
        hass.callService(domain, service, actionCfg.service_data ?? {}, {
          entity_id: entityId,
        });
      }
      break;
    case "navigate":
      if (actionCfg.navigation_path) {
        window.history.pushState(null, "", actionCfg.navigation_path);
        window.dispatchEvent(new Event("location-changed"));
      }
      break;
    case "url":
      if (actionCfg.url_path) {
        window.open(actionCfg.url_path, "_blank");
      }
      break;
    case "none":
    default:
      break;
  }
}

/** Fires a more-info event for an entity. */
export function fireMoreInfo(entityId: string): void {
  const event = new CustomEvent("hass-more-info", {
    bubbles: true,
    composed: true,
    detail: { entityId },
  });
  document.querySelector("home-assistant")?.dispatchEvent(event);
}

// ── Misc ─────────────────────────────────────────────────────────────────────

/** Debounce helper. */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Deep clone a plain object (JSON-safe). */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
