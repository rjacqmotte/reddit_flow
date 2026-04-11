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

## 🔧 Réécrire l'historique Git

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
