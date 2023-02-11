import { useContext, useEffect } from "react";
import { useApi } from "../../hook/useApi";
import MealsInfoContext from "../../store/contexts/MealsInfoContext/MealsInfoContext";
import CardList from "../CardList/CardList";
import { SearchBar } from "../SearchBar/SearchBar";

export const HomePage = (): JSX.Element => {
  const { getApiData } = useApi();

  const { meals } = useContext(MealsInfoContext);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      <h1 aria-label="What do you want to cook?">What do you want to cook?</h1>
      <span>Enter some ingredients</span>
      <SearchBar />
      <CardList meals={meals} />
    </>
  );
};
