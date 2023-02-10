import {
  setIsLoadingAction,
  UiActionType,
  unsetIsLoadingAction,
} from "./types";

export const setIsLoadingActionCreator = (): setIsLoadingAction => ({
  type: UiActionType.setIsLoading,
});

export const unsetIsLoadingActionCreator = (): unsetIsLoadingAction => ({
  type: UiActionType.unsetIsLoading,
});
