# Installer un environnement de test : Vitest et React Testing Library

## Vue d'ensemble

Tester une application React avec Vite nécessite plusieurs outils qui jouent chacun un rôle précis. Ils ne font pas la même chose et se complètent.

```
Vitest          → exécute les tests
jsdom           → simule un navigateur (DOM)
@testing-library/react    → rend et interagit avec les composants
@testing-library/jest-dom → enrichit les vérifications
```

---

## Les packages à installer

Tous sont des **dépendances de développement** (`-D`) : ils ne sont pas embarqués dans le build de production.

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

### À quoi sert chaque package ?

| Package | Rôle | Nécessaire ? |
|---|---|---|
| `vitest` | Le *test runner* : trouve, exécute les tests et affiche les résultats | Oui |
| `jsdom` | Simule un navigateur en mémoire (Node.js ne connaît pas le DOM) | Oui |
| `@testing-library/react` | Rend un composant React et permet d'interagir avec lui | Oui |
| `@testing-library/jest-dom` | Ajoute des *matchers* expressifs pour vérifier l'état du DOM | Recommandé |

> **Pourquoi jsdom ?** Tes tests s'exécutent dans Node.js, pas dans un vrai navigateur. Node.js ne sait pas ce qu'est un `document` ou un `button`. `jsdom` crée un faux navigateur en mémoire pour que tes composants aient un endroit où s'afficher.

---

## Configuration

### 1. `vite.config.js`

C'est le fichier de configuration central de Vite. On y ajoute un bloc `test` pour configurer Vitest. **Attention** : les options Vitest doivent être dans ce bloc `test`, pas au même niveau que `plugins`.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',      // simule un navigateur avec jsdom
    globals: true,             // rend describe, it, expect disponibles sans import
    setupFiles: ['./vitest-setup.js'], // fichier exécuté avant chaque test
  },
})
```

### 2. `vitest-setup.js` (à la racine du projet)

Ce fichier s'exécute **automatiquement avant chaque fichier de test**. Il sert à initialiser des choses une seule fois pour tous les tests. Ici, on y importe `jest-dom` pour que ses matchers soient disponibles partout.

```js
import '@testing-library/jest-dom';
```

> Sans ce fichier et son import, les matchers comme `toBeInTheDocument()` ne seraient pas reconnus.

---

## Ajouter un script dans `package.json`

Pense à ajouter une commande pour lancer les tests facilement :

```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",       // interface graphique (optionnel)
  "test:run": "vitest run"        // exécute une seule fois sans watcher
}
```

Par défaut, `vitest` tourne en mode **watch** : il surveille les fichiers et relance les tests à chaque sauvegarde.

---

## Nommer et placer ses fichiers de test

Vitest détecte automatiquement les fichiers de test selon ces conventions :

- `MonComposant.test.jsx`
- `MonComposant.spec.jsx`
- Fichiers dans un dossier `__tests__/`

**Convention courante** : placer le fichier de test à côté du composant testé.

```
components/
  Card/
    Card.jsx
    Card.test.jsx   ← ici
```

---

## Structure d'un test (aperçu)

```jsx
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('affiche le titre', () => {
    render(<Card title="Mon titre" />);
    expect(screen.getByText('Mon titre')).toBeInTheDocument();
  });
});
```

- `describe` — groupe des tests liés à un même sujet
- `it` (ou `test`) — un test individuel
- `render` — rend le composant dans le faux DOM (jsdom)
- `screen` — permet de chercher des éléments dans le DOM rendu
- `expect(...).toBeInTheDocument()` — vérifie que l'élément est présent (matcher de `jest-dom`)

---

## Ce qu'il faut retenir

- Vitest et Vite partagent le même fichier de config, mais les options Vitest vont dans `test: {}`
- `jsdom` est indispensable pour tester des composants qui utilisent le DOM
- `vitest-setup.js` est un fichier d'initialisation global, pas un fichier de test
- `@testing-library/react` encourage à tester **ce que l'utilisateur voit**, pas les détails d'implémentation
