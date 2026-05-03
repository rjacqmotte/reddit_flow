import { Articles } from './Articles';
import { mockRealRedditArticles } from '../../mock/mockRealRedditArticles';
import { render, screen } from '@testing-library/react';
import * as redditServices from '../../services/redditServices';


const mockArticles = mockRealRedditArticles.data.children;

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Articles', () => {
  // test asynchrone car c'est un useEffect qui fecth les données,
  // utilisation de async dans le it.
  it('renders one card per article', async () => {
    // utlisation de .spyOn : voir doc vitest_mock_fetch_synthese
    vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);

    render(<Articles />);
    // attendre que les données soient cherchée et arrivent
    const headings = await screen.findAllByRole('heading');
    expect(headings).toHaveLength(mockArticles.length);
  });

  it('renders the title of every article', async () => {
    vi.spyOn(redditServices, 'fetchPopular').mockResolvedValue(mockArticles);
    
    render(<Articles />);

    for (const article of mockArticles) {
      expect(await screen.findByText(article.data.title)).toBeInTheDocument();
    };
  });

  it('renders nothing if articles is null', () => {
    render(<Articles articles={null} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders nothing if articles is empty', () => {
    render(<Articles articles={[]} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
