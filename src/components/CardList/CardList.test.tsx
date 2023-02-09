import { screen, render } from "@testing-library/react";
import { MealsStructure } from "../../data/types";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it rendered", () => {
    test("Then it should show a list of cards", () => {
      const meals: MealsStructure = [
        {
          recipe: {
            label: "",
            image: "",
            images: { LARGE: { url: "" } },
            ingredientLines: [],
            calories: 0,
            cuisineType: [],
            totalNutrients: {
              FAT: { label: "", quantity: 0, unit: "" },
              CHOCDF: { label: "", quantity: 0, unit: "" },
              SUGAR: { label: "", quantity: 0, unit: "" },
              PROCNT: { label: "", quantity: 0, unit: "" },
              CHOLE: { label: "", quantity: 0, unit: "" },
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
