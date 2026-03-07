# ✅ Installation & Configuration Complète

## 📋 Checklist Installation

### Pour les Utilisateurs Home Assistant

- [ ] HACS installé dans Home Assistant
- [ ] "Custom repositories" accessible
- [ ] Ajouter: `https://github.com/DNeoTeo/custom-room-card`
- [ ] Catégorie: `lovelace`
- [ ] Installer "Custom Room Card"
- [ ] Redémarrer Home Assistant
- [ ] Vider cache navigateur (Ctrl+Shift+R)

### Pour les Développeurs

- [ ] Cloner le repo: `git clone https://github.com/DNeoTeo/custom-room-card.git`
- [ ] `cd custom-room-card`
- [ ] `npm install`
- [ ] Fichier `dist/custom-room-card.js` existe
- [ ] Copier dans Home Assistant: `/config/www/custom-room-card.js`
- [ ] Ajouter à `configuration.yaml`:
  ```yaml
  lovelace:
    resources:
      - url: /local/custom-room-card.js
        type: module
  ```
- [ ] Redémarrer Home Assistant

## 🚀 Démarrage Rapide

### Installation via HACS (5 minutes)

1. **Ouvrez Home Assistant**
2. **HACS → Lovelace**
3. **⋮ menu → Custom repositories**
4. **Collez:** `https://github.com/DNeoTeo/custom-room-card`
5. **Installez**
6. **Redémarrez**

### Configuration Minimale

```yaml
type: custom:custom-room-card
title: "Ma Pièce"
background_color: "#f5f5f5"
height: "400px"
entities:
  - entity: light.salon
    label: "Lumière"
    top: "50%"
    left: "50%"
    icon: mdi:lightbulb
```

## 🔧 Configuration Avancée

### Avec Image de Fond

```yaml
type: custom:custom-room-card
title: "Chambre"
background_image: /local/images/bedroom.jpg
background_size: cover
background_opacity: 0.85
height: "450px"
entities:
  - entity: light.bedroom
    label: "Lumière"
    top: "30%"
    left: "30%"
    size: "70px"
    tap_action:
      action: toggle
```

### Avec Grille de Positionnement

```yaml
type: custom:custom-room-card
show_grid: true
grid_size: 50
background_color: "rgba(200, 200, 200, 0.15)"
height: "500px"
entities:
  - entity: light.test
    label: "Test"
    top: "50%"
    left: "50%"
```

## 🐛 Dépannage

### La card ne s'affiche pas

- [ ] Vérifiez la console navigateur (F12) pour les erreurs
- [ ] Videz le cache: Ctrl+Shift+R
- [ ] Vérifiez que le fichier existe: `/config/www/custom-room-card.js`
- [ ] Redémarrez Home Assistant

### Les boutons ne réagissent pas

- [ ] Vérifiez que l'entité existe: `Developer Tools → States`
- [ ] Vérifiez le domaine de l'entité (light, switch, climate, etc.)
- [ ] Testez manuellement le service via Developer Tools

### L'image de fond ne s'affiche pas

- [ ] Vérifiez le chemin: `/local/images/...`
- [ ] L'image doit être dans `/config/www/images/`
- [ ] Format supporté: JPG, PNG, WebP
- [ ] Vérifiez les permissions du fichier

### Erreur "Repository structure not compliant"

- [ ] Vérifiez `hacs.json` (format JSON, pas YAML)
- [ ] Vérifiez que `dist/custom-room-card.js` existe
- [ ] Vérifiez que `README.md` et `LICENSE` existent
- [ ] Consultez [HACS_COMPLIANCE.md](HACS_COMPLIANCE.md)

### WSL/Windows: Erreur de compilation

- [ ] Consultez [WSL_WINDOWS.md](WSL_WINDOWS.md)
- [ ] Le fichier est déjà compilé, pas besoin de recompiler
- [ ] Utilisez WSL (terminal Linux) au lieu de PowerShell

## 📚 Documentation

| Document | Pour | Contenu |
|----------|------|---------|
| [README_USER.md](README_USER.md) | Utilisateurs | Configuration complète |
| [QUICKSTART.md](QUICKSTART.md) | Débutants | Installation 3 min |
| [DEVELOPER.md](DEVELOPER.md) | Devs | Architecture & code |
| [HACS_GUIDE.md](HACS_GUIDE.md) | Publication | Guide HACS |
| [WSL_WINDOWS.md](WSL_WINDOWS.md) | Windows | Problèmes WSL |
| [GIT_WORKFLOW.md](GIT_WORKFLOW.md) | Git | Workflow Git |

## 🎯 Cas d'Usage Courants

### 1. Salon avec 4 Lumières
Voir: [examples/04-complete-house.yaml](examples/04-complete-house.yaml)

### 2. Chambre Simple
Voir: [examples/02-with-background.yaml](examples/02-with-background.yaml)

### 3. Actions Avancées
Voir: [examples/05-advanced-actions.yaml](examples/05-advanced-actions.yaml)

## 💡 Conseils

- **Commencez simple:** Utilisez une couleur de fond, puis ajoutez une image
- **Grille de développement:** Activez `show_grid: true` pour positionner facilement
- **Icônes MDI:** Cherchez les icônes sur [materialdesignicons.com](https://materialdesignicons.com/)
- **Labels:** Utilisez des labels courts pour éviter le débordement
- **Redémarrages:** Après chaque modification majeure, redémarrez HA

## ✨ Features Supportées

- ✅ Positionnement libre (top, left, right, bottom)
- ✅ Background image & couleur
- ✅ Toutes les entités HA
- ✅ Actions au clic (toggle, turn_on, turn_off, services)
- ✅ Icônes Material Design
- ✅ CSS personnalisé
- ✅ Grille de développement
- ✅ Responsive & adaptatif

## 🚀 Prochaines Étapes

1. [Lisez QUICKSTART.md](QUICKSTART.md) - 3 minutes
2. [Installez via HACS](#installation-via-hacs-5-minutes)
3. [Configurez votre première carte](#configuration-minimale)
4. [Explorez les exemples](examples/)
5. [Personnalisez avec CSS](#configuration-avancée)

## 🆘 Support

- 📖 [Documentation Complète](README_USER.md)
- 🐛 [GitHub Issues](https://github.com/DNeoTeo/custom-room-card/issues)
- 💬 [GitHub Discussions](https://github.com/DNeoTeo/custom-room-card/discussions)
- 🏠 [Home Assistant Community](https://community.home-assistant.io/)

---

**Besoin d'aide?** Consultez la [FAQ](README_USER.md#-faq) ou ouvrez une issue GitHub! 🎉
