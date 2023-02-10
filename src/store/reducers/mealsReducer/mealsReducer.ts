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

  switch (action.type) {
    case MealsActionType.loadMeals:
      newMeals = [...(action as LoadMealsAction).payload];
      break;
    default:
      newMeals = currentMeals;
  }

  return newMeals;
};

export default mealsReducer;
