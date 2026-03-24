/**
 * Font and media browser helpers for custom-room-card editor.
 */
import { HomeAssistant } from "./types";
export declare const AVAILABLE_FONTS: {
    label: string;
    value: string;
}[];
/**
 * Fetches available media files from Home Assistant.
 * Requires proper CORS setup in Home Assistant configuration.
 */
export declare function fetchMediaImages(hass: HomeAssistant): Promise<string[]>;
/**
 * Gets a parseable URL for a media file in Home Assistant.
 * Supports both /api/image/ and /local/ paths.
 */
export declare function getMediaUrl(mediaId: string): string;
/**
 * Uploads a file to Home Assistant's /local directory.
 * Requires Home Assistant to be configured with a www directory.
 */
export declare function uploadImageToHA(hass: HomeAssistant, file: File): Promise<string>;
/**
 * Opens Home Assistant's media browser dialog.
 * This is a workaround using the frontend's ha-media-player-entity-picker.
 * For a better UX, consider using a custom dialog.
 */
export declare function openMediaBrowser(callback: (selectedPath: string) => void): void;
