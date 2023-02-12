import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UiContextProvider } from "../../store/contexts/uiContext/UiContextProvider";
import Layout from "./Layout";

describe("Given a Layout", () => {
  describe("When it renders", () => {
    test("Then it should show the web logo", () => {
      render(
        <UiContextProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </UiContextProvider>
      );

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
