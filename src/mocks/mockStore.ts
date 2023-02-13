import {
  LoadMealsAction,
  MealsAction,
  MealsActionType,
} from "../store/actions/mealsAction/types";
import { UiAction, UiActionType } from "../store/actions/uiAction/types";
import { MealsStructure } from "../types/types";

export const dispatch: React.Dispatch<MealsAction> = jest.fn();
export const meals: MealsStructure = [];
export const mockStore = { dispatch, meals: [] };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadMealsAction: LoadMealsAction = {
  type: MealsActionType.loadMeals,
  payload: meals,
};

export const isLoading = true;
export const uiDispatch: React.Dispatch<UiAction> = jest.fn();
export const uiMockStore = { dispatch: uiDispatch, isLoading };
export const uiMockDispatch = jest.spyOn(uiMockStore, "dispatch");
export const mockIsLoadingAction: UiAction = {
  type: UiActionType.setIsLoading,
};
