import { MealsStructure } from "../../data/types";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  meals: MealsStructure;
}

const CardList = ({ meals }: CardListProps): JSX.Element => {
  return (
    <CardListStyled className="meal-list">
      {meals.map((meal, index) => (
        <li key={`meal-${index}`}>
          <Card meal={meal} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;

//key = id
