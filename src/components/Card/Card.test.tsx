import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it rendered", () => {
    test("Then it should show an img", () => {
      render(<Card />);

      const imageMeal = screen.getByRole("img");

      expect(imageMeal).toBeInTheDocument();
    });

    test("Then it should show a header2", () => {
      render(<Card />);

      const heading = screen.getByRole("heading", { level: 2 });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should a header with text 'Chorizo & mozzarella gnocchi bake' text", () => {
      render(<Card />);

      const showMealTitle = "Chorizo & mozzarella gnocchi bake";

      const result = screen.getByText(showMealTitle);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show text with calories '350 Kcal'", () => {
      render(<Card />);

      const showMealCalories = "350 Kcal";

      const result = screen.getByText(showMealCalories);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a text with cuisine type 'Mediterranean'", () => {
      render(<Card />);

      const showCuisinetype = "Mediterranean";

      const result = screen.getByText(showCuisinetype);

      expect(result).toBeInTheDocument();
    });
  });
});
