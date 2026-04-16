# Les bases des tests avec React Testing Library

> **Philosophie centrale :** tester ce que l'utilisateur *voit et fait*, pas les détails internes du code.
> Tu ne testes pas les props ni le state directement — tu testes leurs *effets visibles*.

---

## Structure d'un fichier de test

```jsx
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {

  it('renders the title', () => {
    render(<Card title="Mon titre" body="Un texte" imageUrl="/photo.png" />);
    expect(screen.getByText('Mon titre')).toBeInTheDocument();
  });

});
```

### Les 4 blocs fondamentaux

| Bloc | Rôle |
|---|---|
| `describe('Card', () => {})` | Groupe des tests liés à un même composant ou sujet |
| `it('fait quelque chose', () => {})` | Un test individuel. `test()` est un alias identique |
| `render(<Card ... />)` | Rend le composant dans le faux DOM (jsdom) |
| `expect(...).toBeInTheDocument()` | Vérifie une condition |

---

## `screen` — comment trouver des éléments

`screen` représente ce qui est affiché à l'écran. C'est via lui qu'on accède aux éléments du DOM.

### Les requêtes principales

```jsx
screen.getByText('Mon titre')        // cherche par texte visible
screen.getByRole('button')           // cherche par rôle ARIA
screen.getByRole('img')              // une image
screen.getByRole('heading')          // un h1, h2, h3...
screen.getByLabelText('Email')       // cherche un input par son label
screen.getByPlaceholderText('...')   // cherche par placeholder
```

### `getBy` vs `queryBy` vs `findBy`

| Requête | Retourne | Si absent | Quand l'utiliser |
|---|---|---|---|
| `getBy...` | l'élément | **lève une erreur** | quand tu *attends* sa présence |
| `queryBy...` | l'élément ou `null` | `null` (pas d'erreur) | quand tu *attends* son absence |
| `findBy...` | une Promise | erreur après timeout | quand l'élément apparaît de façon **async** |

### Exemple concret avec Card

```jsx
// ✅ L'image DOIT être là → getBy
expect(screen.getByRole('img')).toBeInTheDocument();

// ✅ L'image NE DOIT PAS être là → queryBy
expect(screen.queryByRole('img')).not.toBeInTheDocument();
```

> **Règle simple :** si tu utilises `expect(...).not`, tu as besoin de `queryBy`.

---

## Les matchers `jest-dom`

Ce sont les `.toBe...()` qui viennent de `@testing-library/jest-dom`.

```jsx
expect(element).toBeInTheDocument()      // est présent dans le DOM
expect(element).not.toBeInTheDocument()  // est absent du DOM
expect(element).toBeVisible()            // est visible pour l'utilisateur
expect(element).toHaveTextContent('Lire')// contient ce texte
expect(element).toBeDisabled()           // est désactivé (input, button...)
expect(element).toHaveAttribute('src', '/photo.png') // a cet attribut
```

---

## Exemple complet : le composant `Card`

```jsx
// Card.jsx — ce que le composant fait :
// - affiche un titre (h2)
// - affiche une image si imageUrl est fourni
// - affiche un body (p)
// - affiche un bouton "Read Article" si le contenu déborde (overflow)
```

### Les tests écrits

```jsx
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {

  // ✅ TEST 1 — rendu de base
  it('renders Card component', () => {
    render(<Card title="title" body="body" imageUrl="/photo.png" />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('body')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  // ✅ TEST 2 — comportement conditionnel (absence)
  it('does not render image if imageUrl is empty', () => {
    render(<Card title="title" body="body" imageUrl="" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  // ⚠️ TEST 3 — NON TESTABLE avec jsdom (voir note ci-dessous)
  // it('displays overflow button if content overflows', () => { ... });

});
```

---

## Limite importante : jsdom et les dimensions

`jsdom` simule un DOM en mémoire **sans moteur de rendu visuel**. Il ne calcule pas :
- `scrollHeight`, `clientHeight`, `offsetWidth`, etc.
- Les positions CSS, le layout, le scroll

Ces valeurs valent toujours `0` dans jsdom.

**Conséquence :** tout comportement conditionnel basé sur des dimensions (ex: détecter un overflow) **ne peut pas être testé avec jsdom**.

| Situation | Solution |
|---|---|
| Logique basée sur les dimensions | Mocker `scrollHeight`/`clientHeight` manuellement (avancé) |
| Comportement visuel complexe | Tests E2E avec Playwright ou Cypress (vrai navigateur) |

---

## Bonnes pratiques

**Nommer ses tests clairement**
Le nom du `it()` doit se lire comme une phrase : *"it renders the title"*, *"it does not show image if no URL"*.

**Toujours utiliser `expect()` explicitement**
```jsx
// ❌ Fonctionne mais peu lisible
screen.getByText('titre');

// ✅ Clair et idiomatique
expect(screen.getByText('titre')).toBeInTheDocument();
```

**Une assertion par comportement**
Un `it()` = un comportement vérifié. Évite les tests qui testent 5 choses à la fois.

**Ne pas tester les détails d'implémentation**
```jsx
// ❌ Trop couplé au code interne
expect(component.state.hasOverflow).toBe(true);

// ✅ On teste l'effet visible
expect(screen.getByRole('button', { name: 'Read Article' })).toBeInTheDocument();
```

**Placer le fichier de test à côté du composant**
```
Card/
  Card.jsx
  Card.test.jsx   ← ici, pas dans un dossier séparé
```

---

## Rappel de la structure du projet de test

```
vite.config.js          ← bloc test: { environment, globals, setupFiles }
vitest-setup.js         ← import '@testing-library/jest-dom'
src/
  components/
    Card/
      Card.jsx
      Card.test.jsx     ← fichier de test
```

---

## Commandes utiles

```bash
npm test              # lance vitest en mode watch (relance à chaque sauvegarde)
npm run test:run      # exécute les tests une seule fois
```

Dans le terminal vitest :
- `h` → affiche l'aide
- `q` → quitte
- `u` → met à jour les snapshots
