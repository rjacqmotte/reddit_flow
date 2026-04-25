# Les erreurs en JavaScript : `throw`, `Error`, `try/catch`

## Docs officielles utiles
- [Error — MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [throw — MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw)

---

## Concept clé : `throw` lance n'importe quelle valeur

En JavaScript, `throw` interrompt immédiatement l'exécution et remonte la valeur lancée jusqu'au `catch` le plus proche.

```js
throw "un simple string"   // ✅ valide, mais déconseillé
throw 42                   // ✅ valide, mais déconseillé
throw new Error("message") // ✅ la bonne pratique
```

Lancer une string ou un nombre est permis, mais tu perds la **stack trace** (le chemin d'appels qui indique où l'erreur s'est produite). Toujours préférer `new Error()`.

---

## Concept clé : `new Error()` crée un objet structuré

`Error` est une **classe native JavaScript**. `new Error("message")` crée une instance avec :

| Propriété | Description |
|---|---|
| `error.message` | Le message que tu passes en argument |
| `error.name` | `"Error"` par défaut |
| `error.stack` | La stack trace (fichier, ligne, colonne) |

```js
const err = new Error("Clé manquante");
console.log(err.message); // "Clé manquante"
console.log(err.name);    // "Error"
console.log(err.stack);   // "Error: Clé manquante\n    at filterData ..."
```

---

## Différence entre `throw new Error()` et `throw error`

### `throw new Error("message")`
Tu **crées** une toute nouvelle erreur à cet endroit précis du code.

```js
// On crée une erreur originale
if (!user) {
  throw new Error("Utilisateur introuvable");
}
```

### `throw error`
Tu **relances** une erreur qui existait déjà (capturée dans un `catch`).

```js
try {
  const data = await fetch(url);
} catch (error) {
  // `error` est l'erreur reçue — on la relance sans la modifier
  throw error;
}
```

> **Règle** : `throw new Error()` pour créer. `throw error` pour relancer.

---

## Les types d'erreurs natifs

JavaScript fournit plusieurs sous-classes d'`Error` pour des cas précis :

| Type | Quand l'utiliser |
|---|---|
| `Error` | Cas général |
| `TypeError` | Mauvais type de valeur (ex. : appeler une non-fonction) |
| `RangeError` | Valeur hors d'une plage valide (ex. : index négatif) |
| `ReferenceError` | Variable non déclarée |
| `SyntaxError` | Code mal formé (parsé par `JSON.parse`, etc.) |

```js
throw new TypeError("Le paramètre doit être un tableau");
throw new RangeError("L'index doit être >= 0");
```

---

## Bonnes pratiques de nommage des messages

Un bon message d'erreur répond à : **qui a échoué + pourquoi**.

```js
// ❌ Trop vague
throw new Error("Erreur");

// ✅ Identifie la fonction + la cause
throw new Error("filterData: la clé \"auteur\" est absente de l'objet");

// ✅ Encore mieux : inclure la valeur problématique
const missingKey = arrayOfKeysToKeep.find((key) => !objectToFilterKeys.includes(key));
throw new Error(`filterData: clé "${missingKey}" absente de l'objet`);
```

---

## Créer ses propres classes d'erreur

Pour des projets plus grands, on peut étendre `Error` afin d'ajouter du contexte ou de distinguer les types d'erreurs :

```js
class RedditApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "RedditApiError";
    this.status = status;
  }
}

throw new RedditApiError(404, "Subreddit introuvable");
```

Dans un `catch`, tu peux ensuite distinguer les types :

```js
} catch (error) {
  if (error instanceof RedditApiError) {
    console.error(`API Reddit [${error.status}] : ${error.message}`);
  } else {
    throw error; // on relance les erreurs inattendues
  }
}
```

---

## Anatomie d'un `try/catch/finally`

```js
try {
  // Code qui peut échouer
  const data = riskyOperation();
} catch (error) {
  // Exécuté si une erreur est lancée dans le try
  console.error(error.message);
} finally {
  // Toujours exécuté, erreur ou pas (ex. : fermer une connexion)
  cleanup();
}
```

`finally` est optionnel. Il sert typiquement à libérer des ressources (fermer un loader, une connexion DB, etc.).

---

## Exemple complet issu du projet

```js
export function filterData(objectToFilter, arrayOfKeysToKeep) {
  const objectToFilterKeys = Object.keys(objectToFilter);
  const checkKeys = arrayOfKeysToKeep.map((key) => objectToFilterKeys.includes(key));

  if (checkKeys.some((value) => value === false)) {
    // On identifie la clé manquante pour un message utile
    const missingKey = arrayOfKeysToKeep.find((key) => !objectToFilterKeys.includes(key));
    throw new Error(`filterData: clé "${missingKey}" absente de l'objet`);
  }

  const arrayOfFilteredObject = arrayOfKeysToKeep.map((key) => [key, objectToFilter[key]]);
  return Object.fromEntries(arrayOfFilteredObject);
}
```

---

## Résumé rapide

| Situation | Ce qu'il faut faire |
|---|---|
| Signaler qu'une condition est invalide | `throw new Error("message clair")` |
| Relancer une erreur reçue dans un catch | `throw error` |
| Erreur de type | `throw new TypeError(...)` |
| Attraper une erreur | `try { ... } catch (error) { ... }` |
| Distinguer les types d'erreur | `error instanceof MonErreur` |
| Message utile | `"NomFonction: cause + valeur problématique"` |
