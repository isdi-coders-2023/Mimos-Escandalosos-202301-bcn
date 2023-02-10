import {
  LoadMealsAction,
  MealsAction,
  MealsActionType,
} from "../store/actions/mealsAction/types";
import { MealsStructure } from "../types/types";

export const dispatch: React.Dispatch<MealsAction> = jest.fn();
export const meals: MealsStructure = [];
export const mockStore = { dispatch, meals: [] as MealsStructure };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadMealsAction: LoadMealsAction = {
  type: MealsActionType.loadMeals,
  payload: meals,
};
