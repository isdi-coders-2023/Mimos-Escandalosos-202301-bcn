import { screen, render } from "@testing-library/react";
import { MealsStructure } from "../../types/types";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it rendered", () => {
    test("Then it should show a list of cards", () => {
      const meals: MealsStructure = [
        {
          recipe: {
            uri: "",
            label: "",
            image: "",
            images: { LARGE: { url: "" } },
            ingredientLines: [],
            calories: 0,
            cuisineType: [],
            totalNutrients: {
              fat: { label: "", quantity: 0, unit: "" },
              carbs: { label: "", quantity: 0, unit: "" },
              sugar: { label: "", quantity: 0, unit: "" },
              proteins: { label: "", quantity: 0, unit: "" },
              colesterol: { label: "", quantity: 0, unit: "" },
            },
          },
        },
      ];

      render(<CardList meals={meals} />);

      const card = screen.getByRole("list");

      expect(card).toBeInTheDocument();
    });
  });
});
