# Custom Room Card

[![HACS][hacs-badge]][hacs-url]
[![Release][release-badge]][release-url]
[![License][license-badge]](LICENSE)

A custom [Home Assistant](https://www.home-assistant.io/) Lovelace card that lets you create **adaptive room layouts** with freely-positioned entity buttons and nested cards.

![Preview](docs/preview.png)

---

## Features

- **Freely positioned buttons** – Place entity buttons anywhere using `left`/`top` percentages
- **Adaptive layout** – The card width is managed by Home Assistant and its canvas scales responsively
- **Entity actions** – Tap to toggle, hold for more-info (fully configurable)
- **Native icon picker** – Browse Home Assistant/MDI icons instead of entering an icon name
- **Nested cards** – Choose and configure any Lovelace card with Home Assistant's native card picker and editor
- **Global font family** – Select a supported font family for all text (title, labels, state)
- **Text styling** – Customize font sizes and colors for title, button labels, and entity state
- **Visual editor** – Full GUI editor with live position preview
- **Responsive design** – All sizes automatically scale to fit screen width
- **Theming** – Respects HA theme variables, supports custom CSS overrides
- **HACS compatible** – One-click install via HACS

---

## Installation

### HACS (Recommended)

1. Open **HACS** → **Frontend** → top-right menu → **Custom repositories**
2. Add the repository URL: `https://github.com/<your-user>/custom-room-card`
3. Category: **Lovelace**
4. Click **Install**
5. Refresh your browser (`Ctrl+Shift+R`)

### Manual

1. Download `custom_room_card.js` from the [latest release][release-url]
2. Copy to `config/www/custom-room-card/custom_room_card.js`
3. Add the resource in HA:
   - **Settings** → **Dashboards** → **Resources** → **Add Resource**
   - URL: `/local/custom-room-card/custom_room_card.js`
   - Type: **JavaScript Module**
4. Refresh your browser

---

## Configuration

### Minimal example

```yaml
type: custom:custom-room-card
title: Living Room
entities:
  - entity: light.ceiling
    left: 50
    top: 30
  - entity: switch.tv
    left: 75
    top: 60
```

### Full example

```yaml
type: custom:custom-room-card
title: Bedroom
show_title: true
entities:
  - entity: light.bedside_lamp
    left: 20
    top: 40
    icon: mdi:lamp
    label: Bedside
    show_state: true
    width: 70
    height: 70
    tap_action:
      action: toggle
    hold_action:
      action: more-info
  - entity: climate.bedroom_ac
    left: 80
    top: 25
    icon: mdi:air-conditioner
    label: AC
    show_state: true
  - entity: cover.bedroom_blinds
    left: 50
    top: 10
    label: Blinds
nested_cards:
  - card:
      type: sensor
      entity: sensor.bedroom_temperature
    left: 15
    top: 85
    width: "120px"
    height: "60px"
    label: Temp Sensor
  - card:
      type: gauge
      entity: sensor.bedroom_humidity
      name: Humidity
    left: 85
    top: 85
    width: "140px"
    height: "140px"
    z_index: 3
  - card:
      type: thermostat
      entity: climate.bedroom_ac
    left: 50
    top: 60
    width: "180px"
    height: "auto"
    hide_card_border: true
  - card:
      type: markdown
      content: "**Welcome home!**"
    left: 50
    top: 8
    width: "200px"
    border_radius: "20px"
  - card:
      type: custom:button-card
      entity: light.bedroom
      name: Main Light
    left: 30
    top: 50
    width: "100px"
    height: "100px"
```

### Card options

| Option               | Type     | Default    | Description                                         |
| -------------------- | -------- | ---------- | --------------------------------------------------- |
| `type`               | string   | *required* | Must be `custom:custom-room-card`                   |
| `title`              | string   | —          | Room title shown in the top-left overlay            |
| `show_title`         | boolean  | `true`     | Show / hide the title overlay                       |
| `global_font_family` | string   | `system-ui`| Font family for all text (title, labels, state)     |
| `title_style`        | object   | —          | Title styling (font_size, text_color)               |
| `button_label_style` | object   | —          | Button label styling (font_size, text_color)        |
| `button_state_style` | object   | —          | Entity state text styling (font_size, text_color)   |
| `entities`           | list     | `[]`       | Array of entity button configurations               |
| `nested_cards`       | list     | `[]`       | Array of nested Lovelace card configurations        |
| `card_styles`        | object   | —          | Custom CSS key/value pairs for the `<ha-card>`      |

### Entity button options

| Option                    | Type    | Default        | Description                                    |
| ------------------------- | ------- | -------------- | ---------------------------------------------- |
| `entity`                  | string  | *required*     | Entity ID (e.g. `light.living_room`)           |
| `left`                    | number  | `50`           | Horizontal position in % (0–100)               |
| `top`                     | number  | `50`           | Vertical position in % (0–100)                 |
| `width`                   | number  | `60`           | Button width in px                             |
| `height`                  | number  | `60`           | Button height in px                            |
| `icon`                    | string  | *auto*         | MDI icon (e.g. `mdi:lightbulb`)                |
| `label`                   | string  | *friendly_name*| Custom label text                              |
| `show_label`              | boolean | `true`         | Show label below icon                          |
| `show_state`              | boolean | `false`        | Show entity state text                         |
| `font_size`               | number  | `10`           | Font size in px for label and state            |
| `tap_action`              | object  | `toggle`       | Action on tap (see Actions)                    |
| `hold_action`             | object  | `more-info`    | Action on long-press (see Actions)             |
| `styles`                  | object  | —              | Custom CSS key/value pairs for this button     |

### Actions

```yaml
tap_action:
  action: toggle          # toggle | more-info | call-service | navigate | url | none
  service: light.turn_on  # for call-service
  service_data:           # for call-service
    brightness: 255
  navigation_path: /lovelace/room   # for navigate
  url_path: https://example.com     # for url
```

### Nested card options

You can embed **any Lovelace card** (built-in or custom) and position it freely.

| Option                    | Type    | Default    | Description                                              |
| ------------------------- | ------- | ---------- | -------------------------------------------------------- |
| `card`                    | object  | *required* | Standard Lovelace card configuration (with `type`)       |
| `left`                    | number  | `50`       | Horizontal position in % (0–100)                         |
| `top`                     | number  | `50`       | Vertical position in % (0–100)                           |
| `width`                   | string  | `200px`    | Width – CSS value: `120px`, `30%`, `auto`                |
| `height`                  | string  | `auto`     | Height – CSS value: `60px`, `20%`, `auto`                |
| `label`                   | string  | —          | Label shown in the editor preview only                   |
| `z_index`                 | number  | `2`        | Layer order (higher = on top)                            |
| `border_radius`           | string  | —          | CSS border-radius (e.g. `16px`)                          |
| `styles`                  | object  | —          | Custom CSS key/value pairs for the wrapper               |

#### Nested card examples

**Simple sensor card:**
```yaml
nested_cards:
  - card:
      type: sensor
      entity: sensor.temperature
    left: 20
    top: 80
    width: "130px"
```

**Thermostat with no border:**
```yaml
nested_cards:
  - card:
      type: thermostat
      entity: climate.living_room
    left: 50
    top: 50
    width: "200px"
    height: "200px"
    hide_card_border: true
```

**Custom button-card:**
```yaml
nested_cards:
  - card:
      type: custom:button-card
      entity: light.kitchen
      name: Kitchen
      show_state: true
    left: 70
    top: 30
    width: "120px"
    height: "80px"
    border_radius: "16px"
```

**Markdown overlay:**
```yaml
nested_cards:
  - card:
      type: markdown
      content: "### Room Status\n**All systems normal**"
    left: 50
    top: 10
    width: "250px"
    z_index: 5
    hide_card_border: true
```

**Multiple cards overlayed:**
```yaml
nested_cards:
  - card:
      type: gauge
      entity: sensor.humidity
    left: 15
    top: 80
    width: "120px"
    height: "120px"
  - card:
      type: gauge
      entity: sensor.temperature
    left: 85
    top: 80
    width: "120px"
    height: "120px"
  - card:
      type: weather-forecast
      entity: weather.home
    left: 50
    top: 50
    width: "300px"
    z_index: 3
```

## Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
git clone https://github.com/<your-user>/custom-room-card.git
cd custom-room-card
npm install
```

### Build

```bash
npm run build          # Production build → dist/custom-room-card.js
npm run watch          # Dev build with hot reload
```

### Project structure

```
custom-room-card/
├── src/
│   ├── custom_room_card.ts    # Entry point
│   ├── card.ts                # Main card LitElement
│   ├── editor.ts              # Visual editor LitElement
│   ├── helpers.ts             # Utility functions
│   ├── styles.ts              # CSS-in-JS (Lit css)
│   └── types.ts               # TypeScript types & constants
├── dist/                      # Build output
├── hacs.json                  # HACS metadata
├── package.json
├── rollup.config.mjs          # Rollup bundler config
├── tsconfig.json
├── LICENSE
└── README.md
```

### Publishing to HACS

1. Push your code to a **public** GitHub repository
2. Create a GitHub **release** with a tag (e.g. `v1.0.0`)
3. Attach `dist/custom_room_card.js` to the release as an asset
4. Ensure [hacs.json](hacs.json) is at the repo root
5. Submit to the [HACS default repository](https://hacs.xyz/docs/publish/start) or use as a custom repo

#### HACS requirements checklist

- [x] `hacs.json` with `name` and `filename`
- [x] `README.md` at repo root
- [x] GitHub release with JS file
- [x] Repository is public
- [x] Repository description is set
- [x] Topics include `hacs`, `home-assistant`, `lovelace`

---

## Troubleshooting

| Problem                        | Solution                                                   |
| ------------------------------ | ---------------------------------------------------------- |
| Card not showing               | Clear browser cache, check Resources config                |
| Background image not loading   | Verify the file is in `config/www/` and path starts with `/local/` |
| Entity button not responding   | Check entity ID is correct, entity is not `unavailable`    |
| Editor not appearing           | Make sure JS module is loaded (not JS), refresh browser    |

---

## License

[MIT](LICENSE)

---

[hacs-badge]: https://img.shields.io/badge/HACS-Custom-orange.svg
[hacs-url]: https://hacs.xyz
[release-badge]: https://img.shields.io/github/v/release/your-user/custom-room-card
[release-url]: https://github.com/your-user/custom-room-card/releases
[license-badge]: https://img.shields.io/github/license/your-user/custom-room-card
