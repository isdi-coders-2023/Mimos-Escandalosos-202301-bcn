export interface MealsInfoContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MealsInfoContextProvider = ({
  children,
}: MealsInfoContextProviderProps): JSX.Element => {
  return <MealsInfoContextProvider>{children}</MealsInfoContextProvider>;
};
