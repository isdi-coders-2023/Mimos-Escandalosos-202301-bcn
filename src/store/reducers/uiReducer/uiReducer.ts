import { UiAction, UiActionType } from "../../actions/uiAction/types";

const uiReducer = (currentIsLoading: boolean, action: UiAction) => {
  let newLoadStatus: boolean;

  switch (action.type) {
    case UiActionType.setIsLoading:
      newLoadStatus = true;
      break;

    case UiActionType.unsetIsLoading:
      newLoadStatus = false;
      break;

    default:
      newLoadStatus = currentIsLoading;
  }
  return newLoadStatus;
};

export default uiReducer;
