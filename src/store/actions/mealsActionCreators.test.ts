import { MealsStructure, MealStructure } from "../../data/types";
import {
  addMealActionCreator,
  loadMealsActionCreator,
  removeMealActionCreator,
} from "./mealsActionCreators";
import {
  AddMealAction,
  LoadMealsAction,
  MealsActionType,
  RemoveMealAction,
} from "./types";

describe("Given a loadMealsActionCreator function", () => {
  describe("When it receives a list of two meals", () => {
    test("Then it should return an action typed 'loadMeals' and the two meals as payload", () => {
      const meals: MealsStructure = [
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
        {
          recipe: {
            label: "Tomatoe salad",
            image: "",
            images: {
              LARGE: {
                url: "",
              },
            },
            ingredientLines: [],
            calories: 125,
            cuisineType: [],
            totalNutrients: {
              FAT: {
                label: "",
                quantity: 2,
                unit: "mg",
              },
              CHOCDF: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              SUGAR: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              PROCNT: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              CHOLE: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
            },
          },
        },
      ];

      const expectedMealsList: LoadMealsAction = {
        type: MealsActionType.loadMeals,
        payload: meals,
      };

      const loadMealsAction = loadMealsActionCreator(meals);

      expect(loadMealsAction).toStrictEqual(expectedMealsList);
    });
  });
});

describe("Given an addMealActionCreator function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action typed 'addMeal' and the meal as payload", () => {
      const meal: MealStructure = {
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
      };

      const expectedActionAndMeal: AddMealAction = {
        type: MealsActionType.addMeal,
        payload: meal,
      };

      const addMealAction = addMealActionCreator(meal);

      expect(addMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});

describe("Given a removeMealActionCreation function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action typed 'removeMeal' and the meal as payload", () => {
      const meal: MealStructure = {
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
      };

      const expectedActionAndMeal: RemoveMealAction = {
        type: MealsActionType.removeMeal,
        payload: meal,
      };

      const removeMealAction = removeMealActionCreator(meal);

      expect(removeMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});
