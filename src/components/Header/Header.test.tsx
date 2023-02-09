import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a navbar", () => {
      render(<Header />);

      const navBar = screen.getByRole("navigation");

      expect(navBar).toBeInTheDocument();
    });

    test("Then it should show 1 image", () => {
      render(<Header />);

      const imageLogo = screen.getByRole("img");

      expect(imageLogo).toBeInTheDocument();
    });

    test("Then it should show a Home pagen", () => {
      render(<Header />);

      const imageLogo = screen.getByRole("img");

      expect(imageLogo).toBeInTheDocument();
    });
  });
});
