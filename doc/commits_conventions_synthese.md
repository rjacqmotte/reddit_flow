# Conventional Commits - Aide-mémoire

## 📝 Format standard

```
<type>(<scope>): <description>

[body optionnel]

[footer optionnel]
```

**Règles :**
- Première ligne : **50 caractères max**
- Body : **72 caractères max** par ligne
- Toujours en **anglais** (convention)
- Verbe à l'**impératif** : "add", "fix", "update" (pas "added", "fixing")

---

## 🏷️ Types de commits

| Type | Quand l'utiliser | Exemple |
|------|------------------|---------|
| `feat` | Nouvelle fonctionnalité | `feat(auth): add login form` |
| `fix` | Correction de bug | `fix(Card): resolve overflow issue` |
| `style` | CSS, formatage, espaces | `style(Menu): improve mobile layout` |
| `refactor` | Restructuration sans changer le comportement | `refactor(api): simplify fetch logic` |
| `docs` | Documentation uniquement | `docs: add README installation steps` |
| `test` | Ajout/modification de tests | `test(utils): add unit tests` |
| `chore` | Maintenance, config, dépendances | `chore: update eslint config` |
| `perf` | Amélioration de performance | `perf(images): lazy load thumbnails` |
| `build` | Build system, CI/CD | `build: configure vite for production` |
| `revert` | Annulation d'un commit | `revert: feat(auth): add login form` |

---

## 🎯 Scope (optionnel mais recommandé)

Le scope indique **où** le changement a lieu :
- Composant : `Card`, `Menu`, `NavButton`
- Feature : `auth`, `search`, `articles`
- Fichier/dossier : `api`, `utils`, `styles`

```
feat(Card): add read more button
style(Menu): fix mobile positioning
refactor(store): simplify state structure
```

---

## ✅ Bons exemples

```
feat(Card): add overflow detection for long content

style(Menu): make position fixed on mobile viewport

fix(SearchForm): prevent form submission on empty input

docs: add flexbox cheatsheet

refactor(Articles): extract card rendering to separate component

chore: update react to v19
```

---

## ❌ À éviter

| Mauvais | Pourquoi | Mieux |
|---------|----------|-------|
| `update code` | Trop vague | `refactor(Card): simplify render logic` |
| `WIP` / `work in progress` | Pas informatif | Commiter quand c'est terminé ou utiliser `--amend` |
| `fix bug` | Quel bug ? | `fix(auth): handle expired token error` |
| `style changes` | Où ? Quoi ? | `style(Card): adjust padding and margins` |
| `misc updates` | Pas de sens | Séparer en plusieurs commits |
| `srtyle button` | Faute de frappe | Relire avant de commit |

---

## � Erreurs réelles → corrections (exemples vécus)

### 1. Description trop longue

```
// ❌ 67 caractères — dépasse la limite de 50
feat(filterData): throw error if keys to keep do not exist in object to filter

// ✅ Court et précis
feat(filterData): throw on unknown keys
```

---

### 2. Deux changements différents dans un seul commit

```
// ❌ Le body décrit un changement de nature différente (test ≠ feat)
feat(filterData): throw error if keys to keep do not exist in object to filter

fix filterData unit test to fit the new feature

// ✅ Deux commits séparés
feat(filterData): throw on unknown keys

test(filterData): update unit test for unknown keys error
```

---

### 3. Mentionner l'outil dans le message

```
// ❌ "ai create" mentionne le processus, pas la valeur
docs(pedagogic syntheses): ai create 2 pedagogics files error and truc_et_astuce

// ✅ Décrire ce qui est ajouté, pas comment c'est fait
docs: add js errors and vitest tips cheatsheets
```

---

### 4. Mauvais type pour un test

```
// ❌ refactor sur un fichier de test → utiliser "test"
// ❌ Faute de frappe "fonction" au lieu de "function"
// ❌ "fit to the fonction filterData" = trop verbeux
refactor(filterData test): simplify test to fit to the fonction filterData

// ✅ Type correct, scope propre, description concise
test(filterData): simplify tests
```

---

### 5. Décrire le processus TDD plutôt que la valeur

```
// ❌ "to make a test green" = décrit une étape de dev, pas la fonctionnalité
feat(filterData): create filterData to make a test green

// ✅ Décrire ce qui existe maintenant dans le code
feat(filterData): add filterData utility function
```

---

## �🔧 Réécrire l'historique Git

### Modifier le dernier commit
```bash
# Modifier le message
git commit --amend -m "nouveau message"

# Modifier le message avec éditeur
git commit --amend

# Ajouter des fichiers oubliés (sans changer le message)
git add fichier-oublie.js
git commit --amend --no-edit
```

### Modifier plusieurs commits (rebase interactif)
```bash
# Réécrire les 5 derniers commits
git rebase -i HEAD~5
```

Dans l'éditeur, changer `pick` en :
- `reword` → modifier le message
- `edit` → modifier le commit
- `squash` → fusionner avec le précédent
- `drop` → supprimer le commit

### ⚠️ Attention : après un push

Si déjà pushé, il faut **forcer** le push :
```bash
git push --force-with-lease
```

**Risques :**
- ❌ Ne JAMAIS faire sur une branche partagée
- ❌ Peut causer des conflits pour les autres
- ✅ OK sur ta propre branche ou projet solo

---

## 🚀 Workflow recommandé

1. **Avant de commiter** : relire le message
2. **Un commit = une chose** : ne pas mélanger feature + style + doc
3. **Commiter souvent** : petits commits atomiques
4. **Squash avant merge** : nettoyer l'historique si nécessaire

---

## 💡 Astuce VS Code

Installe l'extension **Conventional Commits** pour avoir des suggestions automatiques de type et scope lors du commit.

---

## 📚 Ressources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
