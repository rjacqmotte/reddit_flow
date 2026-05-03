# Mocker `fetch` avec `vi.fn()` dans Vitest

## Docs officielles utiles
- [vi.fn() — Vitest](https://vitest.dev/api/vi#vi-fn)
- [mockResolvedValue — Vitest](https://vitest.dev/api/mock#mockresolvedvalue)
- [Testing async code — Vitest](https://vitest.dev/guide/async)

---

## Concept clé : `vi.fn()` crée une fausse fonction

Dans la doc Vitest, l'exemple de base montre :

```js
const getApples = vi.fn()
getApples.mockReturnValue(10)
expect(getApples()).toBe(10)
```

Ici `getApples` n'est **pas une vraie fonction** — elle est créée de zéro par `vi.fn()` juste pour illustrer le mécanisme. C'est un exemple pédagogique isolé.

Dans la vraie vie, `vi.fn()` sert surtout à **remplacer une fonction qui existe déjà** par une fausse version que tu contrôles.

---

## Concept clé : on peut réassigner n'importe quelle fonction, même les globals

C'est une découverte importante : **en JavaScript, une fonction n'est qu'une valeur assignée à une variable**. On peut donc la réassigner.

```js
// Une fonction normale
let maFonction = () => 'vrai résultat'

// On la remplace par une fausse
maFonction = vi.fn().mockReturnValue('faux résultat')

maFonction() // → 'faux résultat'
```

Cela fonctionne aussi avec les **fonctions globales du navigateur** comme `fetch`, `setTimeout`, `localStorage`, etc.

`fetch` est accessible partout sans import — c'est une propriété de l'objet global. Dans Node.js (l'environnement de Vitest), cet objet global s'appelle `global` :

```js
global.fetch = vi.fn().mockResolvedValue({...})
// équivalent à écraser la variable `fetch` globalement
```

Pourquoi écrire `global.fetch` et pas juste `fetch = ...` ? En modules ES (fichiers `.js`/`.jsx`), JavaScript en mode strict interdit de réassigner un global sans le qualifier explicitement. `global.fetch =` dit clairement "je modifie intentionnellement le global".

---

## Comprendre le problème (vision méta)

Quand tu testes une fonction qui appelle `fetch`, tu as un problème :
> `fetch` contacte **vraiment** le réseau → résultat imprévisible, lent, et impossible à contrôler.

L'idée du mock : **remplacer `fetch`** par une fausse fonction que **toi** tu contrôles.
Tu décides ce qu'elle retourne, sans aucun appel réseau réel.

### Ce que retourne `fetch` (la vraie chaîne de promesses)

```
fetch(url)
  └─ retourne une Promise<Response>
       └─ Response.json()
            └─ retourne une Promise<data>
```

C'est cette double promesse qui rend le mock un peu particulier.
Il faut mocker les **deux niveaux**.

---

## La syntaxe clé

```js
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue({ /* tes fausses données */ })
})
```

- `global.fetch = vi.fn()` → remplace fetch globalement par une fausse fonction
- `.mockResolvedValue({ ok: true, json: ... })` → simule l'objet `Response`
- `json: vi.fn().mockResolvedValue({...})` → simule l'appel `.json()` et ses données

---

## Exemple complet

Supposons cette fonction à tester :

```js
// monService.js
export async function fetchPopular() {
  const response = await fetch('https://www.reddit.com/r/popular.json');
  if (!response.ok) {
    throw new Error(`Erreur réseau: ${response.status}`);
  }
  const fetchData = await response.json();
  if (fetchData.error) {
    throw new Error(`Reddit: ${fetchData.error}`);
  }
  if (fetchData.data?.children) {
    return fetchData.data.children;
  }
}
```

### Le fichier de test

```js
// monService.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPopular } from './monService';

// Données fictives qui imitent la structure Reddit
const mockArticles = [
  { kind: 't3', data: { title: 'Article 1', author: 'user1' } },
  { kind: 't3', data: { title: 'Article 2', author: 'user2' } },
];

const mockRedditResponse = {
  data: {
    children: mockArticles,
  },
};

// Réinitialiser les mocks avant chaque test
beforeEach(() => {
  vi.resetAllMocks();
});

describe('fetchPopular', () => {

  // --- CAS 1 : succès ---
  it('retourne un tableau d\'articles en cas de succès', async () => {
    // ARRANGE : on prépare le faux fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockRedditResponse),
    });

    // ACT : on appelle la vraie fonction
    const result = await fetchPopular();

    // ASSERT : on vérifie le résultat
    expect(result).toEqual(mockArticles);
  });

  // --- CAS 2 : erreur HTTP (ex: 404, 500) ---
  it('lance une erreur en cas d\'erreur HTTP', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(fetchPopular()).rejects.toThrow('Erreur réseau: 500');
  });

  // --- CAS 3 : erreur réseau (coupure, timeout) ---
  it('lance une erreur en cas de coupure réseau', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'));

    await expect(fetchPopular()).rejects.toThrow('Network Error');
  });

  // --- CAS 4 : erreur logique Reddit ---
  it('lance une erreur si Reddit retourne une erreur applicative', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ error: 403, message: 'Forbidden' }),
    });

    await expect(fetchPopular()).rejects.toThrow('Reddit: 403');
  });

});
```

---

## Les différences clés à retenir

| Situation | Méthode mock | Ce que ça simule |
|---|---|---|
| Succès | `mockResolvedValue(data)` | La promesse se résout avec `data` |
| Erreur réseau | `mockRejectedValue(new Error(...))` | La promesse est rejetée (réseau coupé) |
| Erreur HTTP | `mockResolvedValue({ ok: false })` | Le serveur répond mais avec un code d'erreur |

> **Attention** : erreur réseau ≠ erreur HTTP !
> - Erreur réseau → `fetch` rejette la promesse (pas de réponse du tout)
> - Erreur HTTP → `fetch` **réussit** mais `response.ok === false`

---

## Bonnes pratiques

- Toujours appeler `vi.resetAllMocks()` dans un `beforeEach` pour ne pas polluer entre les tests
  - Sans ça, le `mockResolvedValue()` défini dans un `it` reste actif pour les `it` suivants
  - Ex : le CAS 1 (succès) tourne avant le CAS 4 (erreur Reddit) → sans reset, `fetch` retourne encore les articles valides et le CAS 4 ne teste plus rien
  - `vi.resetAllMocks()` remet chaque `vi.fn()` à vide : plus de comportement défini, compteur d'appels remis à 0
- Utiliser `async/await` dans les `it` pour tester des fonctions asynchrones
- Pour tester qu'une erreur est lancée : `await expect(maFonction()).rejects.toThrow('message')`

---

## Nuance : `resetAllMocks` vs `restoreAllMocks`

Avec `global.fetch = vi.fn()`, tu **réassignes** directement le global. Dans ce cas :

- `vi.resetAllMocks()` → efface les `mockResolvedValue` définis, remet le `vi.fn()` à vide
- `vi.restoreAllMocks()` → ne restaure **pas** la vraie `fetch` (ça ne fonctionne qu'avec `vi.spyOn()`)

En pratique, ce n'est pas un problème : comme tu redéfinis `global.fetch = vi.fn().mockResolvedValue(...)` dans chaque `it`, chaque test repart d'un mock frais et contrôlé.

Si tu voulais restaurer automatiquement la vraie `fetch`, il faudrait utiliser `vi.spyOn(global, 'fetch')` à la place — mais c'est une étape suivante.

---

## `vi.spyOn()` — mocker une fonction exportée d'un module

### Le problème avec `vi.fn()` sur un import

Les imports ES modules sont **en lecture seule**. On ne peut pas les réassigner directement :

```js
import { fetchPopular } from '../../services/redditServices';

fetchPopular = vi.fn(); // ❌ TypeError: Cannot set property ... has only a getter
```

### La solution : `vi.spyOn()`

On importe le **module entier** (un objet), puis on espionne une de ses propriétés :

```js
import * as redditServices from '../../services/redditServices';
// redditServices = { fetchPopular: [Function], fetchSearch: [Function], ... }

vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);
// Vitest remplace redditServices.fetchPopular par un mock contrôlable
// La référence originale est sauvegardée pour pouvoir être restaurée
```

### Ce que fait `vi.spyOn()` en détail

1. Il va dans l'objet `redditServices`
2. Il trouve la propriété `'fetchPopular'`
3. Il la **remplace** par une mock function (en gardant l'originale en mémoire)
4. Il retourne cette mock function pour pouvoir chaîner `.mockResolvedValue()` etc.

Quand le composant testé appelle `fetchPopular()`, il tombe sur le mock — sans le savoir — parce que les deux (composant et test) partagent le même objet module.

### Restaurer l'original

Contrairement à `global.fetch = vi.fn()`, `vi.spyOn()` sait restaurer l'original :

```js
afterEach(() => {
  vi.restoreAllMocks(); // remet la vraie fetchPopular en place
});
```

---

## Tester un `useEffect` qui fetche au montage

### Le contexte

Un composant qui fetch dans un `useEffect` :

```jsx
// Articles.jsx
export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await fetchPopular(); // appel au service
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  return (/* ... */);
};
```

### Les deux différences par rapport à un test ordinaire

**1. Mocker le service avant le render**

```js
import * as redditServices from '../../services/redditServices';

vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);
render(<Articles />);
```

**2. Attendre que le DOM soit mis à jour**

Le `useEffect` est asynchrone : au moment du `render()`, le fetch n'est pas encore terminé. Les éléments n'existent pas encore dans le DOM.

- `getBy*` → cherche **immédiatement**, échoue si rien n'est là
- `findBy*` → attend (polling) que l'élément apparaisse, jusqu'à un timeout

```js
// ❌ trop tôt, le fetch n'est pas fini
const headings = screen.getAllByRole('heading');

// ✅ attend que les cards soient rendues
const headings = await screen.findAllByRole('heading');
```

Le `it` doit être `async`, et `await` doit être sur le `findBy*`.

### Exemple complet

```jsx
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import * as redditServices from '../../services/redditServices';
import { mockRealRedditArticles } from '../../mock/mockRealRedditArticles';
import { Articles } from './Articles';

const mockArticles = mockRealRedditArticles.data.children;

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Articles', () => {
  it('renders one card per article', async () => {
    vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);

    render(<Articles />);

    const headings = await screen.findAllByRole('heading'); // attend le fetch
    expect(headings).toHaveLength(mockArticles.length);
  });

  it('renders the title of every article', async () => {
    vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);

    render(<Articles />);

    // for...of et non .map() : voir note ci-dessous
    for (const article of mockArticles) {
      expect(await screen.findByText(article.data.title)).toBeInTheDocument();
    }
  });
});
```

### Résumé du flux

```
render(<Articles />)
  ↓ useEffect déclenché après le premier render
  ↓ fetchPopular() appelé → tombe sur le mock → retourne Promise.resolve(mockArticles)
  ↓ setArticles(mockArticles) → re-render
  ↓ les <Card> apparaissent dans le DOM
findAllByRole('heading') → les trouve ✅
```

---

### Pourquoi `for...of` et pas `.map()` avec `await`

**`.map()` ne comprend pas les promesses.** Si tu mets `async/await` dans un `.map()`, il lance toutes les opérations **en parallèle sans en attendre aucune** et retourne immédiatement un tableau de promesses non résolues. Le test continue avant que quoi que ce soit soit terminé.

```js
// ❌ le map ne s'attend pas lui-même
mockArticles.map(async (article) => {
  expect(await screen.findByText(article.data.title)).toBeInTheDocument();
  // → le test se termine avant que findByText se résolve
});
```

**`for...of` respecte vraiment `await`** : il attend que chaque itération soit terminée avant de passer à la suivante.

```js
// ✅ chaque findByText est attendu l'un après l'autre
for (const article of mockArticles) {
  expect(await screen.findByText(article.data.title)).toBeInTheDocument();
}
```

**Règle simple :** dès que tu veux `await` à l'intérieur d'une itération → utilise `for...of`. Garde `.map()` pour les transformations synchrones.

> **Alternative valide si tu veux garder `.map()`** :
> ```js
> await Promise.all(mockArticles.map(async (article) => {
>   expect(await screen.findByText(article.data.title)).toBeInTheDocument();
> }));
> ```
> `Promise.all()` attend que **toutes** les promesses soient résolues. Ça marche, mais c'est plus verbeux et toutes les assertions tournent en parallèle.
