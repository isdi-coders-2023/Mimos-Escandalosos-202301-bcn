import { MealStructure } from "../../types/types";
import CardStyled from "./CardStyled";

interface CardProps {
  meal: MealStructure;
}

const Card = ({
  meal: {
    recipe: { calories, label, image, cuisineType },
  },
}: CardProps): JSX.Element => {
  return (
    <CardStyled key={calories} className="meal">
      <div className="meal">
        <div>
          <img className="meal__image" alt={label} src={image} />
        </div>
        <div className="meal__data">
          <div className="meal__data-title">
            <h2 className="meal__title">{label}</h2>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="meal__data-calories">
            <i className="fa-solid fa-fire"></i>
            <span className="meal__calories">{Math.ceil(calories)} Kcal</span>
          </div>
          <div className="meal__cuisine-type">
            <span className={`meal__${cuisineType[0]}`}>{cuisineType}</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
