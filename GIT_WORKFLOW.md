# 🔄 Workflow Git Complet

## 🚀 Flux Recommandé pour Contribuer

### 1️⃣ Au Démarrage

```bash
# Cloner le repo (HTTPS recommandé)
git clone https://github.com/yourusername/custom-room-card.git
cd custom-room-card

# Ou depuis SSH (si configuré)
git clone git@github.com:yourusername/custom-room-card.git
cd custom-room-card

# Installer les dépendances
npm install
```

### 2️⃣ Créer une Branche pour Chaque Fonctionnalité

```bash
# Créer et basculer vers une nouvelle branche
git checkout -b feature/ma-feature

# Ou directement
git switch -c feature/ma-feature
```

**Conventions de noms:**
- `feature/` - Nouvelle fonctionnalité
- `fix/` - Correction de bug
- `docs/` - Documentation
- `chore/` - Maintenance

### 3️⃣ Faire des Changements

```bash
# Éditer vos fichiers
# ...

# Vérifier les changements
git status
git diff

# Ajouter les changements
git add .

# Ou sélectivement
git add src/custom-room-card.ts
```

### 4️⃣ Committer

```bash
# Commit avec un message clair
git commit -m "feat: Add new feature"
git commit -m "fix: Correct bug in positioning"
git commit -m "docs: Update README"

# Format recommandé: type: description
# Types: feat, fix, docs, style, refactor, test, chore
```

### 5️⃣ Avant de Pousser

**Important :** Toujours vérifier s'il y a des changements distants :

```bash
# Récupérer les changements distants
git fetch origin

# Vérifier s'il y a des divergences
git status

# Si divergent, fusionner
git pull origin master

# Ou rebaser (plus propre, optionnel)
git pull --rebase origin master
```

### 6️⃣ Pousser

```bash
# Première fois (créer la branche distante)
git push -u origin feature/ma-feature

# Ensuite
git push origin feature/ma-feature

# Ou simplement
git push
```

### 7️⃣ Pull Request (sur GitHub)

1. Allez sur GitHub
2. Cliquez "Compare & Pull Request"
3. Décrivez vos changements
4. Cliquez "Create Pull Request"

## ⚠️ Problèmes Courants

### "Your branch is behind"

```bash
# Mettre à jour depuis main
git pull origin master

# Ou rebaser
git rebase origin/master
```

### "Non-fast-forward rejection"

```bash
# C'est ce que vous avez eu ! Fusionner d'abord:
git pull origin master

# Puis pousser
git push origin master
```

### "Merge conflict"

```bash
# Git marquera les conflits
# Éditez les fichiers

# Après résolution
git add .
git commit -m "Merge conflict resolution"
git push origin master
```

### Accidentellement en avance?

```bash
# Vérifier l'historique
git log --oneline -10

# Annuler le dernier commit (mais garder les changements)
git reset --soft HEAD~1

# Ou le supprimer complètement
git reset --hard HEAD~1
```

## 🔧 Configuration Git Recommandée

```bash
# Configuration globale (une fois)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Pour éviter les problèmes de merge
git config --global pull.rebase false  # ou true pour rebase

# Alias utiles (optionnel)
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

## 📊 Voir l'Historique

```bash
# Historique simple
git log --oneline

# Avec branches
git log --oneline --graph --all

# Historique d'un fichier
git log --oneline src/custom-room-card.ts

# Diff entre branches
git diff master feature/ma-feature
```

## 🔄 Synchro Multi-Personne

Si plusieurs personnes travaillent sur le repo:

```bash
# Avant de travailler
git pull origin master

# Pendant votre travail (branche séparée)
git checkout -b feature/ma-feature

# Avant de pousser
git pull --rebase origin master  # Rebaser sur les derniers changements

# Pousser
git push origin feature/ma-feature

# Créer une PR sur GitHub
```

## ✅ Checklist Avant un Push

- [ ] `git status` - Pas de fichiers non trackés problématiques
- [ ] `git diff` - Vérifier les changements
- [ ] Tests locaux passent - `npm run build`
- [ ] Pas de console errors
- [ ] `git pull` - Récupérer les changements distants
- [ ] Résoudre les conflits s'il y en a
- [ ] `git push`

## 🚀 Pour les Mainteneurs

### Fusionner une PR

```bash
git checkout master
git pull origin master
git merge feature/branchname
git push origin master
```

### Créer une Release

```bash
# Mettre à jour la version
npm version patch  # ou minor, major

# Créer un tag
git tag v1.0.1

# Pousser avec tags
git push origin master --tags
```

## 📚 Ressources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Résumé:** Toujours faire `git pull` avant `git push` pour éviter les divergences! 🎯
