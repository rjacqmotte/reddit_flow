// API calls to reddit

/* --- API : Populaire --- */
// appel API pour fournir une liste d'articles populaire sans besoin d'authentification
export async function fetchPopular() {
  // url public .json
  const urlToFetch = 'https://www.reddit.com/r/popular.json';

  try {
    // Etape 1: envoie de la requête
    const response = await fetch(urlToFetch);

    // Etape 2: vérifier le HTTP (réseau, serveur, etc.)
    if (!response.ok) {
      throw new Error(
        `Erreur réseau: ${response.status} - ${response.statusText}`
      );
    }

    // Etape 3: Parser le JSON => objet normal JS
    // récupération des données
    const fetchData = await response.json();

    // Etape 4: vérifier la logique Reddit
    if (fetchData.error) {
      throw new Error(`Reddit : ${fetchData.error} - ${fetchData.message}`);
    }

    // Etape 5: Succés!
    // en GET, il n'y a pas de searchData.status === OK, mais juste la réponse
    if (fetchData.data?.children) {   
      const articles = fetchData.data.children;
      console.log('Articles received:');
      console.log(articles);
      return articles;
    }

  } catch (error) {
    console.log(`Echec: ${error.message}`);
    // relance erreur pour la gérer plus haut
    throw error;
  }
}
