import { MealStructure } from "../../data/types";
import {
  AddMealAction,
  EditMealAction,
  MealsActionType,
  RemoveMealAction,
  ToggleMealAction,
} from "./types";

export const addMealActionCreator = (meal: MealStructure): AddMealAction => ({
  type: MealsActionType.addMeal,
  payload: meal,
});

export const editMealActionCreator = (meal: MealStructure): EditMealAction => ({
  type: MealsActionType.editMeal,
  payload: meal,
});

export const removeMealActionCreator = (
  meal: MealStructure
): RemoveMealAction => ({
  type: MealsActionType.removeMeal,
  payload: meal,
});

export const toggleMealActionCreator = (
  meal: MealStructure
): ToggleMealAction => ({
  type: MealsActionType.toggleMeal,
  payload: meal,
});
