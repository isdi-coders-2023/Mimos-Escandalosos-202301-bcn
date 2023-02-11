import MealsInfoContext from "../store/contexts/MealsInfoContext/MealsInfoContext";
import GlobalStyles from "../styles/GlobalStyles";
import { MealsStructure } from "../types/types";

interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: RecipeStructure;
}

interface RecipeStructure {
  dispatch: React.Dispatch<any>;
  meals: MealsStructure;
}

const MockContextProvider = ({
  children,
  mockStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <MealsInfoContext.Provider value={mockStore}>
      <GlobalStyles />
      {children}
    </MealsInfoContext.Provider>
  );
};

export default MockContextProvider;
