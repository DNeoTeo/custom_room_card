# 📚 Index Complet - Custom Room Card

## 🎯 Commencer Ici

### Pour les Utilisateurs Home Assistant
1. **[QUICKSTART.md](QUICKSTART.md)** - Démarrage en 3 minutes ⚡
2. **[README_USER.md](README_USER.md)** - Guide complet utilisateur 📖
3. **[examples/](examples/)** - Configurations YAML prêtes à l'emploi 📋

### Pour les Développeurs
1. **[DEVELOPER.md](DEVELOPER.md)** - Architecture et développement 🏗️
2. **[CONTRIBUTING.md](CONTRIBUTING.md)** - Comment contribuer 🤝
3. **[src/custom-room-card.ts](src/custom-room-card.ts)** - Code source 💻

### Pour la Publication sur HACS
1. **[HACS_GUIDE.md](HACS_GUIDE.md)** - Guide de publication 🚀
2. **[manifest.json](manifest.json)** - Manifest Home Assistant ⚙️
3. **[LICENSE](LICENSE)** - Licence Apache 2.0 📄

---

## 📁 Structure des Fichiers

### 📖 Documentation
| Fichier | Audience | Contenu |
|---------|----------|---------|
| **README.md** | Tous | Vue d'ensemble du projet |
| **README_USER.md** | Utilisateurs | Guide complet de configuration |
| **DEVELOPER.md** | Devs | Architecture et développement |
| **QUICKSTART.md** | Débutants | Installation rapide (3 min) |
| **CONTRIBUTING.md** | Contributeurs | Processus de contribution |
| **HACS_GUIDE.md** | Mainteneurs | Publication sur HACS |
| **PROJECT_SUMMARY.md** | Tous | Résumé technique du projet |
| **FINAL_SUMMARY.txt** | Tous | Récapitulatif visuel |

### 💻 Code Source
| Fichier | Description | Taille |
|---------|-------------|--------|
| **src/custom-room-card.ts** | Composant Lit TypeScript | 280 lignes |
| **dist/custom-room-card.js** | Fichier compilé (production) | 7.4 KB |

### 📋 Exemples YAML
| Fichier | Cas d'Usage |
|---------|-----------|
| **01-simple.yaml** | Configuration de base |
| **02-with-background.yaml** | Avec image de fond |
| **03-grid-developer.yaml** | Mode grille pour développement |
| **04-complete-house.yaml** | Maison complète multi-étages |
| **05-advanced-actions.yaml** | Actions avancées et services |

### ⚙️ Configuration
| Fichier | Utilité |
|---------|---------|
| **package.json** | Dépendances NPM et scripts |
| **tsconfig.json** | Configuration TypeScript |
| **rollup.config.mjs** | Configuration de build |
| **manifest.json** | Manifest Home Assistant |
| **hacs.json** | Configuration HACS |
| **HOME_ASSISTANT_CONFIG.yaml** | Exemples d'intégration HA |

### 📋 Système
| Fichier | Contenu |
|---------|---------|
| **.gitignore** | Fichiers à ignorer avec Git |
| **.github/workflows/build.yml** | CI/CD GitHub Actions |
| **LICENSE** | Licence Apache 2.0 |
| **setup.sh** | Script d'installation |

---

## 🚀 Guide Rapide

### Installation pour Utilisateurs
```bash
# Via HACS (recommandé)
HACS → Lovelace → Cherchez "Custom Room Card"
```

### Installation pour Développeurs
```bash
git clone <repo-url>
cd custom_room_card
npm install
npm run dev          # Mode watch
npm run build        # Build production
```

### Configuration Simple
```yaml
type: custom:custom-room-card
title: "Ma Pièce"
background_image: /local/room.jpg
entities:
  - entity: light.salon
    label: "Lumière"
    top: "50%"
    left: "50%"
```

---

## 📊 Navigation par Sujet

