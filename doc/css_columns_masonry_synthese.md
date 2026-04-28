# Fiche Synthèse - CSS Columns & Layout Masonry

## 🎯 Le problème à résoudre

Avec une grille CSS classique (`display: grid`), chaque **rangée** a la même hauteur — dictée par la carte la plus haute. Résultat : des espaces blancs "orphelins" disgracieux sous les cartes courtes.

```
Grid standard (problème)        CSS Columns (solution)
┌────────┐ ┌────────┐           ┌────────┐ ┌────────┐
│        │ │        │           │        │ │        │
│ LONG   │ │ COURT  │           │ LONG   │ │ COURT  │
│        │ │        │           │        │ │        │
│        │ │        │           │        │ ├────────┤
│        │ └────────┘           │        │ │        │
│        │ ╔════════╗           │        │ │ MOYEN  │
│        │ ║ VIDE   ║           │        │ │        │
└────────┘ ╚════════╝           └────────┘ └────────┘
           ↑ espace perdu                  ↑ gap identique
```

---

## 📐 Cas 1 — Grid classique (rangées alignées)

### HTML
```html
<ul class="ArticlesList">
  <li class="ArticleItem"><div class="card">Article court</div></li>
  <li class="ArticleItem"><div class="card">Article très long avec beaucoup de texte...</div></li>
  <li class="ArticleItem"><div class="card">Article moyen</div></li>
  <li class="ArticleItem"><div class="card">Court</div></li>
</ul>
```

### CSS
```css
.ArticlesList {
  list-style: none;
  padding: var(--space-2);
  display: grid;
  grid-template-columns: 1fr 1fr;   /* 2 colonnes égales */
  gap: var(--space-4);              /* espacement uniforme */
  align-items: start;               /* évite l'étirement vertical */
}

.ArticleItem {
  margin: 0;
}
```

> ⚠️ Même avec `align-items: start`, les hauteurs de rangées restent liées :
> la carte courte laisse un grand vide visuel sous elle.

---

## 📐 Cas 2 — CSS Columns / Masonry (recommandé pour contenu hétérogène)

### HTML *(identique)*
```html
<ul class="ArticlesList">
  <li class="ArticleItem"><div class="card">Article court</div></li>
  <li class="ArticleItem"><div class="card">Article très long avec beaucoup de texte...</div></li>
  <li class="ArticleItem"><div class="card">Article moyen</div></li>
  <li class="ArticleItem"><div class="card">Court</div></li>
</ul>
```

### CSS
```css
/* Mobile : 1 colonne */
.ArticlesList {
  list-style: none;
  padding: var(--space-2);
  columns: 1;                  /* nombre de colonnes */
}

.ArticleItem {
  break-inside: avoid;         /* ⚠️ empêche une carte d'être coupée */
  margin-bottom: var(--space-4); /* gap vertical entre les cartes */
}

/* Tablette / Desktop : 2 colonnes */
@media (min-width: 480px) {
  .ArticlesList {
    columns: 2;
    column-gap: var(--space-6); /* gap horizontal entre les colonnes */
  }
}
```

---

## 🔑 Propriétés CSS Columns essentielles

| Propriété | Valeur | Effet |
|-----------|--------|-------|
| `columns` | `2` | Raccourci pour nombre de colonnes |
| `columns` | `2 300px` | Raccourci : nb colonnes + largeur min |
| `column-count` | `2` | Nombre de colonnes explicite |
| `column-width` | `300px` | Largeur min par colonne (le navigateur calcule le nombre) |
| `column-gap` | `1rem` | Espace horizontal entre les colonnes |
| `break-inside` | `avoid` | Interdit de couper un élément entre 2 colonnes |
| `column-span` | `all` | Un élément span toutes les colonnes (titre de section, etc.) |
| `column-rule` | `1px solid #ccc` | Ligne séparatrice entre colonnes (comme `border`) |

### Exemple : largeur adaptative automatique
```css
/* Le navigateur crée autant de colonnes que possible ≥ 280px */
.ArticlesList {
  columns: 280px;   /* équivalent à column-width: 280px */
}
```
> 💡 C'est l'équivalent CSS Columns du `auto-fill` en Grid.

