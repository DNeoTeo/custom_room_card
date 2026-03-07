# 🔐 Configuration Git - HTTPS vs SSH

## 🚀 Démarrage Rapide

### Pour les Débutants (HTTPS)
```bash
# Pas besoin de configuration préalable
git clone https://github.com/yourusername/custom-room-card.git
```

**Avantages:**
- ✅ Aucune configuration requise
- ✅ Fonctionne partout (WSL, Mac, Linux, Windows)
- ✅ Simple et rapide

**Inconvénients:**
- ❌ Doit entrer le mot de passe/token à chaque push

---

## 🔑 Configuration SSH (Optionnel)

SSH est plus sécurisé et évite de taper votre mot de passe à chaque fois.

### Étape 1: Générer une Clé SSH

```bash
# Générer une nouvelle clé (si vous n'en avez pas)
ssh-keygen -t ed25519 -C "votre.email@example.com"

# Appuyez sur Enter pour accepter le chemin par défaut
# Puis entrez une passphrase (ou appuyez sur Enter pour aucune)
```

### Étape 2: Ajouter la Clé à GitHub

**Sur macOS/Linux:**
```bash
# Copier la clé publique
cat ~/.ssh/id_ed25519.pub | pbcopy  # macOS
cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard  # Linux
```

**Sur Windows (ou avec WSL):**
```bash
# Copier manuellement le contenu de
cat ~/.ssh/id_ed25519.pub
```

**Sur GitHub:**
1. Allez à https://github.com/settings/keys
2. Cliquez "New SSH key"
3. Collez votre clé publique
4. Cliquez "Add SSH key"

### Étape 3: Tester la Connexion

```bash
ssh -T git@github.com
```

Vous devriez voir:
```
Hi yourusername! You've successfully authenticated...
```

### Étape 4: Cloner avec SSH

```bash
git clone git@github.com:yourusername/custom-room-card.git
cd custom-room-card
npm install
npm run dev
```

---

## 🔄 Passer de HTTPS à SSH

Si vous avez déjà cloné avec HTTPS et voulez utiliser SSH:

```bash
# Changer l'URL remote
git remote set-url origin git@github.com:yourusername/custom-room-card.git

# Vérifier
git remote -v
# Devrait afficher: origin  git@github.com:yourusername/custom-room-card.git
```

---

## 🚨 Problèmes Courants

### "Permission denied (publickey)"

**Causes:**
1. SSH key non ajoutée à GitHub
2. Wrong SSH key path
3. Agent SSH non démarré

**Solutions:**

```bash
# Vérifier que l'agent SSH est actif
eval "$(ssh-agent -s)"

# Ajouter la clé à l'agent
ssh-add ~/.ssh/id_ed25519

# Tester la connexion
ssh -T git@github.com
```

### "Could not read from remote repository"

**Solutions:**
1. Utilisez HTTPS temporairement:
   ```bash
   git remote set-url origin https://github.com/yourusername/custom-room-card.git
   ```

2. Ou configurez SSH correctement (voir ci-dessus)

### WSL: "SSH not working"

```bash
# Sur WSL, généralement SSH fonctionne, mais essayez:
ssh-keygen -t ed25519 -C "votre.email@example.com"

# Puis ajoutez à GitHub comme ci-dessus
```

---

## 💾 Utiliser un Token Personnel (Alternative)

Si SSH pose problème, vous pouvez utiliser un Personal Access Token avec HTTPS:

1. Allez à https://github.com/settings/tokens
2. Créez un nouveau token avec la permission `repo`
3. Copiez le token
4. Clonez avec:
   ```bash
   git clone https://TOKEN@github.com/yourusername/custom-room-card.git
   ```

---

## 📚 Ressources

- [GitHub SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub Personal Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Git Configuration](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

---

## ✅ Checklist

- [ ] Avez-vous un compte GitHub?
- [ ] Avez-vous créé le dépôt `custom-room-card`?
- [ ] Vous avez choisi HTTPS ou SSH?
- [ ] Vous pouvez cloner le repo?
- [ ] `npm install` fonctionne?
- [ ] `npm run build` fonctionne?

Une fois tout configuré, vous êtes prêt à développer! 🚀
