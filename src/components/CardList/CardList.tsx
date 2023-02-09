import { MealsStructure } from "../../data/types";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  meals: MealsStructure;
}

const CardList = ({ meals }: CardListProps): JSX.Element => {
  meals.forEach((meal) => {
    const idSplitted = meal.recipe.id.split("#");
    meal.recipe.id = idSplitted[1];
  });

  return (
    <CardListStyled className="meal-list">
      {meals.map((meal) => (
        <li key={meal.recipe.id}>
          <Card meal={meal} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
