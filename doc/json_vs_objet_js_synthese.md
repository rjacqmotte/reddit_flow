# JSON vs Objet JS littéral — subtilité fondamentale

## Le problème

Quand on colle du contenu récupéré depuis une API REST dans un fichier `.js`,
il peut sembler qu'on travaille avec du "JSON". En réalité, le format dépend
de comment on l'écrit.

---

## Deux formats visuellement similaires, mais fondamentalement différents

### 1. String JSON (texte brut)

```js
const data = '{"kind":"Listing","data":{"children":[]}}';
//            ↑                                        ↑
//       guillemets → c'est une STRING, pas un objet
```

- C'est ce que **le navigateur reçoit** quand il appelle une URL `.json`
- C'est ce que **`fetch()`** reçoit dans `response`
- Le moteur JS n'y voit qu'une suite de caractères
- Pour l'utiliser, il faut la **parser** : `JSON.parse(data)`

---

### 2. Objet JS littéral

```js
const data = {"kind":"Listing","data":{"children":[]}};
//           ↑ pas de guillemets autour → c'est du CODE JS
```

- C'est ce qu'on écrit dans un fichier `.js`
- Le moteur JS l'**exécute** au moment de l'import → crée un vrai objet en mémoire
- Directement utilisable, **pas besoin de `JSON.parse()`**

---

## Ce que fait `response.json()`

```
fetch() reçoit :     '{"kind":"Listing",...}'   ← string (texte brut réseau)
après .json() :       { kind: "Listing", ... }  ← objet JS (parsé)
```

`response.json()` est l'équivalent de `JSON.parse(await response.text())`.
Elle est **nécessaire** parce que `fetch` reçoit du texte, pas un objet.

---

## Application dans les mocks de test

Dans `mockRealRedditArticles.js`, les données sont exportées comme objet JS littéral :

```js
export const mockRealRedditArticles = { "kind": "Listing", ... };
//                                    ↑ objet JS, pas une string
```

C'est le bon format pour mocker `response.json()` dans les tests :

```js
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue(mockRealRedditArticles), // ✅ objet JS, comme le vrai .json()
});
```

Si `mockRealRedditArticles` était une string JSON, il faudrait écrire
`.mockResolvedValue(JSON.parse(mockRealRedditArticles))` — mais ce serait inutilement compliqué.

---

## Résumé

| Situation | Format | Besoin de parser ? |
|---|---|---|
| URL `.json` dans le navigateur | texte affiché | — |
| `response` retourné par `fetch()` | string JSON | oui → `.json()` |
| `const x = {...}` dans un fichier `.js` | objet JS littéral | non |
| `const x = '{...}'` dans un fichier `.js` | string JSON | oui → `JSON.parse()` |

> **Règle simple** : s'il y a des guillemets autour de tout → c'est une string JSON.
> Sinon → c'est déjà un objet JS.
