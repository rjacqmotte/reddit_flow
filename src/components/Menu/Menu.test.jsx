import { Menu } from "./Menu";
import { render, screen } from "@testing-library/react";

describe('Menu', () => {
    it('renders', () =>  {
        render(<Menu/>);
    });
});