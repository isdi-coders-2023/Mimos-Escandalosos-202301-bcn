import { MealsStructure, MealStructure } from "../../../types/types";
import {
  AddMealAction,
  EditMealAction,
  LoadMealsAction,
  MealsActionType,
  RemoveMealAction,
  AddFavouriteMealAction,
} from "./types";

export const loadMealsActionCreator = (
  meals: MealsStructure
): LoadMealsAction => ({
  type: MealsActionType.loadMeals,
  payload: meals,
});

export const addMealActionCreator = (meal: MealStructure): AddMealAction => ({
  type: MealsActionType.addMeal,
  payload: meal,
});

export const editMealActionCreator = (meal: MealStructure): EditMealAction => ({
  type: MealsActionType.updateMeal,
  payload: meal,
});

export const removeMealActionCreator = (
  meal: MealStructure
): RemoveMealAction => ({
  type: MealsActionType.removeMeal,
  payload: meal,
});

export const addFavouriteMealActionCreator = (
  meal: MealStructure
): AddFavouriteMealAction => ({
  type: MealsActionType.addFavouriteMeal,
  payload: meal,
});
