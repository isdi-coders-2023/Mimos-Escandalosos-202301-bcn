import { MealStructure } from "../../data/types";
import CardStyled from "./CardStyled";

interface CardProps {
  meal: MealStructure;
}

const Card = ({ meal }: CardProps): JSX.Element => {
  return (
    <CardStyled className="meal">
      <div className="meal">
        <div>
          <img
            className="meal__image"
            alt={meal.recipe.label}
            src={meal.recipe.image}
          />
        </div>
        <div className="meal__data">
          <div className="meal__data-title">
            <h2 className="meal__title">{meal.recipe.label}</h2>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="meal__data-calories">
            <i className="fa-solid fa-fire"></i>
            <span className="meal__calories">{meal.recipe.calories} Kcal</span>
          </div>
          <div className="meal__cuisine-type">
            <span className={`meal__${meal.recipe.cuisineType[0]}`}>
              {meal.recipe.cuisineType}
            </span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
