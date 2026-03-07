# 🪟 Guide WSL2 & Windows

## ⚠️ Problème Connu: Compilation TypeScript sur WSL

Si vous utilisez **WSL (Windows Subsystem for Linux)** et obtenez l'erreur:
```
'\\wsl.localhost\Debian\home...'
CMD.EXE a été démarré...
Les chemins d'accès UNC ne sont pas prise en charge.
```

**Cause:** WSL2 utilise des chemins UNC (`\\wsl.localhost\...`) que les outils Windows ne supportent pas directement.

## ✅ Solutions

### Solution 1: Utiliser PowerShell avec WSL

```powershell
# Ouvrez PowerShell et naviguez vers le dossier:
cd C:\Utilisateurs\votre_username\Projects\custom-room-card

# Installez les dépendances
npm install

# Le fichier custom-room-card.js est déjà compilé et prêt
# Vous n'avez pas besoin de recompiler
```

### Solution 2: Compiler Directement dans WSL (Recommandé)

```bash
# Dans WSL (terminal WSL, pas PowerShell)
cd ~/custom_room_card

# Les dépendances
npm install

# Le fichier est déjà compilé!
ls -la dist/custom-room-card.js
```

### Solution 3: Utiliser VS Code avec WSL Extension

1. Installez l'extension "Remote - WSL"
2. Cliquez le coin vert en bas à gauche
3. Sélectionnez "Open Folder in WSL"
4. Naviguez vers `/home/username/custom_room_card`
5. Ouvrez le terminal intégré (qui sera WSL)
6. Commandes npm fonctionneront correctement

## 📁 Structure de Dossiers

### Depuis Windows (PowerShell):
```
C:\Utilisateurs\votre_username\
└── wsl$\Debian\home\username\custom_room_card\
```

### Depuis WSL (Terminal Linux):
```
/home/username/
└── custom_room_card/
```

## 🔧 Modification et Compilation

### Le fichier est déjà compilé!

Le fichier `dist/custom-room-card.js` est fourni compilé et prêt à l'emploi. 

**Si vous modifiez le TypeScript:**

```bash
# Dans WSL, installez TypeScript globalement (optionnel)
npm install -g typescript

# Puis compilez:
tsc

# Ou depuis le dossier du projet:
npx tsc
```

## 🚀 Recommandation

**Développement sur WSL:**
```bash
# Terminal WSL (recommandé)
wsl
cd ~/custom_room_card
npm install
# Éditez les fichiers
# Utilisez VS Code Remote WSL pour éditer
```

**Test dans Home Assistant:**
```bash
# Le fichier dist/custom-room-card.js est prêt
# Copiez-le directement dans Home Assistant:
# /config/www/custom-room-card.js
```

## 💾 Fichiers Importants

| Fichier | Local (WSL) | Windows (PowerShell) |
|---------|-------------|-------------------|
| Code source | `~/custom_room_card/src/` | `\\wsl.localhost\Debian\home\...\src\` |
| Compilation | `~/custom_room_card/dist/` | `\\wsl.localhost\Debian\home\...\dist\` |
| Résultat final | `custom-room-card.js` | `custom-room-card.js` (prêt à l'emploi) |

## 🐛 Dépannage

### "npm command not found" dans WSL

```bash
# Installer Node.js et npm dans WSL:
sudo apt update
sudo apt install nodejs npm
```

### Fichiers non à jour après modification

```bash
# Dans WSL:
npx tsc

# Vérifiez que le fichier est mis à jour:
ls -la dist/custom-room-card.js
```

### VS Code ne reconnaît pas WSL

```bash
# Installez l'extension "Remote - WSL"
# https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl
```

## 📚 Ressources

- [WSL Documentation](https://learn.microsoft.com/en-us/windows/wsl/)
- [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
- [WSL2 Best Practices](https://learn.microsoft.com/en-us/windows/wsl/setup/environment)

---

**Conseil:** Le fichier `dist/custom-room-card.js` est déjà compilé. Vous pouvez l'utiliser directement! ✅
