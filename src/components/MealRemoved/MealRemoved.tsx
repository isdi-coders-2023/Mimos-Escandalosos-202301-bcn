import MealRemovedStyled from "./MealRemovedStyled";

const MealRemoved = () => {
  return (
    <MealRemovedStyled>
      <i className="fa-solid fa-circle-xmark"></i>
      <div className="meal-removed-content">
        <i className="fa-solid fa-check meal-removed-content__icon"></i>
        <span className="meal-removed-content__message">
          Your meal was removed
        </span>
      </div>
    </MealRemovedStyled>
  );
};

export default MealRemoved;
