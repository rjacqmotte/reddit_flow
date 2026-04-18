import { SearchForm } from "./SearchForm";
import { render, screen } from "@testing-library/react";

describe('SearchForm', () => {
    it('renders', () => {
        render(<SearchForm/>);
    })
    it('has an text input', () => {
        render(<SearchForm/>);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    it('has two button', () => {
        render(<SearchForm/>);
        expect(screen.getAllByRole('button')).toHaveLength(2);
    });
});