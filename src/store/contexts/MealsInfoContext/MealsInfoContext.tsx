import { createContext } from "react";
import { MealsStructure } from "../../../types/types";
import { MealsAction } from "../../actions/mealsAction/types";

interface MealsInfoContextStructure {
  meals: MealsStructure;
  dispatch: React.Dispatch<MealsAction>;
}

const MealsInfoContext = createContext<MealsInfoContextStructure>(
  {} as MealsInfoContextStructure
);

export default MealsInfoContext;
