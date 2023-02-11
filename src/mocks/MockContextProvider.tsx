import { UiAction } from "../store/actions/uiAction/types";
import MealsInfoContext from "../store/contexts/MealsInfoContext/MealsInfoContext";
import { UiContext } from "../store/contexts/uiContext/UiContext";
import GlobalStyles from "../styles/GlobalStyles";
import { MealsStructure } from "../types/types";

interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: RecipeStructure;
  uiStore: UiStructure;
}

interface RecipeStructure {
  dispatch: React.Dispatch<any>;
  meals: MealsStructure;
}

export interface UiStructure {
  dispatch: React.Dispatch<UiAction>;
  isLoading: boolean;
}

const MockContextProvider = ({
  children,
  mockStore,
  uiStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <UiContext.Provider value={uiStore}>
      <MealsInfoContext.Provider value={mockStore}>
        <GlobalStyles />
        {children}
      </MealsInfoContext.Provider>
    </UiContext.Provider>
  );
};

export default MockContextProvider;
