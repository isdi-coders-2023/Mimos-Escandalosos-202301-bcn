import { MealsStructure } from "../../../types/types";
import {
  LoadMealsAction,
  MealsActionType,
} from "../../actions/mealsAction/types";

import mealsReducer from "./mealsReducer";

describe("Given mealsReducer", () => {
  describe("When it receives the action loadMeals and a list of meals", () => {
    test("Then it should return the same list of meals", () => {
      const currentMealsList: MealsStructure = [];
      const mealsList = [
        {
          recipe: {
            uri: "",
            label: "Rice and chicken",
            image: "",
            images: {
              LARGE: {
                url: "",
              },
            },
            ingredientLines: [],
            calories: 200,
            cuisineType: [],
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
        },
      ];
      const action: LoadMealsAction = {
        type: MealsActionType.loadMeals,
        payload: mealsList,
      };

      const expectedMealList = mealsReducer(currentMealsList, action);

      expect(mealsList).toStrictEqual(expectedMealList);
    });
  });

  describe("When it receives a new list of meals without an action", () => {
    test("Then it should return the current list of meals", () => {
      const currentMealsList: MealsStructure = [
        {
          recipe: {
            uri: "",
            label: "Rice and chicken",
            image: "",
            images: {
              LARGE: {
                url: "",
              },
            },
            ingredientLines: [],
            calories: 200,
            cuisineType: [],
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
        },
        {
          recipe: {
            uri: "",
            label: "Rice and chicken",
            image: "",
            images: {
              LARGE: {
                url: "",
              },
            },
            ingredientLines: [],
            calories: 200,
            cuisineType: [],
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
        },
      ];
      const action = {} as LoadMealsAction;

      const expectedMealList = mealsReducer(currentMealsList, action);

      expect(currentMealsList).toStrictEqual(expectedMealList);
    });
  });
});
