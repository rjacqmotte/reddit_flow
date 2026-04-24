import { fetchPopular } from './redditServices';
import { mockRealRedditArticles } from '../mock/mockRealRedditArticles';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Réinitialiser les mocks avant chaque test
// Sans ça, les .mockResolvedValue() définis dans un it() restent actifs pour les suivants.
// Ex : si le CAS 1 (succès) tourne avant le CAS 4 (erreur Reddit), sans reset,
// fetch serait encore mocké avec ok:true + articles valides → le CAS 4 ne testerait plus rien.
// vi.resetAllMocks() remet chaque vi.fn() à vide (plus de comportement défini, compteur d'appels à 0).
beforeEach(() => {
  vi.resetAllMocks();
});

describe('fetchPopular', () => {
  it('returns an array of articled if it resolve', async () => {
    // ARRANGE : on prépare le faux fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockRealRedditArticles),
    });

    // ACT : on appelle la vraie fonction
    const result = await fetchPopular();

    // ASSERT : on vérifie le résultat
    // On compare contre data.children car c'est ce que fetchPopular() retourne
    // On évite toEqual(mockRealRedditArticles) entier pour ne pas inonder le terminal en cas d'échec
    const expected = mockRealRedditArticles.data.children;
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(expected.length);
    expect(result[0].kind).toBe(expected[0].kind);
  });

  // --- CAS 2 : erreur HTTP (ex: 404, 500) ---
  it('lance une erreur en cas d\'erreur HTTP', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(fetchPopular()).rejects.toThrow('Erreur réseau: 500');
  });

  // --- CAS 3 : erreur réseau (coupure, timeout) ---
  it('lance une erreur en cas de coupure réseau', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network Error'));

    await expect(fetchPopular()).rejects.toThrow('Network Error');
  });

  // --- CAS 4 : erreur logique Reddit ---
  it('lance une erreur si Reddit retourne une erreur applicative', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ error: 403, message: 'Forbidden' }),
    });

    await expect(fetchPopular()).rejects.toThrow('Reddit : 403');
  });
});


describe('FilterData', () => {
  it('returns an object with only the expected key', () => {
    const expectedKeys = [
      'title',
      'author',
      'subreddit', 
      'score', 
      'num_comments', 
      'url', 
      'thumbnail', 
      'permalink', 
      'is_video', 
      'create_utc'
    ];
    const dataToFilter = mockRealRedditArticles.data.children[0].data;
    const filteredObject = FilterData(datatToFilter); 
    // check if it contains at least the espected keys
    expect(Object.keys(filteredObject)).toEqual(expect.arrayContaining(expectedKeys));
    // check if there is not too much keys
    expect(Object.keys(filteredObject)).toHaveLength(expectedKeys.length);
  })
});