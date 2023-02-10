import MealAddedStyled from "./MealAddedStyled";

const MealAdded = (): JSX.Element => {
  return (
    <MealAddedStyled className="meal-added-container">
      <i className="fa-solid fa-circle-xmark"></i>
      <div className="meal-added-content">
        <i className="fa-solid fa-check meal-added-content__icon"></i>
        <span className="meal-added-content__message">
          Meal added to your favourites
        </span>
      </div>
    </MealAddedStyled>
  );
};

export default MealAdded;
