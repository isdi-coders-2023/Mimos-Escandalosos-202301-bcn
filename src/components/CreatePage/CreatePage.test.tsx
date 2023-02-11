import { render, screen } from "@testing-library/react";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Create a new meal'", () => {
      const text = "Create a new meal";

      render(<CreatePage />);

      const expectedOutput = screen.getByRole("heading", { name: `${text}` });

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
