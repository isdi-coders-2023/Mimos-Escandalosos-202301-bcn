import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layout", () => {
  describe("When it renders", () => {
    test("Then it should show the web logo", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
