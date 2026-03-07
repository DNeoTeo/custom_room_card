#!/bin/bash

# Script de compilation TypeScript - contourne les problèmes WSL/Windows

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔨 Compilation TypeScript...${NC}"

# Vérifier que TypeScript est installé
if ! [ -f "node_modules/typescript/bin/tsc" ]; then
    echo -e "${RED}❌ TypeScript non installé${NC}"
    echo "Exécutez: npm install"
    exit 1
fi

# Créer le dossier dist s'il n'existe pas
mkdir -p dist

# Compiler avec outDir explicite
node node_modules/typescript/bin/tsc \
    --target ES2020 \
    --module ES2020 \
    --declaration \
    --sourceMap \
    --outDir ./dist \
    --rootDir ./src \
    src/custom-room-card.ts 2>&1

# Vérifier le résultat
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Compilation réussie!${NC}"
    echo -e "${GREEN}   Fichier généré: dist/custom-room-card.js${NC}"
    
    # Afficher la taille du fichier
    if [ -f "dist/custom-room-card.js" ]; then
        SIZE=$(du -h dist/custom-room-card.js | cut -f1)
        echo -e "${GREEN}   Taille: $SIZE${NC}"
    fi
    exit 0
else
    echo -e "${RED}❌ Erreur de compilation${NC}"
    exit 1
fi
