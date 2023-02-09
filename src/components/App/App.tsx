import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import MealsInfoContext from "../../store/contexts/MealsInfoContext/MealsInfoContext";
import CardList from "../CardList/CardList";
import { useApi } from "../../hook/useApi";

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
    </>
  );
};

export default App;
