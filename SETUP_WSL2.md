# 🛠️ Setup pour Développeurs - WSL2 Debian

## ✨ Quick Start (2 minutes)

```bash
# 1. Cloner le repo
git clone https://github.com/DNeoTeo/custom-room-card.git
cd custom-room-card

# 2. Installer les dépendances
npm install

# 3. Compiler
npm run build

# 4. ✅ Fichier prêt: dist/custom-room-card.js
```

## 📋 Prérequis WSL2

### Node.js 18+ dans WSL2 Debian

**Installer via nvm (recommandé):**

```bash
# 1. Installer nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# 2. Installer Node.js 18
nvm install 18
nvm use 18

# 3. Vérifier
node --version  # v18.x.x
npm --version   # 10.x.x
```

### Alternative: apt (plus simple)

```bash
sudo apt update
sudo apt install -y nodejs npm
```

## 🔨 Scripts Disponibles

```bash
npm run build          # Compiler TypeScript → dist/custom-room-card.js
npm run build:watch    # Compiler en mode watch (recompile automatiquement)
npm run dev           # Build + watch (développement continu)
```

## ✅ Validation HACS

```bash
# Vérifier la conformité HACS
bash validate-hacs.sh
```

**Résultat attendu:**
```
✅ Validation HACS du Custom Room Card
✅ hacs.json
✅ manifest.json
✅ README.md
✅ LICENSE
✅ src/custom-room-card.ts
✅ dist/custom-room-card.js
✅ Validation HACS réussie!
```

## 🐳 Docker (optionnel)

Pour tester la validation HACS en container:

```bash
# Build le container
docker build -t custom-room-card-validator .

# Valider
docker run --rm -v $(pwd):/workspace custom-room-card-validator
```

## 📦 Fichiers Clés

| Fichier | Description |
|---------|-------------|
| `src/custom-room-card.ts` | Source TypeScript |
| `dist/custom-room-card.js` | Compilé (généré par npm run build) |
| `hacs.json` | Configuration HACS |
| `manifest.json` | Métadonnées du package |
| `tsconfig.json` | Configuration TypeScript |
| `package.json` | Dépendances et scripts npm |

## 🔧 Troubleshooting

### "npm: command not found"
→ Installer Node.js avec nvm (voir prérequis)

### "tsc: command not found"
→ Relancer `npm install`

### Build échoue avec erreurs TypeScript
→ Vérifier: `npm run build` affiche les erreurs précises

### Chemin UNC errors (\\wsl.localhost\...)
→ ❌ RÉSOLU: Utilisez Node.js natif WSL2 (nvm ou apt)

## 📝 Workflow Développement

1. Modifier `src/custom-room-card.ts`
2. `npm run build` compile en `dist/custom-room-card.js`
3. Copier `dist/custom-room-card.js` dans Home Assistant
4. Redémarrer HA ou F5 pour rafraîchir

Pour développement continu:
```bash
npm run dev  # Auto-recompile à chaque modification
```

## 🚀 Déploiement

1. Tester avec `bash validate-hacs.sh`
2. Committer: `git add . && git commit -m "Fix: ..."`
3. Pusher: `git push origin master`
4. Créer une PR ou release sur GitHub
5. HACS récupère automatiquement

---

**✅ Prêt à développer!** 🎉
