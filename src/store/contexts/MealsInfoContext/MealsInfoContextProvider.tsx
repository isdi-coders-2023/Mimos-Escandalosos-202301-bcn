import { useMemo, useReducer } from "react";
import mealsReducer from "../../../store/reducers/mealsReducer/mealsReducer";
import { MealsStructure } from "../../../types/types";
import MealsInfoContext from "./MealsInfoContext";

export interface MealsInfoContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const MealsInfoContextProvider = ({
  children,
}: MealsInfoContextProviderProps): JSX.Element => {
  const [meals, dispatch] = useReducer(mealsReducer, [
    {
      recipe: {
        calories: 0,
        cuisineType: [""],
        image: "",
        images: {
          small: {
            url: "",
          },
        },
        ingredientLines: [""],
        label: "",
        totalNutrients: {
          carbs: {
            label: "",
            quantity: 0,
            unit: "",
          },
          fat: {
            label: "",
            quantity: 0,
            unit: "",
          },
          colesterol: {
            label: "",
            quantity: 0,
            unit: "",
          },
          proteins: {
            label: "",
            quantity: 0,
            unit: "",
          },
          sugar: {
            label: "",
            quantity: 0,
            unit: "",
          },
        },
        uri: "",
      },
    },
  ] as MealsStructure);
  const mealsProps = useMemo(() => ({ meals, dispatch }), [meals]);

  return (
    <MealsInfoContext.Provider value={mealsProps}>
      {children}
    </MealsInfoContext.Provider>
  );
};
