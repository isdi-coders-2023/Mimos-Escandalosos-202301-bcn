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

export interface RemoveMeal {
  payload: MealStructure;
}

export interface toggleMeal extends MealsAction {
  payload: MealStructure;
}
