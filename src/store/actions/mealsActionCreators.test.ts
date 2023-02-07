import { MealStructure } from "../../data/types";
import { addMealActionCreator } from "./mealsActionCreators";
import { AddMealAction, MealsActionType } from "./types";

describe("Given a addMealActionCreators function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action with type 'addMeal' and the meal as payload", () => {
      const meal: MealStructure = {
        recipe: {
          label: "Rice and chicken",
          image: "",
          images: {
            SMALL: {
              url: "",
            },
          },
          ingredientLines: [],
          calories: 200,
          cuisineType: [],
          totalNutrients: {
            FAT: {
              label: "",
              quantity: 2,
              unit: "mg",
            },
            CHOCDF: {
              label: "",
              quantity: 2,
              unit: "mg",
            },
            SUGAR: {
              label: "",
              quantity: 2,
              unit: "mg",
            },
            PROCNT: {
              label: "",
              quantity: 2,
              unit: "mg",
            },
            CHOLE: {
              label: "",
              quantity: 2,
              unit: "mg",
            },
          },
        },
      };

      const expectedMealAction: AddMealAction = {
        type: MealsActionType.addMeal,
        payload: meal,
      };

      const addMealAtcion = addMealActionCreator(meal);

      expect(addMealAtcion).toStrictEqual(expectedMealAction);
    });
  });
});
