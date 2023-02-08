import { useMemo, useReducer } from "react";
import mealsReducer from "../../store/reducers/meals/mealsReducer";
import MealsInfoContext from "./MealsInfoContext";

export interface MealsInfoContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const MealsInfoContextProvider = ({
  children,
}: MealsInfoContextProviderProps): JSX.Element => {
  const [meals, dispatch] = useReducer(mealsReducer, []);
  const mealsProps = useMemo(() => ({ meals, dispatch }), [meals]);

  return (
    <MealsInfoContext.Provider value={mealsProps}>
      {children}
    </MealsInfoContext.Provider>
  );
};
