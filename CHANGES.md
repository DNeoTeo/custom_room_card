# Changelog - Text Styling & Button Backgrounds

## Summary

Added comprehensive text styling and button background customization features to the Custom Room Card, allowing users to customize fonts, text colors, sizes, and button backgrounds globally and per-button.

## Changes Made

### 1. **types.ts** - New Interfaces

#### Added `TextStyleConfig` Interface
- `font_family?: string` - Font family name (e.g., "Arial", "Roboto")
- `font_size?: number` - Font size in pixels
- `text_color?: string` - Text color (CSS color value)

#### Extended `EntityButtonConfig` Interface
- `button_background_color?: string` - Button background color (CSS)
- `button_background_image?: string` - Button background image URL

#### Extended `CustomRoomCardConfig` Interface
- `title_style?: TextStyleConfig` - Title text styling
- `button_label_style?: TextStyleConfig` - Entity button label styling
- `button_state_style?: TextStyleConfig` - Entity button state text styling

### 2. **styles.ts** - CSS Variables & Classes

#### Added CSS Variables (in `:host`)
```css
--title-font-family
--title-font-size
--title-text-color
--btn-label-font-family
--btn-label-font-size
--btn-label-text-color
--btn-state-font-family
--btn-state-font-size
--btn-state-text-color
```

#### Updated `.room-title`
- Now uses `font-family: var(--title-font-family)`
- Now uses `font-size: var(--title-font-size)`
- Now uses `color: var(--title-text-color)`

#### Updated `.btn-label`
- Now uses `font-family: var(--btn-label-font-family)`
- Now uses `font-size: var(--btn-label-font-size)`
- Now uses `color: var(--btn-label-text-color)`

#### Updated `.btn-state`
- Now uses `font-family: var(--btn-state-font-family)`
- Now uses `font-size: var(--btn-state-font-size)`
- Now uses `color: var(--btn-state-text-color)`

### 3. **card.ts** - Rendering Logic

#### Updated `render()` Method
- Applies global text styling from `title_style`, `button_label_style`, and `button_state_style` to container styles
- CSS variables are computed considering the responsive scale factor

#### Updated `_renderEntityButton()` Method
- Added support for `button_background_color` inline style
- Added support for `button_background_image` with `background-size: cover` and `background-position: center`

### 4. **editor.ts** - UI Controls

#### Added `_renderTextStyleSection()` Method
Provides visual editor for:
- **Title styling** (font family, size, text color)
- **Button label styling** (font family, size, text color)
- **Button state styling** (font family, size, text color)

#### Enhanced `_renderEntityRow()` Method
Added button background controls:
- Background color input
- Background image URL input

#### Added `_updateTextStyle()` Helper Method
- Updates text styling properties
- Handles undefined/empty values
- Removes empty style objects

## How It Works

### Global Text Styling
Users can configure text styling globally for:
1. **Title** - The card title shown at top-left
2. **Button Labels** - Entity button labels below icons
3. **Button State** - Entity state text below labels

Each has separate `font_family`, `font_size`, and `text_color` properties.

### Button Backgrounds
Each entity button can have:
1. **Background color** - Any CSS color (solid or with alpha)
2. **Background image** - URL to image file (local or remote)

Both can be used together - image will display on top of color.

### Responsive Scaling
- Title font size is multiplied by `_cardScale` for responsive sizing
- Button label/state sizing adjusts via existing CSS `calc()` functions
- Fonts remain readable across all screen sizes

## Configuration Examples

### YAML Example
```yaml
type: custom-room-card
title: "My Room"

title_style:
  font_family: "Georgia, serif"
  font_size: 24
  text_color: "#FFFFFF"

button_label_style:
  font_family: "Roboto"
  font_size: 12
  text_color: "#212121"

button_state_style:
  font_family: "monospace"
  font_size: 9
  text_color: "#757575"

entities:
  - entity: light.main
    left: 50
    top: 50
    button_background_color: "#FFF59D"
    button_background_image: "/local/light_bg.png"
```

### Editor Preview
- New "Text Styling" section appears after "General" settings
- "Button Background" controls appear in each entity button settings

## Benefits

✅ Consistent typography across the card
✅ Per-button background customization
✅ Flexible color options including transparency
✅ Support for custom fonts and images
✅ Fully responsive and scales with card
✅ Backward compatible (all new options are optional)
✅ Visual editor with live preview

## Migration

**No migration needed!** All new features are completely optional and backward compatible with existing configurations.
