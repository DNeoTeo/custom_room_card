import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Types Home Assistant
interface HomeAssistant {
  callService: (domain: string, service: string, data?: any) => Promise<any>;
  states?: Record<string, any>;
}

interface ButtonEntity {
  entity: string;
  label?: string;
  icon?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  size?: string;
  tap_action?: {
    action: string;
    entity?: string;
    target?: any;
  };
}

interface CustomRoomCardConfig {
  type: string;
  title?: string;
  background_image?: string;
  background_size?: string;
  background_position?: string;
  background_color?: string;
  background_opacity?: number;
  height?: string;
  border_radius?: string;
  entities: ButtonEntity[];
  show_grid?: boolean;
  grid_size?: number;
}

declare global {
  interface HASSDomEvents {
    'hass-action': any;
  }
}

@customElement('custom-room-card')
export class CustomRoomCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CustomRoomCardConfig;
  @property({ type: Boolean, reflect: true }) isEditor = false;

  setConfig(config: CustomRoomCardConfig) {
    this.config = {
      background_size: 'cover',
      background_position: 'center',
      background_opacity: 1,
      height: '400px',
      border_radius: '12px',
      show_grid: false,
      grid_size: 50,
      ...config,
    };

    if (!this.config.entities) {
      throw new Error('entities are required');
    }
  }

  static getStubConfig(): Record<string, any> {
    return {
      type: 'custom:custom-room-card',
      title: 'Ma Pièce',
      background_image: '',
      height: '400px',
      entities: [
        {
          entity: 'light.livingroom',
          label: 'Lumière',
          top: '10%',
          left: '10%',
        },
      ],
    };
  }

  getEntityState(entity: string) {
    const stateObj = this.hass?.states?.[entity];
    return stateObj?.state || 'unknown';
  }

  getEntityName(entity: string) {
    const stateObj = this.hass?.states?.[entity];
    return stateObj?.attributes?.friendly_name || entity;
  }

  handleTapAction(entity: string, tapAction?: any) {
    const action = tapAction?.action || 'toggle';
    const domain = entity.split('.')[0];

    switch (action) {
      case 'toggle':
        this.hass.callService(domain, 'toggle', { entity_id: entity });
        break;
      case 'turn_on':
        this.hass.callService(domain, 'turn_on', { entity_id: entity });
        break;
      case 'turn_off':
        this.hass.callService(domain, 'turn_off', { entity_id: entity });
        break;
      case 'call_service':
        if (tapAction.service) {
          const [service_domain, service] = tapAction.service.split('.');
          this.hass.callService(service_domain, service, tapAction.data || {});
        }
        break;
    }
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html`<div class="error">Configuration ou Home Assistant non disponible</div>`;
    }

    const backgroundStyle = this.config.background_image
      ? `background-image: url('${this.config.background_image}'); background-size: ${this.config.background_size}; background-position: ${this.config.background_position};`
      : `background-color: ${this.config.background_color || '#f5f5f5'};`;

    return html`
      <ha-card>
        ${this.config.title ? html`<h1 class="title">${this.config.title}</h1>` : ''}
        
        <div 
          class="room-container ${this.config.show_grid ? 'show-grid' : ''}"
          style="
            ${backgroundStyle}
            height: ${this.config.height};
            border-radius: ${this.config.border_radius};
            opacity: ${this.config.background_opacity};
            position: relative;
            overflow: hidden;
          "
        >
          ${this.config.show_grid ? this.renderGrid() : ''}
          
          ${this.config.entities.map(
            (btn) => html`
              <div
                class="button-wrapper"
                style="
                  position: absolute;
                  ${btn.top !== undefined ? `top: ${btn.top}${typeof btn.top === 'number' ? 'px' : ''};` : ''}
                  ${btn.left !== undefined ? `left: ${btn.left}${typeof btn.left === 'number' ? 'px' : ''};` : ''}
                  ${btn.right !== undefined ? `right: ${btn.right}${typeof btn.right === 'number' ? 'px' : ''};` : ''}
                  ${btn.bottom !== undefined ? `bottom: ${btn.bottom}${typeof btn.bottom === 'number' ? 'px' : ''};` : ''}
                  transform: translate(-50%, -50%);
                "
              >
                <button
                  class="entity-button ${this.getEntityState(btn.entity) === 'on' ? 'active' : ''}"
                  style="width: ${btn.size || '60px'}; height: ${btn.size || '60px'};"
                  @click="${() => this.handleTapAction(btn.entity, btn.tap_action)}"
                  title="${btn.label || this.getEntityName(btn.entity)}"
                >
                  ${btn.icon
                    ? html`<ha-icon icon="${btn.icon}"></ha-icon>`
                    : html`<span>${this.getEntityState(btn.entity) === 'on' ? 'ON' : 'OFF'}</span>`}
                </button>
                ${btn.label ? html`<div class="label">${btn.label}</div>` : ''}
              </div>
            `
          )}
        </div>
      </ha-card>
    `;
  }

  private renderGrid() {
    const gridSize = this.config.grid_size || 50;
    const lines: any[] = [];

    // Horizontal lines
    for (let i = gridSize; i < 100; i += gridSize) {
      lines.push(
        html`<div
          class="grid-line horizontal"
          style="top: ${i}%; left: 0; right: 0; height: 1px;"
        ></div>`
      );
    }

    // Vertical lines
    for (let i = gridSize; i < 100; i += gridSize) {
      lines.push(
        html`<div
          class="grid-line vertical"
          style="left: ${i}%; top: 0; bottom: 0; width: 1px;"
        ></div>`
      );
    }

    return lines;
  }

  static get styles() {
    return css`
      :host {
        --primary-color: #3498db;
        --on-color: #27ae60;
        --off-color: #e74c3c;
        --background-color: #ecf0f1;
      }

      ha-card {
        padding: 0;
      }

      .title {
        margin: 0;
        padding: 16px;
        font-size: 20px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .room-container {
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: opacity 0.3s ease;
      }

      .room-container.show-grid {
        background-image: none !important;
        background-color: rgba(255, 255, 255, 0.1);
      }

      .grid-line {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
      }

      .button-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      .entity-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--divider-color);
        border-radius: 50%;
        background-color: var(--background-color);
        color: var(--primary-text-color);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 24px;
      }

      .entity-button:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .entity-button.active {
        background-color: var(--on-color);
        color: white;
        border-color: var(--on-color);
      }

      .entity-button ha-icon {
        --mdc-icon-size: 32px;
      }

      .label {
        font-size: 12px;
        color: var(--primary-text-color);
        background-color: rgba(255, 255, 255, 0.9);
        padding: 2px 6px;
        border-radius: 4px;
        white-space: nowrap;
        margin-top: 4px;
      }

      .error {
        padding: 16px;
        color: var(--error-color);
        font-weight: bold;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-room-card': CustomRoomCard;
  }
}
