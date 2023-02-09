import { createContext } from "react";
import { MealsStructure } from "../../../data/types";
import { MealsAction } from "../../actions/types";

interface MealsInfoContextStructure {
  meals: MealsStructure;
  dispatch: React.Dispatch<MealsAction>;
}

const MealsInfoContext = createContext<MealsInfoContextStructure>(
  {} as MealsInfoContextStructure
);

export default MealsInfoContext;
