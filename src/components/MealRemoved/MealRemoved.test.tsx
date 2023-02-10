import { render, screen } from "@testing-library/react";
import MealRemoved from "./MealRemoved";

describe("Given a MealRemoved component", () => {
  describe("When it renders", () => {
    test("Then it should show the text 'Your meal was removed'", () => {
      render(<MealRemoved />);
      const messageMealRemoved = "Your meal was removed";

      const result = screen.getByText(messageMealRemoved);

      expect(result).toBeInTheDocument();
    });
  });
});
