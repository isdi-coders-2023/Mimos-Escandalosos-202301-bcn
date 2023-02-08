import { createContext } from "react";
import { MealsStructure } from "../../../data/types";
import { MealsAction } from "../../actions/types";

interface MealsInfoContextStructure {
  meals: MealsStructure;
  dispatch: React.Dispatch<MealsAction>;
}

const MealsInfoContext = createContext({} as MealsInfoContextStructure);

export default MealsInfoContext;
