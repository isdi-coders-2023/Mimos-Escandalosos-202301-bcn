import { UiAction, UiActionType } from "../../actions/uiAction/types";
import uiReducer from "./uiReducer";

describe("Given the uiReducer", () => {
  describe("When it receives a setLoading action", () => {
    test("Then it should change the current state to true", () => {
      const currentState = false;
      const expectedState = true;

      const action: UiAction = {
        type: UiActionType.setIsLoading,
        payload: currentState,
      };

      const newUiState = uiReducer(currentState, action);

      expect(newUiState).toBe(expectedState);
    });
  });
  describe("When it receives a unsetLoading action", () => {
    test("Then it should change the current state to true", () => {
      const currentState = true;
      const expectedState = false;

      const action: UiAction = {
        type: UiActionType.unsetIsLoading,
        payload: currentState,
      };

      const newUiState = uiReducer(currentState, action);

      expect(newUiState).toBe(expectedState);
    });
  });

  describe("When it receives an uknown action", () => {
    test("Then it should change the current state to true", () => {
      const currentState = true;
      const expectedState = currentState;

      const action: UiAction = {
        type: UiActionType.default,
      };

      const newUiState = uiReducer(currentState, action);

      expect(newUiState).toBe(expectedState);
    });
  });
});
