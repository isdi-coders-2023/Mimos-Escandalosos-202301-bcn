import { render, screen } from "@testing-library/react";
import MealForm from "./MealForm";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a Button with the text 'Create meal", () => {
      const text = "Create meal";

      render(<MealForm />);

      const buttonElement = screen.getByText(text);

      expect(buttonElement).toBeInTheDocument();
    });

    test("Then it should show a 'select' tag", () => {
      render(<MealForm />);

      const selectTag = screen.getByRole("combobox");

      expect(selectTag).toBeInTheDocument();
    });
  });
});
