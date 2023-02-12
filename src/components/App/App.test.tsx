import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should show a navbar", () => {
      render(<App />, { wrapper: BrowserRouter });

      const navElement = screen.getByRole("navigation");

      expect(navElement).toBeInTheDocument();
    });
  });
});
