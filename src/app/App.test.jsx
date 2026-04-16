import App from "./app";
import { render, screen } from "@testing-library/react";

describe('App', () => {
    it('redners App component', () => {
        render(<App />);
        screen.debug();
    });
});
