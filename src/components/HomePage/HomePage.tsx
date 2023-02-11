import { useContext, useEffect } from "react";
import { useApi } from "../../hook/useApi";
import MealsInfoContext from "../../store/contexts/MealsInfoContext/MealsInfoContext";
import CardList from "../CardList/CardList";
import { SearchBar } from "../SearchBar/SearchBar";
import HomePageStyled from "./HomePageStyled";

export const HomePage = (): JSX.Element => {
  const { getApiData } = useApi();

  const { meals } = useContext(MealsInfoContext);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <HomePageStyled className="home-page">
      <h1 aria-label="What do you want to cook?" className="home-page__title">
        What do you want to cook?
      </h1>
      <span className="home-page__description">Enter some ingredients</span>
      <SearchBar />
      <CardList meals={meals} />
    </HomePageStyled>
  );
};
