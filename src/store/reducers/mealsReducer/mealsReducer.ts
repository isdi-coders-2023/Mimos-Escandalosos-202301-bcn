import { MealsStructure } from "../../../types/types";
import {
  LoadMealsAction,
  MealsAction,
  MealsActionType,
} from "../../../store/actions/mealsAction/types";

const mealsReducer = (
  currentMeals: MealsStructure,
  action: MealsAction
): MealsStructure => {
  let newMeals: MealsStructure;

  if (action.type === MealsActionType.loadMeals) {
    newMeals = [...(action as LoadMealsAction).payload];
  } else {
    newMeals = currentMeals;
  }

  return newMeals;
};

export default mealsReducer;
