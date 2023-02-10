import { createContext } from "react";
import { UiAction } from "../../actions/uiAction/types";

export interface UiContextStructure {
  isLoading: boolean;
  dispatch: React.Dispatch<UiAction>;
}

export const UiContext = createContext({} as UiContextStructure);
