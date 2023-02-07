import { MealStructure } from "../../data/types";

export enum MealsActionType {
  addMeal,
  editMeal,
  removeMeal,
  toggleMeal,
}

export interface MealsAction {
  type: MealsActionType;
  payload: unknown;
}

export interface AddMealAction extends MealsAction {
  payload: MealStructure;
}

export interface EditMealAction extends MealsAction {
  payload: MealStructure;
}

export interface RemoveMealAction extends MealsAction {
  payload: MealStructure;
}

export interface ToggleMealAction extends MealsAction {
  payload: MealStructure;
}
