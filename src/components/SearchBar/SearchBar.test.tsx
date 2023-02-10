import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it renders", () => {
    test("Then it should show a serch bar with an aria-label", () => {
      const text = "search";

      render(<SearchBar />);

      const expectedOutput = screen.getByLabelText(text);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
