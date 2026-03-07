# Custom Room Card - Documentation Développeur

## 🏗️ Architecture

**Custom Room Card** est une Lovelace Custom Card pour Home Assistant, développée avec Lit et TypeScript.

### Structure du Projet

```
custom-room-card/
├── src/
│   └── custom-room-card.ts        # Composant principal
├── dist/
│   └── custom-room-card.js        # Fichier compilé (production)
├── package.json                   # Dépendances et scripts
├── tsconfig.json                  # Configuration TypeScript
├── rollup.config.mjs              # Configuration de build
├── README.md                      # Documentation utilisateur
├── DEVELOPER.md                   # Ce fichier
├── manifest.json                  # Manifest HACS
└── LICENSE                        # Licence Apache 2.0
```

## 🛠️ Environnement de Développement

### Prérequis

- Node.js 18+ et npm
- Un instance Home Assistant locale pour tester
- VS Code (recommandé)

### ⚠️ Utilisateurs WSL/Windows

Si vous utilisez **WSL2 ou PowerShell**, consultez [WSL_WINDOWS.md](WSL_WINDOWS.md) pour les solutions aux problèmes de chemins.

**Recommandation:** Utilisez WSL (terminal Linux natif) plutôt que PowerShell pour éviter les problèmes.

### Installation

```bash
# Cloner le repo via HTTPS (recommandé)
git clone https://github.com/yourusername/custom-room-card.git
cd custom-room-card

# Installer les dépendances
npm install

# Lancer le mode watch (recompile à chaque sauvegarde)
npm run dev

# Build pour production
npm run build
```

**Alternative avec SSH** (si vous avez configuré vos clés GitHub):
```bash
git clone git@github.com:yourusername/custom-room-card.git
cd custom-room-card
npm install
npm run dev
```

## 📚 Dépendances

### Production
- **lit**: Framework Web Components léger (~5KB)
- **home-assistant-js-websocket**: Communication avec Home Assistant

### Développement
- **typescript**: Compilateur TypeScript
- **rollup**: Module bundler
- **prettier**: Formateur de code
- **eslint**: Linter

## 🔧 Extension du Code

### Ajouter une nouvelle propriété

```typescript
// Dans src/custom-room-card.ts

interface CustomRoomCardConfig extends LovelaceCardConfig {
  // Existant...
  box_shadow?: string;  // Nouvelle propriété
}

// Dans la classe
private renderBoxShadow() {
  return this.config.box_shadow ? `box-shadow: ${this.config.box_shadow};` : '';
}

// Dans le render()
<div
  class="room-container"
  style="${this.renderBoxShadow()}"
>
  ...
</div>

// Dans les styles
.room-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Ajouter une action personnalisée

```typescript
handleTapAction(entity: string, tapAction?: any) {
  const action = tapAction?.action || 'toggle';
  
  switch (action) {
    // Actions existantes...
    case 'navigate':
      window.location.href = tapAction.navigation_path;
      break;
    case 'fire_event':
      this.hass.callService('logbook', 'log', {
        name: 'Custom event',
        message: tapAction.event_data,
      });
      break;
  }
}
```

### Améliorer le système de grille

```typescript
private renderAdvancedGrid() {
  const gridSize = this.config.grid_size || 50;
  const lines: any[] = [];

  for (let i = 0; i <= 100; i += gridSize) {
    // Ajouter des labels
    lines.push(
      html`<div class="grid-label" style="left: ${i}%;">${i}%</div>`
    );
  }

  return lines;
}
```

## 🧪 Tester Localement

### Méthode 1: Fichier Local

1. Build le projet: `npm run build`
2. Copiez `dist/custom-room-card.js` dans `/config/www/custom-room-card.js`
3. Ajoutez à `ui-lovelace.yaml`:

```yaml
resources:
  - url: /local/custom-room-card.js
    type: module
```

4. Redémarrez Home Assistant

### Méthode 2: Développement avec HTTP Server

```bash
# Installer http-server globalement
npm install -g http-server

