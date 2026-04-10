# Fiche Synthèse - Media Queries CSS

## Syntaxe de base

```css
@media (condition) {
  /* Styles appliqués si la condition est vraie */
}
```

## Breakpoints standards (Mobile First)

| Appareil | Largeur | Media Query |
|----------|---------|-------------|
| Mobile (portrait) | < 576px | Par défaut (pas de media query) |
| Mobile (paysage) | ≥ 576px | `@media (min-width: 576px)` |
| Tablette | ≥ 768px | `@media (min-width: 768px)` |
| Desktop | ≥ 992px | `@media (min-width: 992px)` |
| Large Desktop | ≥ 1200px | `@media (min-width: 1200px)` |
| Extra Large | ≥ 1400px | `@media (min-width: 1400px)` |

## Approche Mobile First (recommandée)

```css
/* Styles de base pour mobile */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```

## Approche Desktop First

```css
/* Styles de base pour desktop */
.container {
  width: 1170px;
}

/* Tablette */
@media (max-width: 991px) {
  .container {
    width: 750px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}
```

## Combinaisons de conditions

### Plage de largeur (entre deux valeurs)

```css
/* Entre 768px et 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar {
    display: none;
  }
}
```

### OU logique

```css
/* Mobile OU très grand écran */
@media (max-width: 576px), (min-width: 1400px) {
  .element {
    font-size: 1.2rem;
  }
}
```

## Orientation

```css
/* Mode paysage */
@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Mode portrait */
@media (orientation: portrait) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Détection des capacités

### Hover (souris vs tactile)

```css
/* Appareils avec souris */
@media (hover: hover) {
  .button:hover {
    background-color: blue;
  }
}

/* Appareils tactiles */
@media (hover: none) {
  .button {
    padding: 1rem; /* Plus grand pour le doigt */
  }
}
```

### Préférence de thème

```css
/* Mode sombre système */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

/* Mode clair système */
@media (prefers-color-scheme: light) {
  :root {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
  }
}
```

### Réduction des animations

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Variables CSS avec Media Queries

```css
:root {
  --font-size-base: 14px;
  --grid-columns: 1;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 16px;
    --grid-columns: 2;
  }
}

@media (min-width: 992px) {
  :root {
    --font-size-base: 18px;
    --grid-columns: 3;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
}
```

## Container Queries (CSS moderne)

```css
/* Définir un conteneur */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Styles basés sur la taille du conteneur */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container card (max-width: 399px) {
  .card {
    display: block;
  }
}
```

## Bonnes Pratiques

1. **Mobile First** : Commencer par les styles mobiles, puis ajouter pour les écrans plus grands
2. **Utiliser des unités relatives** : `rem`, `em`, `%` plutôt que `px`
3. **Tester sur vrais appareils** : Les émulateurs ne sont pas toujours fidèles
4. **Éviter trop de breakpoints** : 3-4 suffisent généralement
5. **Nommer les breakpoints** via des variables CSS ou Sass :

```css
:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
```

## Outils de Debug

```css
/* Afficher le breakpoint actuel en dev */
body::before {
  content: "Mobile";
  position: fixed;
  top: 0;
  left: 0;
  background: red;
  color: white;
  padding: 0.25rem 0.5rem;
  z-index: 9999;
}

@media (min-width: 768px) {
  body::before { content: "Tablet"; background: orange; }
}

@media (min-width: 992px) {
  body::before { content: "Desktop"; background: green; }
}

@media (min-width: 1200px) {
  body::before { content: "Large"; background: blue; }
}
```
