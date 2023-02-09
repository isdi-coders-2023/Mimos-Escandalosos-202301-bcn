import { render, screen } from "@testing-library/react";
import MealForm from "./MealForm";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a Button with the text 'Create meal", () => {
      render(<MealForm />);

      const buttonElement = screen.getByRole("button", { name: "Create meal" });

      expect(buttonElement).toBeInTheDocument();
    });

    test("Then it should show a drop down", () => {
      render(<MealForm />);

      const selectTag = screen.getByRole("combobox");

      expect(selectTag).toBeInTheDocument();
    });
  });
});
