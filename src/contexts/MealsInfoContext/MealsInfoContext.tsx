import { createContext } from "react";
import { MealStructure } from "../../data/types";

interface MealsInfoContextStructure {
  meals: MealStructure;
  dispatch: React.Dispatch<any>;
}

const MealsInfoContext = createContext({} as MealsInfoContextStructure);

export default MealsInfoContext;
