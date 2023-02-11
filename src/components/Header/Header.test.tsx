import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a navbar", () => {
      render(
        <Router>
          <Header />
        </Router>
      );

      const navBar = screen.getByRole("navigation");

      expect(navBar).toBeInTheDocument();
    });

    test("Then it should show 1 logo-image", () => {
      render(
        <Router>
          <Header />
        </Router>
      );

      const imageLogo = screen.getByRole("img");

      expect(imageLogo).toBeInTheDocument();
    });
  });
});
