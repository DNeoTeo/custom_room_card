# Custom Room Card

[![HACS Custom Badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/yourusername/custom-room-card.svg)](https://github.com/yourusername/custom-room-card/releases)

🎨 Une custom card Home Assistant moderne pour créer des layouts adaptatifs avec des boutons d'entités positionnés librement et des backgrounds personnalisables.

## ✨ Caractéristiques

- 📍 **Positionnement libre** des entités sur la carte
- 🖼️ **Background personnalisable** (image ou couleur)
- 🎯 **Layouts adaptatifs** avec grille de positionnement
- 🔘 **Boutons interactifs** pour toutes les entités
- 🎨 **Thème CSS personnalisable**
- ⚡ **Léger et performant** (Lit framework)
- 🚀 **Installation facile via HACS**

## 🖼️ Aperçu

```
┌─────────────────────────────┐
│  Ma Pièce                   │
├─────────────────────────────┤
│                             │
│    💡 Lumière          Rideau│
│                             │
│      Thermo            📺    │
│                             │
└─────────────────────────────┘
```

## 📦 Installation Rapide

### Via HACS (Recommandé)

1. Allez dans **HACS** → **Lovelace**
2. Cliquez sur **⋮** → **Custom repositories**
3. Ajoutez: `https://github.com/yourusername/custom-room-card`
4. Sélectionnez **Lovelace** et créez
5. Installez **Custom Room Card**
6. Redémarrez Home Assistant

### Installation Manuelle

```bash
# Téléchargez le fichier dist/custom-room-card.js
# Placez-le dans /config/www/

# Dans configuration.yaml
lovelace:
  resources:
    - url: /local/custom-room-card.js
      type: module
```

## 🎯 Configuration Basique

```yaml
type: custom:custom-room-card
title: "Salon"
background_image: /local/salon.jpg
height: "400px"
entities:
  - entity: light.salon_principal
    label: "Lumière"
    icon: mdi:lightbulb
    top: "25%"
    left: "30%"
  - entity: climate.salon
    label: "Thermo"
    icon: mdi:thermometer
    bottom: "20%"
    right: "25%"
```

## 📖 Documentation Complète

- 👥 **[Documentation Utilisateur](README_USER.md)** - Installation, configuration, exemples
- 👨‍💻 **[Documentation Développeur](DEVELOPER.md)** - Architecture, extension du code
- 🤝 **[Contribution Guide](CONTRIBUTING.md)** - Comment contribuer

## 💡 Exemples

### Chambre Simple

```yaml
type: custom:custom-room-card
title: "Chambre"
background_color: "#f0f0f0"
height: "350px"
entities:
  - entity: light.bedroom
    label: "Lumière"
    icon: mdi:lightbulb
    top: "50%"
    left: "50%"
    size: "70px"
```

### Avec Grille de Développement

```yaml
type: custom:custom-room-card
show_grid: true
grid_size: 50
background_color: "rgba(200,200,200,0.2)"
height: "500px"
```

## 🛠️ Développement Local

```bash
# Cloner et installer
git clone https://github.com/yourusername/custom-room-card.git
cd custom-room-card
npm install

# Mode développement (watch)
npm run dev

# Build production
npm run build

# Lint & format
npm run lint
npm run format
```

## 🐛 Support

- 📋 Issues: [GitHub Issues](https://github.com/yourusername/custom-room-card/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/custom-room-card/discussions)
- 🏠 Home Assistant: [Community Forums](https://community.home-assistant.io/)

## 📄 License

Apache License 2.0 - Voir [LICENSE](LICENSE) pour les détails complets.

## 🙏 Remerciements

Inspiré par:
- [button-card](https://github.com/custom-cards/button-card)
- [mushroom-cards](https://github.com/piitaya/mushroom-cards)
- [vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card)

## 📈 Versions

- **v1.0.0** - Version initiale (7 Mars 2026)
  - Positionnement libre des entités
  - Backgrounds personnalisables
  - Actions au clic configurables
  - Grille de développement

---

Made with ❤️ for Home Assistant
