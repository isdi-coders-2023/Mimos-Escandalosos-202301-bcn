import MealForm from "../Form/MealForm";
import Header from "../Header/Header";
import { useApi } from "../../Hook/useApi";
import { useContext, useEffect } from "react";
import MealsInfoContext from "../../store/contexts/MealsInfoContext/MealsInfoContext";
import CardList from "../CardList/CardList";

const App = (): JSX.Element => {
  const { getApiData } = useApi();

  const { meals } = useContext(MealsInfoContext);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      <Header />
      <CardList meals={meals} />
      <MealForm />
    </>
  );
};

export default App;
