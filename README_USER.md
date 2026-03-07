# Custom Room Card - Documentation Utilisateur

## 📱 À propos

**Custom Room Card** est une carte personnalisée Home Assistant qui permet de créer des layouts adaptatifs avec des boutons d'entités positionnés librement sur un fond personnalisable. Parfait pour représenter une pièce avec des contrôles d'éclairage, température, et autres appareils.

## 🚀 Installation

### Via HACS (Recommandé)

1. Allez dans HACS → Automations/Intégrations
2. Cliquez sur "Custom repositories"
3. Ajoutez: `https://github.com/yourusername/custom-room-card`
4. Sélectionnez "Lovelace" comme catégorie
5. Cliquez sur "Créer"
6. Cherchez "Custom Room Card" et installez-le
7. Redémarrez Home Assistant

### Installation Manuelle

1. Téléchargez le fichier `custom-room-card.js` depuis [GitHub](https://github.com/yourusername/custom-room-card/releases)
2. Placez-le dans: `/config/www/custom-cards/custom-room-card.js`
3. Ajoutez à votre `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/custom-cards/custom-room-card.js
      type: module
```

4. Videz le cache navigateur (Ctrl+Shift+R) et redémarrez Home Assistant

## 📝 Configuration

### Configuration YAML Basique

```yaml
type: custom:custom-room-card
title: "Ma Pièce"
background_image: /local/room-background.png
height: "400px"
entities:
  - entity: light.livingroom
    label: "Lumière"
    top: "20%"
    left: "30%"
    icon: mdi:lightbulb
```

### Paramètres Disponibles

#### Paramètres Globaux

| Paramètre | Type | Défaut | Description |
|-----------|------|--------|-------------|
| `title` | string | - | Titre de la carte |
| `height` | string | `400px` | Hauteur de la zone principale |
| `background_image` | string | - | URL de l'image de fond |
| `background_color` | string | `#f5f5f5` | Couleur de fond (si pas d'image) |
| `background_size` | string | `cover` | Taille du fond: `cover`, `contain`, `100% 100%` |
| `background_position` | string | `center` | Position du fond |
| `background_opacity` | number | `1` | Opacité (0-1) |
| `border_radius` | string | `12px` | Rayon des coins |
| `show_grid` | boolean | `false` | Affiche une grille pour positionner |
| `grid_size` | number | `50` | Taille des cases de la grille (px) |

#### Paramètres par Entité

```yaml
entities:
  - entity: light.livingroom          # (obligatoire) ID de l'entité
    label: "Lumière Principal"        # Texte affiché sous le bouton
    icon: mdi:lightbulb               # Icône Material Design
    top: "20%"                        # Distance depuis le haut
    left: "30%"                       # Distance depuis la gauche
    right: "10%"                      # Alternative à left
    bottom: "15%"                     # Alternative à top
    size: "80px"                      # Taille du bouton
    tap_action:                       # Action au clic
      action: toggle                  # toggle, turn_on, turn_off, call_service
```

## 💡 Exemples

### Exemple 1: Pièce Simple avec 4 Lumières

```yaml
type: custom:custom-room-card
title: "Salon"
background_color: "#f0f0f0"
height: "350px"
entities:
  - entity: light.salon_principal
    label: "Principal"
    icon: mdi:lightbulb
    top: "25%"
    left: "25%"
    
  - entity: light.salon_coin
    label: "Coin"
    icon: mdi:lightbulb
    top: "25%"
    right: "25%"
    
  - entity: light.salon_applique
    label: "Applique"
    icon: mdi:wall-sconce
    bottom: "15%"
    left: "20%"
    
  - entity: light.salon_rideau
    label: "Rideau"
    icon: mdi:window-closed
    bottom: "15%"
    right: "20%"
```

### Exemple 2: Chambre avec Image de Fond

```yaml
type: custom:custom-room-card
title: "Chambre"
background_image: /local/bedroom.jpg
background_size: cover
background_position: center
background_opacity: 0.9
height: "450px"
entities:
  - entity: light.bedroom_main
    label: "Lumière"
    icon: mdi:lightbulb
    top: "30%"
    left: "50%"
    size: "70px"
    tap_action:
      action: toggle
      
  - entity: climate.bedroom
    label: "Thermostat"
    icon: mdi:thermometer
    bottom: "25%"
    right: "15%"
    size: "60px"
    tap_action:
      action: call_service
      service: climate.set_temperature
      data:
        entity_id: climate.bedroom
        temperature: 21
```

### Exemple 3: Avec Grille de Positionnement

Pour développer plus facilement, activez la grille:

```yaml
type: custom:custom-room-card
title: "Développement"
show_grid: true
grid_size: 50
background_color: "rgba(255,255,255,0.3)"
height: "400px"
entities:
  - entity: light.test
    label: "Test"
    top: "50%"
    left: "50%"
```

Cela affichera une grille qui aide à positionner les entités précisément.

## 🎨 Personnalisation CSS

### Modifier les couleurs

Ajoutez un style personnalisé dans votre dashboard:

```yaml
type: custom:custom-room-card
title: "Personnalisé"
...
style: |
  custom-room-card {
    --primary-color: #ff6b6b;
    --on-color: #51cf66;
    --off-color: #ffa94d;
    --background-color: #e9ecef;
  }
```

### Variables CSS Disponibles

- `--primary-color`: Couleur primaire
- `--on-color`: Couleur des boutons actifs
- `--off-color`: Couleur des boutons inactifs
- `--background-color`: Couleur de fond des boutons

## ⌨️ Actions au Clic

### Toggle (Défaut)

```yaml
tap_action:
  action: toggle
```

### Allumer/Éteindre

```yaml
tap_action:
  action: turn_on
```

```yaml
tap_action:
  action: turn_off
```

### Appeler un Service

```yaml
tap_action:
  action: call_service
  service: light.turn_on
  data:
    entity_id: light.livingroom
    brightness: 255
    rgb_color: [255, 0, 0]
```

## 🐛 Dépannage

### La card ne s'affiche pas

- Vérifiez que vous avez vidé le cache navigateur
- Vérifiez la console du navigateur (F12) pour les erreurs
- Assurez-vous que les entités existent dans Home Assistant

### Les boutons ne sont pas positionnés correctement

- Utilisez `show_grid: true` pour voir la grille
- Les positions sont en pourcentage (0-100%) ou pixels
- Vérifiez que `top/bottom` et `left/right` ne sont pas tous deux utilisés

### L'image de fond ne s'affiche pas

- Vérifiez que le fichier existe dans `/config/www/`
- Utilisez des chemins absolus: `/local/images/room.jpg`
- Vérifiez les permissions du fichier

## 🔄 Mise à Jour

La card se mettra à jour automatiquement si vous l'avez installée via HACS. Vous serez notifié quand une mise à jour est disponible.

## 📄 Licence

Apache License 2.0 - Voir LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont bienvenues! Consultez CONTRIBUTING.md pour les directives.
