import { Card } from './Card';
import { render, screen } from '@testing-library/react';
import { mockRealRedditArticles } from '../../mock/mockRealRedditArticles';

describe('Card', () => {

  it('renders Card component', () => {
    render(<Card article={mockRealRedditArticles.data.children[2].data} />);
    expect(screen.getByText(mockRealRedditArticles.data.children[2].data.title)).toBeInTheDocument();
    expect(screen.getByText(mockRealRedditArticles.data.children[2].data.subreddit)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  // it.each permet de factoriser plusieurs cas identiques en un seul test.
  // Chaque valeur du tableau génère un test séparé, %s est remplacé par la valeur courante.
  it.each([null, 'self', 'default', 'nsfw', 'spoiler'])(
    'does not render image when thumbnail is "%s"',
    (thumbnail) => {
      render(<Card article={{ thumbnail }} />);
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    }
  );
  it('display a smooth footer with a button if it overflow  ', () => {
    // impossible to test now with jsdom. need a visual render.
  });

  it('not display a smooth footer if it not overflow', () => {});
});
