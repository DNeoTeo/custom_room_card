# Contributing to Custom Room Card

Merci d'envisager de contribuer à Custom Room Card ! 🎉

## 🚀 Comment Contribuer

### Pour les Bugs

1. **Vérifiez** si le bug existe déjà dans [Issues](https://github.com/yourusername/custom-room-card/issues)
2. **Créez** une nouvelle issue en fournissant:
   - Description claire du bug
   - Étapes pour reproduire
   - Comportement attendu vs réel
   - Version de Home Assistant
   - Screenshots si applicable

### Pour les Nouvelles Fonctionnalités

1. **Ouvrez** une issue pour discuter de votre idée d'abord
2. **Attendez** le feedback des mainteneurs
3. **Implementez** après approbation

### Pour les Pull Requests

1. **Forkez** le dépôt
2. **Créez** une branche: `git checkout -b feature/ma-feature`
3. **Commitez** avec des messages clairs
4. **Pushez**: `git push origin feature/ma-feature`
5. **Créez** une Pull Request

## 📋 Checklist PR

- [ ] Code compilé sans erreurs
- [ ] Tests locaux réussis
- [ ] Documentation mise à jour
- [ ] Aucune console error/warning
- [ ] Respect du style de code

## 🎨 Style de Code

Nous utilisons:
- **Prettier** pour le formatage
- **ESLint** pour la linting
- **TypeScript strict mode**

```bash
npm run format
npm run lint
```

## 📝 Commits

Format recommandé:
```
type: courte description

Description détaillée si nécessaire
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

## 🧪 Tests

Testez localement:
```bash
npm run build
# Copiez dist/custom-room-card.js dans Home Assistant
```

## 📄 License

Toute contribution accepte les termes de la license Apache 2.0.
