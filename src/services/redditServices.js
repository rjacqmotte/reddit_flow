// API calls to reddit

/* --- API : fecth un tableau d'articles populaires sur reddit --- */
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
      return fetchData.data.children;
    }

  } catch (error) {
    // relance erreur pour la gérer plus haut
    throw error;
  }
}

export function filterData (objectToFilterByKeys, arrayOfKeysToKeep) {
  // create a new array of array key-value
  const arrayOfFilteredObject = arrayOfKeysToKeep.map((key) => [key, objectToFilterByKeys[key]]);
  // transform the key-value array in object
  const filteredObject = Object.fromEntries(arrayOfFilteredObject);
  return filteredObject;
};
