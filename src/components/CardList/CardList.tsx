import { MealsStructure } from "../../data/types";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  meals: MealsStructure;
}

const CardList = ({ meals }: CardListProps): JSX.Element => {
  return (
    <CardListStyled className="meal-list">
      {meals.map((meal) => (
        <Card meal={meal} key={meal.recipe.uri.slice(51)} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
