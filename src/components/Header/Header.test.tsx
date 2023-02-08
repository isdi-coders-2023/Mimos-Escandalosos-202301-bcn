import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a navbar", () => {
      render(<Header />);

      const navBar = screen.getByRole("navigation");

      expect(navBar).toBeInTheDocument();
    });
  });
});
