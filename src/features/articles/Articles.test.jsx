import { Articles } from './Articles';
import { mockRealRedditArticles } from '../../mock/mockRealRedditArticles';
import { render, screen } from '@testing-library/react';

describe('Articles', () => {
const mockArticles = mockRealRedditArticles.data.children;

  it('renders one card per article', () => {
    render(<Articles articles={mockArticles} />);
    expect(screen.getAllByRole('heading')).toHaveLength(
      Object.values(mockArticles).length
    );
  });
  it('renders the title of every article', () => {
    render(<Articles articles={mockArticles} />);
    mockArticles.map((article) => {
      expect(screen.getByText(article.data.title)).toBeInTheDocument();
    });
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
