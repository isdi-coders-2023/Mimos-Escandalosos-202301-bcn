import { render, screen } from "@testing-library/react";
import MealAdded from "./MealAdded";

describe("Given a MealAdded component", () => {
  describe("When it renders", () => {
    test("Then it should show the text 'Meal added to your favourites'", () => {
      render(<MealAdded />);
      const messageMealAdded = "Meal added to your favourites";

      const result = screen.getByText(messageMealAdded);

      expect(result).toBeInTheDocument();
    });
  });
});
