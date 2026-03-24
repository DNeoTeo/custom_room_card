/**
 * Font and media browser helpers for custom-room-card editor.
 */

import { HomeAssistant } from "./types";

// ── Available Fonts ──────────────────────────────────────────────────────────

export const AVAILABLE_FONTS = [
  // System fonts (widely supported)
  { label: "System Default", value: "system-ui" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Helvetica", value: "Helvetica, Arena, sans-serif" },
  { label: "Times New Roman", value: '"Times New Roman", serif' },
  { label: "Courier New", value: '"Courier New", monospace' },
  { label: "Comic Sans MS", value: '"Comic Sans MS", cursive' },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Palatino", value: '"Palatino Linotype", serif' },
  { label: "Garamond", value: "Garamond, serif" },
  { label: "Trebuchet MS", value: '"Trebuchet MS", sans-serif' },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
  
  // Web Safe fonts
  { label: "Lucida Console", value: '"Lucida Console", monospace' },
  { label: "Lucida Handwriting", value: '"Lucida Handwriting", cursive' },
  
  // Generic families
  { label: "Serif", value: "serif" },
  { label: "Sans-Serif", value: "sans-serif" },
  { label: "Monospace", value: "monospace" },
  { label: "Cursive", value: "cursive" },
  { label: "Fantasy", value: "fantasy" },
];

// ── Media Browser helpers ────────────────────────────────────────────────────

/**
 * Fetches available media files from Home Assistant.
 * Requires proper CORS setup in Home Assistant configuration.
 */
export async function fetchMediaImages(hass: HomeAssistant): Promise<string[]> {
  try {
    // Get list of media files from /media directory
    const response = await fetch("/api/media/browse/local", {
      headers: {
        Authorization: `Bearer ${(hass.connection as any).accessToken || ""}`,
      },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const mediaItems = data.media || [];

    // Filter for image files
    const images = mediaItems
      .filter(
        (item: any) =>
          item.media_class === "image" ||
          (item.media_id && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(item.media_id))
      )
      .map((item: any) => item.media_id || item.title);

    return images.sort();
  } catch (e) {
    console.warn("Failed to fetch media images from Home Assistant:", e);
    return [];
  }
}

/**
 * Gets a parseable URL for a media file in Home Assistant.
 * Supports both /api/image/ and /local/ paths.
 */
export function getMediaUrl(mediaId: string): string {
  if (mediaId.startsWith("http://") || mediaId.startsWith("https://")) {
    return mediaId;
  }
  if (mediaId.startsWith("/local/")) {
    return mediaId;
  }
  // Try /api/image/ first
  return `/api/image/serve/${mediaId}`;
}

/**
 * Uploads a file to Home Assistant's /local directory.
 * Requires Home Assistant to be configured with a www directory.
 */
export async function uploadImageToHA(
  hass: HomeAssistant,
  file: File
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/local", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${(hass.connection as any).accessToken || ""}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }

    // Return the /local/ path for the uploaded file
    return `/local/${file.name}`;
  } catch (e) {
    console.error("Failed to upload image to Home Assistant:", e);
    throw e;
  }
}

/**
 * Opens Home Assistant's media browser dialog.
 * This is a workaround using the frontend's ha-media-player-entity-picker.
 * For a better UX, consider using a custom dialog.
 */
export function openMediaBrowser(
  callback: (selectedPath: string) => void
): void {
  // Create a temporary media input element
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // Return data URL or just the filename
        callback(file.name);
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}