### Installation & Configuration
- [Installation HACS](README_USER.md#-installation)
- [Configuration de base](README_USER.md#-configuration)
- [Exemples pratiques](README_USER.md#-exemples)
- [Personnalisation CSS](README_USER.md#-personnalisation-css)

### Dépannage & FAQ
- [FAQ Utilisateurs](README_USER.md#-faq)
- [Dépannage](README_USER.md#-dépannage)
- [FAQ HACS](HACS_GUIDE.md#-faq-hacs)

### Développement
- [Architecture](DEVELOPER.md#-architecture)
- [Environnement dev](DEVELOPER.md#-environnement-de-développement)
- [Testing local](DEVELOPER.md#-tester-localement)
- [Extensions du code](DEVELOPER.md#-extension-du-code)

### Publication
- [Checklist HACS](HACS_GUIDE.md#-checklist-avant-soumission)
- [Étapes de publication](HACS_GUIDE.md#-étapes-de-publication)
- [Après publication](HACS_GUIDE.md#-après-publication)

---

## 💡 Conseils de Lecture

### Si vous avez 5 minutes
→ Lisez [QUICKSTART.md](QUICKSTART.md)

### Si vous avez 30 minutes
→ Lisez [README_USER.md](README_USER.md)

### Si vous voulez contribuer
→ Lisez [CONTRIBUTING.md](CONTRIBUTING.md) et [DEVELOPER.md](DEVELOPER.md)

### Si vous voulez publier sur HACS
→ Lisez [HACS_GUIDE.md](HACS_GUIDE.md)

### Pour une vue d'ensemble complète
→ Lisez [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🔗 Liens Externes

### Ressources Officielles
- [Home Assistant Lovelace](https://www.home-assistant.io/lovelace/)
- [HACS Documentation](https://hacs.xyz/)
- [Lit Documentation](https://lit.dev/)

### Community
- [Home Assistant Forums](https://community.home-assistant.io/)
- [Home Assistant GitHub](https://github.com/home-assistant/core)
- [HACS GitHub](https://github.com/hacs/integration)

### Références Similaires
- [Button Card](https://github.com/custom-cards/button-card)
- [Mushroom Cards](https://github.com/piitaya/mushroom-cards)
- [Vertical Stack in Card](https://github.com/ofekashery/vertical-stack-in-card)

---

## ✅ Checklist de Lecture

Pour les **Utilisateurs**:
- [ ] QUICKSTART.md
- [ ] README_USER.md
- [ ] Exemples dans le dossier examples/
- [ ] HOME_ASSISTANT_CONFIG.yaml

Pour les **Développeurs**:
- [ ] README.md
- [ ] DEVELOPER.md
- [ ] src/custom-room-card.ts
- [ ] package.json & tsconfig.json

Pour les **Contributeurs**:
- [ ] CONTRIBUTING.md
- [ ] DEVELOPER.md
- [ ] CODE (src/custom-room-card.ts)

Pour les **Mainteneurs HACS**:
- [ ] HACS_GUIDE.md
- [ ] manifest.json
- [ ] hacs.json
- [ ] LICENSE

---

## 🎉 Prochaines Étapes

1. **Choisissez votre rôle** (Utilisateur/Dev/Contributeur/Mainteneur)
2. **Consultez la documentation adaptée**
3. **Commencez avec QUICKSTART.md ou README_USER.md**
4. **Explorez les exemples**
5. **Testez localement**
6. **Contribuez ou publiez**

---

## 📞 Support

**Question sur l'utilisation?** → Consultez [README_USER.md](README_USER.md)
**Problème technique?** → Consultez [README_USER.md - Dépannage](README_USER.md#-dépannage)
**Vous développez?** → Consultez [DEVELOPER.md](DEVELOPER.md)
**Vous contribuez?** → Consultez [CONTRIBUTING.md](CONTRIBUTING.md)
**Vous publiez sur HACS?** → Consultez [HACS_GUIDE.md](HACS_GUIDE.md)

---

**Créé avec ❤️ pour la communauté Home Assistant**
**Version 1.0.0 - 7 Mars 2026**
