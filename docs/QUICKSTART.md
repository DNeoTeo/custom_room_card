# 🚀 Guide de Démarrage Rapide

## Pour les Utilisateurs Home Assistant

### ⚡ Installation en 3 Minutes

**Méthode 1: HACS (Recommandé)**
1. Ouvrez HACS → Lovelace
2. Cherchez "Custom Room Card"
3. Installez et redémarrez

**Méthode 2: Manuelle**
```yaml
# Ajoutez à configuration.yaml
lovelace:
  resources:
    - url: /local/custom-room-card.js
      type: module
```

### 📝 Votre Première Carte

```yaml
type: custom:custom-room-card
title: "Salon"
background_color: "#f5f5f5"
height: "400px"
entities:
  - entity: light.salon
    label: "Lumière"
    icon: mdi:lightbulb
    top: "50%"
    left: "50%"
```

## Pour les Développeurs

### 🛠️ Configuration Complète

**Avec Background Image**
```yaml
type: custom:custom-room-card
title: "Chambre"
background_image: /local/bedroom.jpg
background_size: cover
background_opacity: 0.8
height: "450px"
entities:
  - entity: light.bedroom_main
    label: "Lumière"
    icon: mdi:lightbulb
    top: "30%"
    left: "30%"
    size: "70px"
    tap_action:
      action: toggle
```

**Avec Grille de Positionnement**
```yaml
type: custom:custom-room-card
show_grid: true
grid_size: 50
height: "500px"
background_color: "rgba(200, 200, 200, 0.1)"
```

### 💻 Installation de Développement

```bash
# Via HTTPS (recommandé)
git clone https://github.com/yourusername/custom-room-card.git
cd custom-room-card
npm install
npm run dev
```

**Alternative avec SSH** (si vous avez configuré vos clés GitHub):
```bash
git clone git@github.com:yourusername/custom-room-card.git
cd custom-room-card
npm install
npm run dev
```

## 📚 Documentation Complète

- 📖 **[README_USER.md](README_USER.md)** - Configuration détaillée, exemples
- 👨‍💻 **[DEVELOPER.md](DEVELOPER.md)** - Architecture, extension du code
- 🤝 **[CONTRIBUTING.md](CONTRIBUTING.md)** - Comment contribuer

## ❓ FAQ

**Q: Comment positionner précisément mes boutons?**
A: Utilisez `show_grid: true` pour voir une grille, puis ajustez `top`, `left`, `right`, `bottom` en pourcentages.

**Q: Mon image de fond ne s'affiche pas?**
A: Vérifiez que:
- Le fichier existe dans `/config/www/`
- Vous utilisez un chemin absolu: `/local/image.jpg`
- Les permissions sont correctes

**Q: Comment ajouter plus d'actions?**
A: Consultez DEVELOPER.md, section "Ajouter une action personnalisée"

**Q: Puis-je utiliser cela hors ligne?**
A: Oui! Custom Room Card ne nécessite aucune dépendance externe.

## 🎯 Prochaines Étapes

1. [Installez la card](README_USER.md#-installation)
2. [Configurez votre première carte](README_USER.md#-configuration)
3. [Explorez les exemples](README_USER.md#-exemples)
4. [Personnalisez le CSS](README_USER.md#-personnalisation-css)

## 🆘 Support

- 📋 Problèmes? Ouvrez une [Issue GitHub](https://github.com/yourusername/custom-room-card/issues)
- 💬 Questions? [GitHub Discussions](https://github.com/yourusername/custom-room-card/discussions)
- 🏠 Plus d'aide? [Home Assistant Community](https://community.home-assistant.io/)

---

**Besoin d'aide?** Consultez la documentation complète ou ouvrez une issue!
