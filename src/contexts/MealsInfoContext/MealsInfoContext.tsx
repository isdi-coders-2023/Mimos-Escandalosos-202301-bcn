import { createContext } from "react";
import MealsInfoStructure from "../../data/types";

interface MealsInfoContextStructure {
  meals: MealsInfoStructure;
  dispatch: React.Dispatch<any>;
}

const MealsInfoContext = createContext({} as MealsInfoContextStructure);

export default MealsInfoContext;
