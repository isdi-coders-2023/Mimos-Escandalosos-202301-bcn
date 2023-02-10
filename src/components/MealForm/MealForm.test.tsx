import { render, screen } from "@testing-library/react";
import MealForm from "./MealForm";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a Button with the text 'Create meal", () => {
      render(<MealForm />);

      const buttonElement = screen.getByRole("button", { name: "Create meal" });

      expect(buttonElement).toBeInTheDocument();
    });

    test("Then it should show an input that has an aria-label with the text 'Proteins'", () => {
      const text = "Proteins";

      render(<MealForm />);

      const ariaLabel = screen.getByLabelText(text);

      expect(ariaLabel).toBeInTheDocument();
    });
  });
});
