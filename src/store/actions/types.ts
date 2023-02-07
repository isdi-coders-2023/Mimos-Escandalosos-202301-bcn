import { MealsStructure, MealStructure } from "../../data/types";

export enum MealsActionType {
  loadMeals,
  addMeal,
  editMeal,
  removeMeal,
  toggleMeal,
}

export interface MealsAction {
  type: MealsActionType;
  payload: unknown;
}
export interface LoadMealsAction extends MealsAction {
  payload: MealsStructure;
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
