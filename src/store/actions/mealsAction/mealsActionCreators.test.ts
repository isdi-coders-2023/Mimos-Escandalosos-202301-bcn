import { MealsStructure, MealStructure } from "../../../types/types";
import {
  addFavouriteMealActionCreator,
  addMealActionCreator,
  editMealActionCreator,
  loadMealsActionCreator,
  removeMealActionCreator,
} from "./mealsActionCreators";
import {
  AddFavouriteMealAction,
  AddMealAction,
  EditMealAction,
  LoadMealsAction,
  MealsActionType,
  RemoveMealAction,
} from "./types";

const meal: MealStructure = {
  recipe: {
    uri: "",
    label: "Rice and chicken",
    image: "",
    images: {
      small: {
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
};

describe("Given a loadMealsActionCreator function", () => {
  describe("When it receives a list of two meals", () => {
    test("Then it should return an action typed 'loadMeals' and the two meals as payload", () => {
      const meals: MealsStructure = [
        {
          recipe: {
            uri: "",
            label: "Rice and chicken",
            image: "",
            images: {
              small: {
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
            label: "Tomatoe salad",
            image: "",
            images: {
              small: {
                url: "",
              },
            },
            ingredientLines: [],
            calories: 125,
            cuisineType: [],
            totalNutrients: {
              fat: {
                label: "",
                quantity: 2,
                unit: "mg",
              },
              carbs: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              sugar: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              proteins: {
                label: "",
                quantity: 5,
                unit: "mg",
              },
              colesterol: {
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
      const expectedActionAndMeal: AddMealAction = {
        type: MealsActionType.addMeal,
        payload: meal,
      };

      const addMealAction = addMealActionCreator(meal);

      expect(addMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});

describe("Given a editMealActionCreator function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action typed 'editMeal' and the meal as a payload", () => {
      const expectedActionAndMeal: EditMealAction = {
        type: MealsActionType.updateMeal,
        payload: meal,
      };

      const editMealAction = editMealActionCreator(meal);

      expect(editMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});

describe("Given a removeMealActionCreator function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action typed 'removeMeal' and the meal as payload", () => {
      const expectedActionAndMeal: RemoveMealAction = {
        type: MealsActionType.removeMeal,
        payload: meal,
      };

      const removeMealAction = removeMealActionCreator(meal);

      expect(removeMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});

describe("Given a addFavouriteMealActionCreator function", () => {
  describe("When it receives a meal", () => {
    test("Then it should return an action typed 'addFavouriteMeal' and the meal as payload", () => {
      const expectedActionAndMeal: AddFavouriteMealAction = {
        type: MealsActionType.addFavouriteMeal,
        payload: meal,
      };

      const addFavouriteMealAction = addFavouriteMealActionCreator(meal);

      expect(addFavouriteMealAction).toStrictEqual(expectedActionAndMeal);
    });
  });
});
