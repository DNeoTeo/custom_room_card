# Implementation notes

- The visual editor uses Home Assistant's `ha-icon-picker` for entity icons.
- Nested cards use `hui-card-picker` for selection and `hui-card-element-editor` for configuration. This provides the same editor used by Home Assistant for entity, gauge, tile, graph, and custom cards.
- The room card does not expose global width or height settings. Home Assistant provides the available space; the card uses a responsive room canvas for positioning.
- An entity button's `font_size` sets the CSS variables used by both `.btn-label` and `.btn-state`, so changes apply immediately.
- Card, nested-card, and button background customisation has been removed.
