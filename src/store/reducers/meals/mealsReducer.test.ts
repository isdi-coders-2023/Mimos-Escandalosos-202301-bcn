import { MealsStructure } from "../../../data/types";
import { LoadMealsAction, MealsActionType } from "../../actions/types";
import mealsReducer from "./mealsReducer";

describe("Given mealsReducer", () => {
  describe("When it receives the action loadMeals and a list of meals", () => {
    test("Then it should return the same list of meals", () => {
      const currentMealsList: MealsStructure = [];
      const mealsList = [
        {
          recipe: {
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
});
