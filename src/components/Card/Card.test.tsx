import { render, screen } from "@testing-library/react";
import { MealStructure } from "../../data/types";

import Card from "./Card";

describe("Given a Card component function", () => {
  describe("When it renders", () => {
    const meal: MealStructure = {
      recipe: {
        id: "",
        label: "Chorizo & mozzarella gnocchi bake",
        image: "",
        images: {
          LARGE: {
            url: "",
          },
        },
        ingredientLines: [],
        calories: 200,
        cuisineType: ["mediterranean"],
        totalNutrients: {
          fat: {
            label: "",
            quantity: 2,
            unit: "mg",
          },
          carbs: {
            label: "",
            quantity: 2,
            unit: "mg",
          },
          sugar: {
            label: "",
            quantity: 2,
            unit: "mg",
          },
          proteins: {
            label: "",
            quantity: 2,
            unit: "mg",
          },
          colesterol: {
            label: "",
            quantity: 2,
            unit: "mg",
          },
        },
      },
    };
    test("Then it should show an img", () => {
      render(<Card meal={meal} />);
      const imageMeal = screen.getByRole("img");

      expect(imageMeal).toBeInTheDocument();
    });

    test("Then it should a header with text 'Chorizo & mozzarella gnocchi bake' text", () => {
      render(<Card meal={meal} />);
      const showMealTitle = "Chorizo & mozzarella gnocchi bake";

      const result = screen.getByText(showMealTitle);

      expect(result).toBeInTheDocument();
    });
  });
});
