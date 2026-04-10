# Fiche Synthèse - useRef (React)

## C'est quoi ?

`useRef` crée une **référence persistante** qui :
- Survit aux re-renders (contrairement aux variables locales)
- Ne déclenche **pas** de re-render quand elle change (contrairement à `useState`)

## Syntaxe de base

```jsx
import { useRef } from 'react';

const myRef = useRef(valeurInitiale);

// Accéder à la valeur
myRef.current
```

## Cas d'usage 1 : Accéder au DOM

```jsx
function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus sur l'input
    inputRef.current.focus();
    
    // Lire une propriété DOM
    console.log(inputRef.current.scrollHeight);
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
```

## Cas d'usage 2 : Stocker une valeur mutable

```jsx
function Timer() {
  const countRef = useRef(0);
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current); // Log sans re-render
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
```

## Cas d'usage 3 : Garder la valeur précédente

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Sauvegarde après chaque render
  });

  return (
    <p>
      Actuel: {count}, Précédent: {prevCountRef.current}
    </p>
  );
}
```

## Cas d'usage 4 : Détecter l'overflow (ton cas !)

```jsx
function Card({ body }) {
  const contentRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setHasOverflow(element.scrollHeight > element.clientHeight);
    }
  }, [body]);

  return (
    <div className="card">
      <p ref={contentRef}>{body}</p>
      {hasOverflow && <div className="fadeOverlay">Voir plus</div>}
    </div>
  );
}
```

## useRef vs useState

| | `useRef` | `useState` |
|---|---------|------------|
| Re-render au changement | ❌ Non | ✅ Oui |
| Persiste entre renders | ✅ Oui | ✅ Oui |
| Accès synchrone | ✅ Immédiat | ❌ Async (batch) |
| Usage typique | DOM, timers, valeurs cachées | UI, données affichées |

## useRef vs variable locale

| | `useRef` | Variable locale |
|---|---------|-----------------|
| Persiste entre renders | ✅ Oui | ❌ Non (reset) |
| Même instance | ✅ Oui | ❌ Nouvelle à chaque render |

## Propriétés DOM utiles avec useRef

```jsx
const ref = useRef(null);

// Après le mount, dans useEffect :
ref.current.scrollHeight   // Hauteur totale (contenu caché inclus)
ref.current.clientHeight   // Hauteur visible
ref.current.offsetHeight   // Hauteur visible + bordures
ref.current.scrollWidth    // Largeur totale
ref.current.clientWidth    // Largeur visible
ref.current.offsetTop      // Position par rapport au parent
ref.current.getBoundingClientRect() // Position/taille relative au viewport
```

## Avec ResizeObserver (re-check au resize)

```jsx
useEffect(() => {
  const element = contentRef.current;
  if (!element) return;

  const checkOverflow = () => {
    setHasOverflow(element.scrollHeight > element.clientHeight);
  };

  checkOverflow(); // Check initial

  const observer = new ResizeObserver(checkOverflow);
  observer.observe(element);

  return () => observer.disconnect(); // Cleanup
}, []);
```

## Règles importantes

1. **Ne lis/écris pas `ref.current` pendant le render** — fais-le dans `useEffect` ou handlers
2. **`ref.current` peut être `null`** au premier render (avant le mount)
3. **Pas besoin de `ref` dans les dépendances** de `useEffect` (c'est stable)

## Pattern : Forward Ref (passer ref à un composant enfant)

```jsx
// Composant enfant
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Composant parent
function Parent() {
  const inputRef = useRef(null);
  return <Input ref={inputRef} />;
}
```

## Anti-pattern ❌

```jsx
// NE FAIS PAS ÇA — lire ref.current pendant le render
function Bad() {
  const ref = useRef(null);
  
  // ❌ ref.current est null ici au premier render !
  const height = ref.current?.scrollHeight;
  
  return <div ref={ref}>...</div>;
}

// ✅ Fais ça dans useEffect
function Good() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);
  
  return <div ref={ref}>...</div>;
}
```
