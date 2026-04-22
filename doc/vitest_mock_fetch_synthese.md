# Mocker `fetch` avec `vi.fn()` dans Vitest

## Docs officielles utiles
- [vi.fn() — Vitest](https://vitest.dev/api/vi#vi-fn)
- [mockResolvedValue — Vitest](https://vitest.dev/api/mock#mockresolvedvalue)
- [Testing async code — Vitest](https://vitest.dev/guide/async)

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
- Utiliser `async/await` dans les `it` pour tester des fonctions asynchrones
- Pour tester qu'une erreur est lancée : `await expect(maFonction()).rejects.toThrow('message')`
