# Fiche synthese - Auth Reddit (Frontend only)

Date: 2026-04-07
Contexte: app React + React Router + Redux, deployee sur Netlify, sans backend.

## 1) Ce qui est possible sans backend

Tu ne dois jamais exposer un `client_secret` dans le frontend.
Donc, en pratique:

- OK: app Reddit de type `installed` (pas de secret)
- OK: OAuth user via `response_type=token` (implicit flow)
- OK: appels API avec `Authorization: Bearer <token>` vers `https://oauth.reddit.com`
- PAS OK: flow server-side avec secret (web app classique)

Note:
- Le flow implicite est moins robuste que code+PKCE, mais il reste le plus simple pour une app 100% front sans backend.
- Le token est court (en general ~1h). Pas de refresh token dans ce mode.

## 2) Setup Reddit (une seule fois)

1. Ouvrir: https://www.reddit.com/prefs/apps
2. Creer une app de type `installed`.
3. Configurer les redirect URIs exactes:
   - `http://localhost:5173/auth/reddit/callback`
   - `https://<ton-site>.netlify.app/auth/reddit/callback`
4. Noter le `client_id`.

## 3) Scopes minimaux recommandes

Pour un projet type "Reddit client" lecture:

- `read` (lire posts/comments)
- `identity` (optionnel, pour afficher le compte connecte)

Exemple scope string: `read identity`

## 4) URLs OAuth utiles

Autorisation utilisateur:

- `https://www.reddit.com/api/v1/authorize`

API apres auth:

- `https://oauth.reddit.com`

## 5) Flux frontend conseille (React Router)

1. Clic sur "Se connecter avec Reddit"
2. Redirection vers URL authorize
3. Reddit redirige vers `/auth/reddit/callback#access_token=...`
4. Ta page callback lit `window.location.hash`
5. Stockage token en Redux + (optionnel) `sessionStorage`
6. Requete API avec Bearer token

## 6) Exemple URL d'autorisation

```txt
https://www.reddit.com/api/v1/authorize
  ?client_id=TON_CLIENT_ID
  &response_type=token
  &state=RANDOM_CSRF_TOKEN
  &redirect_uri=https%3A%2F%2F<ton-site>.netlify.app%2Fauth%2Freddit%2Fcallback
  &duration=temporary
  &scope=read%20identity
```

Points critiques:
- `state` doit etre verifie au retour (anti CSRF)
- `redirect_uri` doit matcher EXACTEMENT une URI enregistree

## 7) Callback minimal (idee de code)

```js
// /auth/reddit/callback
const hash = new URLSearchParams(window.location.hash.replace('#', ''));
const accessToken = hash.get('access_token');
const state = hash.get('state');
const error = hash.get('error');

// 1) verifier state
// 2) gerer error
// 3) sauver token
// 4) navigate('/')
```

## 8) Structure Redux recommandee

Slice `auth`:
- `accessToken`
- `tokenType` (souvent bearer)
- `expiresAt` (Date.now + expires_in*1000)
- `oauthState`
- `isAuthenticated`

Actions:
- `setOauthState()`
- `loginSuccess()`
- `logout()`

Selector utile:
- `selectAuthHeader` => `Bearer <token>`

## 9) Exemple fetch Reddit

```js
const res = await fetch('https://oauth.reddit.com/r/javascript/hot?limit=10', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'User-Agent': 'web:reddit_flow:v1.0.0 (by /u/ton_username)'
  }
});

if (!res.ok) throw new Error(`Reddit API ${res.status}`);
const data = await res.json();
```

## 10) Netlify checklist

- Ajouter l'URL Netlify exacte dans Reddit app settings
- Verifier que la route callback existe cote React Router
- Ajouter variables d'env front:
  - `VITE_REDDIT_CLIENT_ID`
  - `VITE_REDDIT_REDIRECT_URI`
- Rebuild Netlify apres changement de vars

## 11) Limites et bonnes pratiques

- Sans backend, token en navigateur => securite limitee
- Preferer `sessionStorage` a `localStorage` pour reduire la persistance
- Gerer expiration proprement (logout + relogin)
- Limiter les scopes au minimum
- Respecter rate limits et User-Agent descriptif

## 12) Option evolutive (portfolio "pro")

Quand tu voudras monter en gamme:

- Ajouter un petit backend/serverless (Netlify Functions)
- Passer vers code flow + echange token cote serveur
- Eviter toute exposition de logique sensible dans le client

---

## TL;DR

Pour ton contexte actuel (React Router + Redux + Netlify + pas de backend),
la voie la plus simple et realiste est:

- App Reddit `installed`
- OAuth front en `response_type=token`
- Token en Redux/sessionStorage
- API calls vers `oauth.reddit.com` avec Bearer
- Scope minimal `read` (et `identity` si besoin)
