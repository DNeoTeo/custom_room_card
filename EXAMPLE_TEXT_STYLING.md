# Text styling example

```yaml
type: custom:custom-room-card
title: Living room
global_font_family: Georgia, serif
title_style:
  font_size: 28
  text_color: "#ffffff"
button_label_style:
  font_size: 13
  text_color: "#212121"
button_state_style:
  font_size: 11
  text_color: "#666666"
entities:
  - entity: light.living_room
    left: 30
    top: 50
    icon: mdi:lightbulb
    font_size: 14
    show_state: true
```

The `font_size` on an entity button overrides both its label and state size. The visual editor exposes the same settings, plus a native Home Assistant icon picker and color controls.
