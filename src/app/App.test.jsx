import App from "./app";
import { render, screen } from "@testing-library/react";

describe('App', () => {
    it('renders App component', () => {
        render(<App />);
    });
});