---

## ⚠️ Limitation importante : ordre de lecture

CSS Columns remplit **colonne par colonne** (de haut en bas), pas ligne par ligne.

```
Ordre Grid (ligne par ligne)    Ordre CSS Columns (colonne par colonne)
1  │  2                         1  │  3
3  │  4                         2  │  4
5  │  6                         5  │  7
                                6  │  8
```

Si l'ordre horizontal est important pour l'UX (ex: classement chronologique),
CSS Columns n'est pas adapté sans JavaScript.

---

## 🔮 CSS Grid Masonry (expérimental — futur)

Le W3C travaille sur une vraie valeur masonry pour Grid, qui combinerait les deux avantages (ordre horizontal + pas d'espaces orphelins) :

```css
/* ⚠️ Non supporté sans flag — Firefox uniquement fin 2025, Chrome derrière flag */
.ArticlesList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: masonry;   /* ← la magie */
}
```

Quand ce sera supporté partout, ce sera la solution idéale. En attendant : **CSS Columns**.

---

## 🎨 Bonnes pratiques UX/UI

### Quand utiliser CSS Columns / Masonry ?

| Contexte | Recommandation |
|----------|----------------|
| Contenu hétérogène (articles, cartes de longueurs variées) | ✅ **CSS Columns** |
| Images de hauteurs variées (galerie, portfolio) | ✅ **CSS Columns** |
| Contenu homogène (produits e-commerce, profils) | ✅ **Grid classique** |
| Ordre de lecture horizontal important | ✅ **Grid classique** |
| Feed style Reddit / Pinterest / Tumblr | ✅ **CSS Columns** |

### Règles d'or UX

1. **Les espaces vides orphelins sont perçus comme des erreurs** — l'utilisateur pense que du contenu est manquant ou que la page a mal chargé.

2. **Cohérence des gaps > alignement des rangées** — un gap visuellement identique entre toutes les cartes est plus confortable à lire qu'une grille rigide avec des trous.

3. **Densité d'information** — Masonry maximise l'utilisation de l'espace vertical, ce qui réduit le scroll nécessaire pour scanner le contenu.

4. **Ne pas abuser des colonnes** — au-delà de 3 colonnes sur desktop pour du texte, la lecture devient inconfortable. Pinterest l'utilise pour des images, pas pour des articles longs.

5. **Mobile first : toujours 1 colonne en mobile** — deux colonnes sur un petit écran rendent les cartes trop étroites et le texte difficile à lire.

### Pièges UX courants à éviter

- **`break-inside: avoid` oublié** → une carte peut être coupée en deux entre les colonnes, ce qui est visuellement cassé.
- **Utiliser `gap` sur le container au lieu de `margin-bottom` sur les items** → `gap` ne fonctionne pas avec CSS Columns (contrairement à Grid/Flexbox).
- **Forcer des hauteurs fixes sur les cartes** pour "corriger" le problème Grid → cela tronque le contenu. CSS Columns est la vraie solution.

---

## 📊 Comparatif rapide

| Critère | `display: grid` | `CSS columns` | Grid Masonry (futur) |
|---------|-----------------|---------------|----------------------|
| Gap identique entre toutes les cartes | ❌ (rangées liées) | ✅ | ✅ |
| Ordre de lecture horizontal | ✅ | ❌ | ✅ |
| Support navigateurs | ✅ Excellent | ✅ Excellent | ❌ Expérimental |
| Contenu hétérogène | ❌ Espaces orphelins | ✅ Parfait | ✅ Parfait |
| Contrôle du placement précis | ✅ Total | ❌ Limité | ✅ Total |

---

## 💡 Ressources

- [MDN — CSS Columns](https://developer.mozilla.org/fr/docs/Web/CSS/columns)
- [MDN — break-inside](https://developer.mozilla.org/fr/docs/Web/CSS/break-inside)
- [Can I Use — CSS Columns](https://caniuse.com/multicolumn)
- [Can I Use — Grid Masonry](https://caniuse.com/css-grid-masonry)
