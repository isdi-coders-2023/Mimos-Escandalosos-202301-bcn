import { render, screen } from "@testing-library/react";
import MealNotFound from "./MealNotFound";

describe("Given a MealNotFound component", () => {
  describe("When it renders", () => {
    test("Then it should show the text 'Meal not found'", () => {
      render(<MealNotFound />);
      const messageMealNotFound = "Meal not found";

      const result = screen.getByText(messageMealNotFound);

      expect(result).toBeInTheDocument();
    });
  });
});
