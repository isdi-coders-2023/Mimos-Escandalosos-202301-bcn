import MealNotFoundStyled from "./MealNotFoundStyled";

const MealNotFound = () => {
  return (
    <MealNotFoundStyled>
      <i className="fa-solid fa-circle-xmark"></i>
      <div className="meal-not-found-content">
        <i className="fa-solid fa-x meal-not-found-content__icon"></i>
        <span className="meal-not-found-content__message">Meal not found</span>
      </div>
    </MealNotFoundStyled>
  );
};

export default MealNotFound;
