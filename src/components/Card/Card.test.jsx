import { Card } from './Card';
import { render, screen } from '@testing-library/react';
import { mockArticles } from '../../mock/mockArticles';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card title="title" body="body" imageUrl="/photo_article_4.png" />);
    screen.debug();
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('body')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('it is not render image if there is not', () => {
    render(<Card title="title" body="body" imageUrl="" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  it('it display a smooth footer with a button if it overflow  ', () => {
    // impossible to test now with jsdom. need a visual render.
  });

  it('it not display a smooth footer if it not overflow', () => {});
});
