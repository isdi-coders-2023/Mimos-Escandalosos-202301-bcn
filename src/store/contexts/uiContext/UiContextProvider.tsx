import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/uiReducer/uiReducer";
import { UiContext } from "./UiContext";

export interface UiContxetProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UiContextProvider = ({
  children,
}: UiContxetProviderProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, true);

  const store = useMemo(() => ({ isLoading, dispatch }), [isLoading, dispatch]);

  return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
};
