import { css } from "lit";

// ── Main card styles ─────────────────────────────────────────────────────────

export const cardStyles = css`
  :host {
    --room-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --room-card-radius: var(--ha-card-border-radius, 12px);
    --room-card-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
    --btn-size: 60px;
    --btn-bg: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08);
    --btn-bg-active: rgba(var(--rgb-primary-color, 33, 150, 243), 0.2);
    --btn-icon-color: var(--primary-text-color, #212121);
    --btn-icon-active: var(--primary-color, #2196f3);
    --btn-label-color: var(--secondary-text-color, #727272);
    --btn-label-size: 10px;
    /* Title styling */
    --title-font-family: inherit;
    --title-font-size: 1.2em;
    --title-text-color: var(--primary-text-color);
    /* Button label styling */
    --btn-label-font-family: inherit;
    --btn-label-font-size: 10px;
    --btn-label-text-color: var(--secondary-text-color, #727272);
    /* Button state styling */
    --btn-state-font-family: inherit;
    --btn-state-font-size: 9px;
    --btn-state-text-color: var(--secondary-text-color, #727272);
    display: block;
  }

  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--room-card-radius);
    box-shadow: var(--room-card-shadow);
    background: var(--room-card-bg);
  }

  /* ── Room container ──────────────────────────────────── */
  .room-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .room-container.aspect-ratio {
    height: 0;
  }

  .room-container.fixed-height {
    height: var(--card-height, 300px);
  }

  /* ── Background ──────────────────────────────────────── */
  .room-bg {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  /* ── Content layer ───────────────────────────────────── */
  .room-content {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  /* ── Title overlay ───────────────────────────────────── */
  .room-title {
    position: absolute;
    top: 12px;
    left: 16px;
    z-index: 2;
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-weight: 600;
    color: var(--title-text-color);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  /* ── Entity button ───────────────────────────────────── */
  .entity-btn {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: calc(12px * var(--card-scale, 1));
    background: var(--btn-bg);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: calc(6px * var(--card-scale, 1));
    transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease;
    z-index: 3;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    outline: none;
  }

  .entity-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  }

  .entity-btn:active {
    transform: scale(0.95);
  }

  .entity-btn.active {
    background: var(--btn-bg-active);
  }

  .entity-btn.active ha-icon {
    color: var(--btn-icon-active);
  }

  .entity-btn.unavailable {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .entity-btn ha-icon {
    --mdc-icon-size: calc(24px * var(--card-scale, 1));
    color: var(--btn-icon-color);
    transition: color 0.2s ease;
  }

  .entity-btn .btn-label {
    margin-top: 2px;
    font-family: var(--btn-label-font-family);
    font-size: calc(var(--btn-label-font-size) * var(--card-scale, 1));
    color: var(--btn-label-text-color);
    text-align: center;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-btn .btn-state {
    font-family: var(--btn-state-font-family);
    font-size: calc(var(--btn-state-font-size) * var(--card-scale, 1));
    color: var(--btn-state-text-color);
    opacity: 0.8;
    text-align: center;
    line-height: 1.1;
  }

  /* ── Nested card ─────────────────────────────────────── */
  .nested-card-wrapper {
    position: absolute;
    z-index: 2;
    overflow: hidden;
    border-radius: var(--ha-card-border-radius, 12px);
  }

  .nested-card-wrapper > * {
    width: 100%;
    height: 100%;
  }

  .nested-card-wrapper.no-border > ha-card,
  .nested-card-wrapper.no-border > * {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
  }

  /* ── Ripple effect ───────────────────────────────────── */
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  .entity-btn .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.3);
    transform: scale(0);
    animation: ripple 0.5s ease-out;
    pointer-events: none;
  }

  /* ── Responsive ──────────────────────────────────────── */
  @media (max-width: 600px) {
    .entity-btn {
      border-radius: calc(10px * var(--card-scale, 1));
    }
    .room-title {
      top: 8px;
      left: 10px;
    }
  }
`;

// ── Editor styles ────────────────────────────────────────────────────────────

