import {
  setIsLoadingAction,
  UiActionType,
  unsetIsLoadingAction,
} from "./types";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "./uiActionCreators";

describe("Given a setIsLoadingCreator function", () => {
  describe("When it is called", () => {
    test("Then it should return an action type 'setIsLoading'", () => {
      const expectedIsLoadingState: setIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };

      const loadState = setIsLoadingActionCreator();

      expect(loadState).toStrictEqual(expectedIsLoadingState);
    });
  });
});

describe("Given a unsetLoading function", () => {
  describe("When it is called", () => {
    test("Then it should return an action type 'unsetLoading'", () => {
      const expectedIsLoadingState: unsetIsLoadingAction = {
        type: UiActionType.unsetIsLoading,
      };

      const loadState = unsetIsLoadingActionCreator();

      expect(loadState).toStrictEqual(expectedIsLoadingState);
    });
  });
});
