import { Articles } from './Articles';
import { mockArticles } from '../../mock/mockArticles';
import { render, screen } from '@testing-library/react';

describe('Articles', () => {
  it('renders one card per article', () => {
    render(<Articles articles={mockArticles} />);
    expect(screen.getAllByRole('heading')).toHaveLength(
      Object.values(mockArticles).length
    );
  });
  it('renders the title of every article', () => {
    render(<Articles articles={mockArticles} />);
    expect(screen.getByText(mockArticles[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockArticles[2].title)).toBeInTheDocument();
    expect(screen.getByText(mockArticles[3].title)).toBeInTheDocument();
    expect(screen.getByText(mockArticles[4].title)).toBeInTheDocument();
  });
  it('renders nothing if articles is null', () => {
    render(<Articles articles={null} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
  it('renders nothing if articles is empty', () => {
    render(<Articles articles={{}} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
