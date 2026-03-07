setup.sh
#!/bin/bash

# Script d'installation rapide pour Custom Room Card

echo "🚀 Installation de Custom Room Card"
echo ""

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Visitez https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js détecté: $(node --version)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances npm..."
npm install

# Builder le projet
echo ""
echo "🔨 Compilation TypeScript..."
npm run build

echo ""
echo "✅ Installation terminée!"
echo ""
echo "📖 Prochaines étapes:"
echo "1. Créez un dépôt GitHub"
echo "2. Poussez le code: git push origin main"
echo "3. Créez un tag: git tag v1.0.0 && git push origin v1.0.0"
echo "4. Ajoutez à HACS via custom repositories"
echo ""
echo "Pour plus d'info: consultez QUICKSTART.md"