# Dans le répertoire du projet
cd dist
http-server -p 8080

# Puis dans Home Assistant, utilisez
# http://localhost:8080/custom-room-card.js
```

## 🔍 Débogage

### Console Home Assistant

Ouvrez la console du navigateur (F12) et cherchez les logs:

```javascript
// Dans custom-room-card.ts
console.log('Entity state:', this.getEntityState(entity));
console.log('Config:', this.config);
```

### DevTools Home Assistant

Allez à **Developer Tools > Template** pour tester les entités:

```jinja
{{ states('light.livingroom') }}
{{ state_attr('light.livingroom', 'brightness') }}
```

## 📦 Build et Distribution

### Compiler pour Production

```bash
# Build avec minification
npm run build

# Vérifier la taille
du -h dist/custom-room-card.js
```

### Publier sur npm

```bash
npm version patch
npm publish
```

### Publier sur HACS

1. Créez un dépôt GitHub public
2. Poussez le code avec les balises de version
3. Allez sur [HACS GitHub Repository](https://github.com/hacs/default)
4. Ajoutez votre repo via "Custom repositories"

## 🎨 Conventions de Codage

### Nommage

- **Composants**: PascalCase (`CustomRoomCard`)
- **Méthodes**: camelCase (`getEntityState`)
- **Constantes**: UPPER_SNAKE_CASE (`DEFAULT_HEIGHT`)
- **Classes CSS**: kebab-case (`.room-container`)

### Formatage

```bash
# Formater automatiquement
npm run format

# Vérifier les erreurs
npm run lint
```

### Commentaires

```typescript
/**
 * Récupère l'état d'une entité
 * @param entity - ID de l'entité (ex: 'light.bedroom')
 * @returns État de l'entité ou 'unknown'
 */
getEntityState(entity: string): string {
  // ...
}
```

## 🚀 Optimisations

### Performance

```typescript
// ✅ BON: Utiliser @property pour les props réactives
@property({ attribute: false }) hass!: HomeAssistant;

// ✅ BON: Mettre en cache les calculs
private cachedState = new Map();

// ❌ MAUVAIS: Recalculer à chaque render
getEntityState() { return this.hass.states[entity].state; }
```

### Taille du Bundle

- Lit (~5KB gzipped) est déjà très petit
- Évitez d'ajouter de grandes dépendances
- Utilisez le tree-shaking avec rollup

## 🐛 Problèmes Courants

### Erreur: "customElements.define"

```
Uncaught NotSupportedError: Failed to execute 'define' on 'CustomElementRegistry'
```

**Solution**: Vérifiez que le composant n'est pas enregistré deux fois.

### Propriétés non réactives

```typescript
// ❌ MAUVAIS
this.config.title = 'New Title';

// ✅ BON
this.config = { ...this.config, title: 'New Title' };
```

### Styles CSS non appliqués

Assurez-vous que les variables CSS sont correctement définies:

```typescript
static get styles() {
  return css`
    :host {
      --primary-color: var(--primary-text-color);
    }
  `;
}
```

## 📖 Ressources

- [Documentation Lit](https://lit.dev/)
- [Home Assistant Custom Card API](https://developers.home-assistant.io/docs/custom_component)
- [HACS Documentation](https://hacs.xyz/docs/publish/)
- [Material Design Icons](https://materialdesignicons.com/)

## 🤝 Contribution

Les PRs sont les bienvenues! Veuillez:

1. Forker le repo
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📝 Checklist avant Publication

- [ ] Tests locaux réussis
- [ ] Build sans erreurs: `npm run build`
- [ ] Pas de linting errors: `npm run lint`
- [ ] Documentation mise à jour
- [ ] Version bump: `npm version patch`
- [ ] Tag git créé: `git tag v1.0.0`
- [ ] Push avec tags: `git push origin main --tags`
- [ ] Manifest.json mis à jour

## 📄 Licence

Apache License 2.0
