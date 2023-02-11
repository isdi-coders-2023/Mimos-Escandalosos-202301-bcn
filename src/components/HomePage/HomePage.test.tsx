import { render, screen } from "@testing-library/react";
import MockContextProvider from "../../mocks/MockContextProvider";
import { mockStore } from "../../mocks/mockStore";
import { HomePage } from "./HomePage";

const store = mockStore;

describe("Given a HomePage component", () => {
  describe("When it renders", () => {
    test("Then it should show title with the text 'What do you want to cook?'", () => {
      const text = "What do you want to cook?";

      render(
        <MockContextProvider mockStore={store}>
          <HomePage />
        </MockContextProvider>
      );

      const h1Element = screen.getByRole("heading", { name: `${text}` });

      expect(h1Element).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <MockContextProvider mockStore={store}>
          <HomePage />
        </MockContextProvider>
      );

      const expectedOutput = screen.getByRole("list");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