export const editorStyles = css`
  :host {
    display: block;
  }

  .editor-container {
    padding: 16px;
  }

  .editor-section {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    padding-bottom: 16px;
  }

  .editor-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .section-title {
    font-size: 1em;
    font-weight: 600;
    color: var(--primary-text-color);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .section-title ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
  }

  .form-row > * {
    flex: 1;
    min-width: 140px;
  }

  ha-textfield,
  ha-select {
    width: 100%;
  }

  .entity-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .entity-row {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 10px 12px;
    padding-right: 44px;
  }

  .entity-row > ha-entity-picker {
    width: 100%;
  }

  .entity-row > .remove-btn {
    position: absolute;
    top: 8px;
    right: 6px;
  }

  .entity-position {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .entity-position ha-textfield {
    width: 70px;
  }

  .add-btn,
  .remove-btn {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .add-btn {
    background: var(--primary-color);
    color: white;
    margin-top: 8px;
  }

  .add-btn:hover {
    opacity: 0.85;
  }

  .remove-btn {
    background: transparent;
    color: var(--error-color, #db4437);
  }

  .remove-btn:hover {
    background: rgba(var(--rgb-error-color, 219, 68, 55), 0.1);
  }

  .entity-extra-row {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 6px;
  }

  .entity-extra-row ha-textfield {
    flex: 1;
    min-width: 0;
  }

  .preview-box {
    position: relative;
    width: 100%;
    height: 200px;
    border: 2px dashed var(--divider-color, #ccc);
    border-radius: 8px;
    overflow: hidden;
    background: var(--secondary-background-color, #f5f5f5);
    margin-top: 8px;
  }

  .preview-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: grab;
  }

  .preview-dot.entity-dot {
    background: var(--primary-color, #2196f3);
  }

  .preview-dot.card-dot {
    background: var(--warning-color, #ff9800);
    border-radius: 3px;
    width: 20px;
    height: 14px;
  }

  .preview-dot .dot-label {
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 9px;
    white-space: nowrap;
    color: var(--primary-text-color);
    background: rgba(255, 255, 255, 0.85);
    padding: 1px 4px;
    border-radius: 3px;
  }

  /* ── Nested card editor rows ───────────────────────── */
  .nested-cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nested-card-row {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 12px;
    border-left: 3px solid var(--warning-color, #ff9800);
  }

  .nested-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .nested-card-header ha-icon {
    --mdc-icon-size: 18px;
    color: var(--warning-color, #ff9800);
  }

  .nested-card-title {
    flex: 1;
    font-weight: 500;
    font-size: 0.95em;
    color: var(--primary-text-color);
  }

  .type-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  .type-chip {
    cursor: pointer;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 16px;
    padding: 3px 10px;
    font-size: 11px;
    background: var(--card-background-color, white);
    color: var(--primary-text-color);
    transition: all 0.15s;
  }

  .type-chip:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .type-chip.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  .yaml-editor {
    width: 100%;
    min-height: 80px;
    font-family: 'Roboto Mono', 'Consolas', monospace;
    font-size: 12px;
    padding: 8px;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 6px;
    background: var(--card-background-color, white);
    color: var(--primary-text-color);
    resize: vertical;
    box-sizing: border-box;
    line-height: 1.5;
  }

  .yaml-editor:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .advanced-options {
    margin-top: 8px;
  }

  .advanced-options summary {
    cursor: pointer;
    font-size: 12px;
    color: var(--secondary-text-color);
    user-select: none;
    margin-bottom: 8px;
  }

  .advanced-options summary:hover {
    color: var(--primary-text-color);
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .checkbox-row input[type="checkbox"] {
    accent-color: var(--primary-color);
  }

  /* ── Responsive info box ──────────────────────────────── */
  .responsive-info {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
    border: 1px solid rgba(var(--rgb-primary-color, 33, 150, 243), 0.25);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 12px;
    color: var(--secondary-text-color);
    line-height: 1.5;
    margin-top: 4px;
  }

  .responsive-info ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .responsive-info strong {
    color: var(--primary-text-color);
  }
`;
