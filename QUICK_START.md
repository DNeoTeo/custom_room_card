# Quick Start

## Visual editor

1. Add **Custom Room Card** to a dashboard and open its visual editor.
2. Select a global font in **General**.
3. Add entity buttons, then use Home Assistant's native icon picker to choose an icon.
4. Use the color selectors and font-size fields in **Text Styling**.
5. Add nested cards with **Nested Cards**. The native Home Assistant picker lets you select entity, gauge, tile, graph, or custom cards; their normal editor is then shown directly in the card editor.

Home Assistant controls the card dimensions. The room canvas adapts automatically so positions remain responsive.

## YAML example

```yaml
type: custom:custom-room-card
title: My Room
global_font_family: Arial, sans-serif
title_style:
  font_size: 28
  text_color: "#ffffff"
entities:
  - entity: light.main
    left: 20
    top: 50
    icon: mdi:lightbulb
    label: Main Light
    font_size: 12
nested_cards:
  - card:
      type: gauge
      entity: sensor.temperature
    left: 75
    top: 50
    width: 150px
```
