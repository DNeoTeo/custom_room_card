# 📚 Guide Complet HACS

## Pour Publier sur HACS (Home Assistant Community Store)

### ✅ Pré-requis

- [ ] Compte GitHub (gratuit)
- [ ] Dépôt public
- [ ] Documentation README en anglais (recommandé)
- [ ] Tags de version (`v1.0.0`, `v1.0.1`, etc.)
- [ ] Manifest.json valide
- [ ] License file

## 📋 Checklist Avant Soumission

### Code
- [ ] Code fonctionnel et testé
- [ ] Build sans erreurs: `npm run build`
- [ ] Pas de warnings dans la console
- [ ] Fichiers compilés inclus dans `/dist`

### Documentation
- [ ] README.md complet (EN)
- [ ] README_USER.md en français (optionnel)
- [ ] CONTRIBUTING.md présent
- [ ] Exemples fonctionnels
- [ ] License file (Apache 2.0 ou MIT)

### Configuration
- [ ] manifest.json valide
- [ ] hacs.json présent
- [ ] package.json correct
- [ ] .gitignore configuré

### Versioning
- [ ] Version cohérente dans package.json
- [ ] Tag git pour chaque release
- [ ] Changelog ou release notes

## 🚀 Étapes de Publication

### 1️⃣ Préparer le Dépôt GitHub

```bash
# Cloner le projet
git clone /home/dexterneo/custom_room_card
cd custom_room_card

# Initialiser git
git init
git add .
git commit -m "Initial commit: Custom Room Card v1.0.0"

# Créer la branche principale
git branch -M main

# Ajouter le remote (remplacer yourusername)
git remote add origin https://github.com/yourusername/custom-room-card.git

# Pousser le code
git push -u origin main

# Créer un tag de version
git tag v1.0.0
git push origin v1.0.0
```

### 2️⃣ Vérifier le Manifest

Votre `manifest.json`:
```json
{
  "domain": "custom_room_card",
  "codeowners": ["@yourusername"],
  "config_flow": false,
  "documentation": "https://github.com/yourusername/custom-room-card",
  "iot_class": "local_polling",
  "requirements": [],
  "version": "1.0.0"
}
```

Votre `hacs.json`:
```json
{
  "name": "Custom Room Card",
  "content_in_root": false,
  "filename": "custom-room-card.js",
  "documentation": "https://github.com/yourusername/custom-room-card",
  "homeassistant": "2024.1.0",
  "render_readme": true,
  "category": "lovelace"
}
```

### 3️⃣ Ajouter à HACS

**Option A: Via HACS UI (Facile)**

1. Home Assistant → HACS
2. Lovelace → ⋮ (menu) → Custom repositories
3. Collez: `https://github.com/yourusername/custom-room-card`
4. Sélectionnez: `Lovelace`
5. Cliquez: Create
6. Installez et testez localement

**Option B: Soumission Officielle (Recommandé)**

1. Fork [HACS Default Repo](https://github.com/hacs/default)
2. Éditez `repositories.json`
3. Ajoutez votre repo:
```json
{
  "repository": "yourusername/custom-room-card",
  "category": "lovelace"
}
```
4. Commitez et créez une Pull Request
5. Attendez l'approbation (24-48h)

### 4️⃣ Validation

HACS va vérifier automatiquement:
- ✅ Structure du projet
- ✅ Manifest.json valide
- ✅ README présent
- ✅ License présente
- ✅ Format correct

## 📊 Après Publication

### Monitoring
- Consultez les statistiques d'installation
- Répondez aux issues
- Maintenez la card à jour

### Mises à Jour

Pour publier une nouvelle version:

```bash
# Mettre à jour le code
# ... modifications ...

# Mettre à jour package.json
npm version patch  # ou minor, major

# Commit et tag
git add .
git commit -m "Release v1.0.1"
git tag v1.0.1
git push origin main
git push origin v1.0.1
```

## 🎓 Ressources

- [HACS Documentation](https://hacs.xyz/docs/publish/)
- [Home Assistant Lovelace](https://www.home-assistant.io/lovelace/)
- [Custom Component Development](https://developers.home-assistant.io/)
- [Semantic Versioning](https://semver.org/)

## ❓ FAQ HACS

**Q: Combien de temps pour être approuvé?**
A: Entre 24h et 1 semaine selon la charge

**Q: Comment faire une mise à jour après publication?**
A: Poussez simplement un nouveau tag, HACS détectera automatiquement

**Q: Puis-je retirer ma card?**
A: Oui, contactez les mainteneurs de HACS via GitHub

**Q: Comment augmenter les statistiques?**
A: Publiez sur les forums Home Assistant, YouTube, etc.

## 🆘 Problèmes Courants

### Validation échoue
```
Vérifiez:
- manifest.json est valide (testez sur jsonlint.com)
- Tous les fichiers obligatoires sont présents
- La structure correspond aux standards HACS
```

### La card ne s'installe pas
```
1. Vérifiez que hacs.json pointe vers le bon fichier
2. Assurez-vous que filename = custom-room-card.js
3. Vérifiez les permissions
4. Redémarrez Home Assistant
```

### Les mises à jour ne sont pas détectées
```
1. Créez un tag git properly: git tag v1.0.1
2. Poussez le tag: git push origin v1.0.1
3. Attendez que HACS le détecte (5-15 min)
4. Rafraîchissez la page HACS
```

---

**Bonne chance avec votre publication! 🎉**

Si vous avez des questions, consultez la communauté Home Assistant ou l'équipe HACS.
