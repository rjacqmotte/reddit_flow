# Flexbox - Aide-mémoire

## 🎯 L'essentiel à retenir

| Propriété | S'applique à | Direction | Effet |
|-----------|--------------|-----------|-------|
| `justify-content` | Container | **Axe principal** (→) | Répartit l'espace horizontal |
| `align-items` | Container | **Axe secondaire** (↓) | Aligne verticalement |
| `align-self` | Item | **Axe secondaire** (↓) | Override align-items pour 1 élément |
| `align-content` | Container | **Axe secondaire** (↓) | Répartit les lignes (multi-lignes) |

> 💡 **Astuce**: `justify` = axe principal, `align` = axe secondaire

---

## 📦 Sur le container (`display: flex`)

### `flex-direction` - Définit l'axe principal
```css
flex-direction: row;          /* → défaut, horizontal */
flex-direction: row-reverse;  /* ← */
flex-direction: column;       /* ↓ vertical */
flex-direction: column-reverse; /* ↑ */
```

### `justify-content` - Axe principal
```
row:    [■ ■ ■        ]  flex-start (défaut)
        [        ■ ■ ■]  flex-end
        [    ■ ■ ■    ]  center
        [■    ■    ■  ]  space-between
        [  ■   ■   ■  ]  space-around
        [ ■   ■   ■   ]  space-evenly
```

### `align-items` - Axe secondaire (1 ligne)
```
        ┌─────────────┐
        │ ■ ■ ■       │  flex-start
        │             │
        └─────────────┘

        ┌─────────────┐
        │             │
        │ ■ ■ ■       │  center
        │             │
        └─────────────┘

        ┌─────────────┐
        │             │
        │ ■ ■ ■       │  flex-end
        └─────────────┘

        ┌─────────────┐
        │ █ █ █       │  stretch (défaut)
        │ █ █ █       │  (remplit la hauteur)
        └─────────────┘
```

### `flex-wrap` - Retour à la ligne
```css
flex-wrap: nowrap;       /* défaut, tout sur 1 ligne */
flex-wrap: wrap;         /* retour à la ligne */
flex-wrap: wrap-reverse; /* retour à la ligne inversé */
```

### `gap` - Espacement
```css
gap: 10px;           /* espacement entre tous les éléments */
gap: 10px 20px;      /* row-gap column-gap */
row-gap: 10px;       /* espacement vertical */
column-gap: 20px;    /* espacement horizontal */
```

---

## 🧩 Sur les items (enfants)

### `flex` - Raccourci
```css
flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
flex: 0 1 auto;    /* défaut: ne grandit pas, peut rétrécir, taille auto */
flex: 1 1 200px;   /* grandit, rétrécit, base de 200px */
```

### Propriétés individuelles
```css
flex-grow: 1;      /* prend l'espace disponible (0 = non) */
flex-shrink: 1;    /* peut rétrécir si nécessaire (0 = non) */
flex-basis: 200px; /* taille de base avant grow/shrink */
```

### `align-self` - Override align-items
```css
align-self: auto;       /* hérite de align-items */
align-self: flex-start;
align-self: center;
align-self: flex-end;
align-self: stretch;
```

### `order` - Ordre d'affichage
```css
order: 0;   /* défaut */
order: -1;  /* apparaît en premier */
order: 1;   /* apparaît après les 0 */
```

---

## 🔥 Patterns courants

### Centrer parfaitement
```css
.container {
  display: flex;
  justify-content: center;  /* horizontal */
  align-items: center;      /* vertical */
}
```

### Navigation espacée
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Grille flexible
```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.grid-item {
  flex: 1 1 300px; /* min 300px, grandit si possible */
}
```

### Footer en bas
```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1; /* prend tout l'espace restant */
}
```

### Sidebar fixe + contenu flexible
```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 250px; /* fixe à 250px */
}
.main {
  flex: 1; /* prend le reste */
}
```

---

## 🧠 Mémo visuel

```
┌─────────────────────────────────────┐
│ flex-direction: row (défaut)        │
│                                     │
│  ═══════════ AXE PRINCIPAL ═══════▶ │
│       (justify-content)             │
│  ║                                  │
│  ║ AXE SECONDAIRE (align-items)     │
│  ▼                                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ flex-direction: column              │
│                                     │
│  ║ AXE PRINCIPAL (justify-content)  │
│  ▼                                  │
│  ═══════════ AXE SECONDAIRE ══════▶ │
│       (align-items)                 │
└─────────────────────────────────────┘
```

> ⚠️ Quand `flex-direction: column`, les axes s'inversent !
> - `justify-content` contrôle le **vertical**
> - `align-items` contrôle l'**horizontal**
