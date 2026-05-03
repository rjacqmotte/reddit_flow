# Vitest — Trucs & Astuces

---

## 1. `.toThrow()` exige une fonction fléchée

**Problème fréquent :** le test plante au lieu d'échouer proprement.

```js
// ❌ maFonction() s'exécute AVANT que expect() soit appelé
//    si elle lance une erreur → le test explose, expect ne voit rien
expect(maFonction(arg)).toThrow('message attendu');

// ✅ on passe une fonction ; expect l'appelle dans un try/catch
//    et peut vérifier que l'erreur a bien été lancée
expect(() => maFonction(arg)).toThrow('message attendu');
```

**Règle :** dès que tu utilises `.toThrow()`, entoure toujours l'appel d'une fonction fléchée.

---

## 2. `expect.arrayContaining()` — vérifier un sous-ensemble

Vérifie que le tableau reçu contient **au moins** tous les éléments attendus (ordre indifférent, éléments en plus autorisés).

```js
expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(['a', 'b'])); // ✅
expect(['a', 'b']).toEqual(expect.arrayContaining(['a', 'x']));      // ❌
```

Pour vérifier qu'il n'y a **pas de clés en trop**, combiner avec `toHaveLength` :

```js
expect(Object.keys(obj)).toEqual(expect.arrayContaining(expectedKeys));
expect(Object.keys(obj)).toHaveLength(expectedKeys.length);
```

> Si l'ordre est garanti (ex: résultat d'un `.map()` sur les clés), un simple `toEqual(expectedKeys)` suffit.

---

## 3. Un `it()` = un comportement

- **Même scénario / même comportement** → un seul `it()`, plusieurs `expect()` autorisés
- **Scénarios distincts** (succès, erreur HTTP, erreur réseau...) → un `it()` par scénario

```js
// ✅ Les deux expect décrivent le même comportement : la forme du résultat
it('returns an object with only the expected keys', () => {
  expect(Object.keys(result)).toEqual(expectedKeys);
  expect(Object.keys(result)).toHaveLength(expectedKeys.length);
});
```

---

## 4. `vi.resetAllMocks()` dans `beforeEach`

Sans reset, un `.mockResolvedValue()` défini dans un `it()` reste actif pour les suivants.

```js
beforeEach(() => {
  vi.resetAllMocks(); // remet chaque vi.fn() à vide (comportement + compteur d'appels)
});
```

---

## 5. Mocker `fetch` globalement

```js
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue(mockData),
});
```

- `mockResolvedValue` → simule une promesse résolue
- `mockRejectedValue` → simule une promesse rejetée (erreur réseau, coupure...)

---

## 6. Tester les erreurs async avec `.rejects.toThrow()`

```js
await expect(maFonctionAsync()).rejects.toThrow('message attendu');
```

Pas besoin de fonction fléchée ici : la promesse est déjà un objet, `.rejects` s'en charge.

---

## 7. Éviter les `console.log` dans le code de production

Les `console.log` dans les fonctions testées polluent le terminal de tests avec les données des mocks.  
Les supprimer avant de commiter — ou les remplacer par un vrai logger configurable.

---

## 8. Tester un `useEffect`

Un `useEffect` s'exécute **après** le render, pas pendant. Le DOM est donc vide au moment où le composant est rendu — il faut attendre.

**Règle :** dès qu'un `useEffect` est impliqué, utilise `findBy*` au lieu de `getBy*`, et rends le `it` `async`.

```js
// ❌ getBy* cherche immédiatement → le useEffect n'est pas encore passé
const el = screen.getByRole('heading');

// ✅ findBy* attend que l'élément apparaisse dans le DOM
const el = await screen.findByRole('heading');
```

Si le `useEffect` appelle un service externe, mock-le **avant** le `render()` avec `vi.spyOn()` (voir `vitest_mock_fetch_synthese.md`).

---

## 8. Factoriser des cas de test similaires avec `it.each`

Quand plusieurs tests ont la même logique mais des données différentes, `it.each` évite la répétition.

```jsx
// Au lieu de 5 blocs it() séparés :
it.each([null, 'self', 'default', 'nsfw', 'spoiler'])(
  'does not render image when thumbnail is "%s"',
  (thumbnail) => {
    render(<Card article={{ thumbnail }} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  }
);
```

- Le tableau contient les valeurs à tester
- Chaque valeur génère un test séparé dans le rapport Vitest
- `%s` dans le nom du test est remplacé automatiquement par la valeur courante
- Fonctionne aussi avec des tableaux de tuples si plusieurs paramètres sont nécessaires :

```jsx
it.each([
  ['self', false],
  ['https://example.com/img.jpg', true],
])('thumbnail "%s" → image visible: %s', (thumbnail, visible) => {
  render(<Card article={{ thumbnail }} />);
  visible
    ? expect(screen.getByRole('img')).toBeInTheDocument()
    : expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
```

