# Example: Text Styling & Button Backgrounds

This document shows how to use the new text styling and button background features added to Custom Room Card.

## Features Added

### 1. **Global Text Styling**

You can now customize:
- **Title styling**: Font family, size, and color for the card title
- **Button label styling**: Font family, size, and color for button labels
- **Button state styling**: Font family, size, and color for button state text

### 2. **Button Background**

Each button can now have:
- **Background color**: Any CSS color value
- **Background image**: URL to an image (local or external)

## Example YAML Configuration

```yaml
type: custom-room-card
title: "My Living Room"

# New: Global text styling
title_style:
  font_family: "Arial, sans-serif"
  font_size: 28
  text_color: "#FFFFFF"

button_label_style:
  font_family: "Roboto, sans-serif"
  font_size: 12
  text_color: "#212121"

button_state_style:
  font_family: "Mono"
  font_size: 9
  text_color: "#666666"

# Background
background_image: "/local/living_room.jpg"
background_color: "rgba(200, 200, 200, 0.5)"
background_opacity: 0.8

aspect_ratio: "16/9"
design_width: 600

entities:
  # Example 1: Button with custom background color
  - entity: light.ceiling_light
    left: 20
    top: 30
    width: 70
    height: 70
    label: "Ceiling"
    show_label: true
    show_state: true
    button_background_color: "rgba(255, 200, 100, 0.3)"
    tap_action:
      action: toggle

  # Example 2: Button with background image
  - entity: light.wall_light
    left: 50
    top: 30
    width: 70
    height: 70
    label: "Wall"
    show_label: true
    button_background_image: "/local/light_texture.png"
    tap_action:
      action: toggle

  # Example 3: Climate control
  - entity: climate.thermostat
    left: 80
    top: 30
    width: 70
    height: 70
    label: "Climate"
    show_label: true
    show_state: true
    button_background_color: "#E3F2FD"
    tap_action:
      action: more-info

  # Example 4: Simple button
  - entity: switch.fan
    left: 35
    top: 65
    width: 65
    height: 65
    label: "Fan"
    show_label: true
    show_state: false
    tap_action:
      action: toggle
```

## Usage in Editor

1. **Add/Edit Text Styling**:
   - Go to "Text Styling" section
   - Configure font family, size, and color for:
     - Title
     - Button labels
     - Button state

2. **Configure Button Backgrounds**:
   - In each entity button settings
   - Add a background color or image URL
   - Supports both local (`/local/...`) and external URLs

## CSS Variables Reference

The following CSS variables are now available:

```css
--title-font-family      /* Title font family */
--title-font-size        /* Title font size */
--title-text-color       /* Title text color */

--btn-label-font-family  /* Button label font family */
--btn-label-font-size    /* Button label font size */
--btn-label-text-color   /* Button label text color */

--btn-state-font-family  /* Button state font family */
--btn-state-font-size    /* Button state font size */
--btn-state-text-color   /* Button state text color */
```

## Examples

### Modern Dark Theme
```yaml
title_style:
  font_family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  font_size: 32
  text_color: "#FFFFFF"

button_label_style:
  font_family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  font_size: 14
  text_color: "#FFFFFF"

button_state_style:
  font_family: "monospace"
  font_size: 10
  text_color: "#B0BEC5"
```

### Colorful Buttons
```yaml
entities:
  - entity: light.desk
    button_background_color: "#FFF59D"  # Yellow
    
  - entity: light.bed
    button_background_color: "#F8BBD0"  # Pink
    
  - entity: light.ambient
    button_background_color: "#B3E5FC"  # Light Blue
```

### Custom Fonts
```yaml
title_style:
  font_family: "'Georgia', serif"
  
button_label_style:
  font_family: "'Comic Sans MS', cursive"
```

## Notes

- All text styling properties are optional
- Button backgrounds can be combined (color + image will show image on top)
- Backgrounds scale with button size
- Use rgba() colors for transparency
- Local images must be placed in `/local/` directory in Home Assistant
