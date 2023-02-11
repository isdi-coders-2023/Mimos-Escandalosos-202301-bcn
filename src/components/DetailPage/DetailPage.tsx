import { useContext, useEffect } from "react";
import { useApi } from "../../hook/useApi";
import MealsInfoContext from "../../store/contexts/MealsInfoContext/MealsInfoContext";
import { MealStructure } from "../../types/types";
import DetailPageStyled from "./DetailPageStyled";

interface DetailsProps {
  meal: MealStructure;
}

const DetailPage = ({
  meal: {
    recipe: { calories, label, image, cuisineType, ingredientLines },
  },
}: DetailsProps): JSX.Element => {
  const { getApiData } = useApi();

  const { meals } = useContext(MealsInfoContext);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      {meals.length > 0 && (
        <DetailPageStyled key={calories} className="detail">
          <img className="detail__image" alt={label} src={image} />
          <div className="detail__heading">
            <h1 className="detail__title">{label}</h1>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="detail__cuisine-type">
            <span className={`meal__${cuisineType[0]}`}>{cuisineType}</span>
          </div>

          <div className="detail__data-calories">
            <i className="fa-solid fa-fire"></i>
            <span className="meal__calories">{calories} Kcal</span>
          </div>

          <div className="detail__ingredients">
            <span className="meal__calories">{ingredientLines} </span>
          </div>

          <div className="detail__macros"></div>
        </DetailPageStyled>
      )}
    </>
  );
};

export default DetailPage;
