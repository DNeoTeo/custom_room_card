# Quick Start - New Features

## 🎯 What's New

Your Custom Room Card now supports:

### 1. Text Styling
Customize the appearance of text elements:
- **Title** - Change the title font, size, and color
- **Button Labels** - Style the text below icons
- **Button State** - Style the state text (e.g., "on", "off", "auto")

### 2. Button Backgrounds
Give each button a custom look:
- **Background Color** - Solid colors or transparent (rgba)
- **Background Image** - Local or external image URLs

---

## 📝 Configuration

### In YAML (lovelace-ui: YAML mode)

```yaml
type: custom-room-card
title: "My Room"

# NEW: Title styling
title_style:
  font_family: "Arial, sans-serif"
  font_size: 28
  text_color: "#FFFFFF"

# NEW: Button label styling
button_label_style:
  font_family: "Roboto, sans-serif"
  font_size: 12
  text_color: "#212121"

# NEW: Button state styling
button_state_style:
  font_family: "monospace"
  font_size: 9
  text_color: "#666666"

background_image: "/local/my_room.jpg"
aspect_ratio: "16/9"

entities:
  # NEW: Button with background color
  - entity: light.main
    left: 20
    top: 50
    label: "Main Light"
    show_label: true
    show_state: true
    button_background_color: "#FFF59D"
    tap_action:
      action: toggle

  # NEW: Button with background image
  - entity: light.accent
    left: 80
    top: 50
    label: "Accent"
    button_background_image: "/local/accent_light.png"
    tap_action:
      action: toggle
```

### In Visual Editor

1. **Go to Text Styling**
   - Edit Title, Button Label, and Button State fonts
   - Set font family, size, and color for each

2. **Edit Entity Button**
   - Scroll to "Button Background" section
   - Set background color or image URL
   - Changes preview in real-time

---

## 🎨 Common Patterns

### Dark Modern Theme
```yaml
title_style:
  font_family: "'Segoe UI', sans-serif"
  font_size: 32
  text_color: "#FFFFFF"

button_label_style:
  font_family: "'Segoe UI', sans-serif"
  font_size: 14
  text_color: "#FFFFFF"
```

### Colorful Buttons
```yaml
entities:
  - entity: light.warm
    button_background_color: "#FFEB3B"  # Yellow
    
  - entity: light.cool
    button_background_color: "#03A9F4"  # Blue
    
  - entity: light.accent
    button_background_color: "#E91E63"  # Pink
```

### Custom Font
```yaml
title_style:
  font_family: "'Georgia', serif"

button_label_style:
  font_family: "'Comic Sans MS', cursive"
```

### Semi-transparent Backgrounds
```yaml
entities:
  - entity: light.main
    button_background_color: "rgba(255, 200, 100, 0.5)"
    # Orange with 50% transparency
```

---

## 📁 File Paths

### Local Images
Place images in your Home Assistant `/local/` directory:

```
/home/assistant/.homeassistant/www/
├── my_room.jpg
├── accent_light.png
└── texture.png
```

Then reference them as:
```yaml
background_image: "/local/my_room.jpg"
button_background_image: "/local/accent_light.png"
```

### External Images
Use full URLs:
```yaml
button_background_image: "https://example.com/icon.png"
```

---

## 💡 Tips & Tricks

✅ **Combine Color + Image**
- Set both background color and image
- Image displays on top of color
- Use transparent image for layering effect

✅ **Use CSS Colors**
- HEX: `#FF0000`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(255, 0, 0, 0.5)`
- Named: `red`, `blue`, `transparent`

✅ **Font Families**
- System fonts: `Arial`, `Roboto`, `Helvetica`, `Georgia`
- Monospace: `monospace`, `Courier New`, `Consolas`
- Fallback: `font_family: "Arial, sans-serif"`

✅ **Responsive Fonts**
- Sizes scale automatically with card width
- Title font scales with responsive factor
- Labels and states maintain readability

---

## 🔄 Migration

**No action needed!** All new features are optional.

- Existing configurations work unchanged
- New options are fully backward compatible
- Mix old and new features in one card

---

## 📚 More Info

- **Examples**: See `EXAMPLE_TEXT_STYLING.md`
- **Technical Details**: See `IMPLEMENTATION.md`
- **Changelog**: See `CHANGES.md`

---

## 🐛 Troubleshooting

### Text not showing?
- Check font family name is correct
- Ensure font is available on system
- Try fallback: `"Arial, sans-serif"`

### Background image not displaying?
- Verify image URL is correct
- Check `/local/` path exists in Home Assistant
- Try external URL first to test

### Colors not applying?
- Use valid CSS color format
- Check for typos in hex codes
- Try named colors like `red`, `blue`

---

## ✨ Features at a Glance

| Feature | YAML | Editor | Default |
|---------|------|--------|---------|
| Title Font Family | ✅ | ✅ | System default |
| Title Font Size | ✅ | ✅ | Unchanged |
| Title Color | ✅ | ✅ | Unchanged |
| Button Label Font | ✅ | ✅ | System default |
| Button Label Size | ✅ | ✅ | 10px |
| Button Label Color | ✅ | ✅ | Unchanged |
| Button State Font | ✅ | ✅ | System default |
| Button State Size | ✅ | ✅ | 9px |
| Button State Color | ✅ | ✅ | Unchanged |
| Button BG Color | ✅ | ✅ | None |
| Button BG Image | ✅ | ✅ | None |

---

Enjoy customizing your room cards! 🎉
