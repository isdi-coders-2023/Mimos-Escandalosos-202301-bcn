import MealFormStyled from "./MealFormStyled";

const MealForm = (): JSX.Element => {
  return (
    <>
      <MealFormStyled className="form-meal">
        <input
          className="form-meal__name"
          type="text"
          aria-label="Meal name"
          placeholder="Meal name"
        />
        <div className="form-meal__nutrients nutrients">
          <div className="nutrients-card__info">
            <input
              className="nutrients__kcal"
              type="text"
              aria-label="Kcal"
              placeholder="Kcal"
            />
            <select
              className="nutrients__type"
              name="Cuisine type"
              id="type-select"
            >
              Cuisine type
            </select>
          </div>
          <div className="nutrients-info">
            <input
              className=" nutrients__fat nutrient"
              type="text"
              aria-label="Fat"
              placeholder="Fat"
            />
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <input
              className=" nutrients__sugar nutrient"
              type="text"
              aria-label="Sugar"
              placeholder="Sugar"
            />
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <input
              className="nutrients__carbs nutrient"
              type="text"
              aria-label="Carbs"
              placeholder="Carbs"
            />
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <input
              className="nutrients__colesterol nutrient"
              type="text"
              aria-label="Colesterol"
              placeholder="Colesterol"
            />
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <input
              className="nutrients__proteins nutrient"
              type="text"
              aria-label="Proteins"
              placeholder="Proteins"
            />
            <span>mg</span>
          </div>
        </div>
        <input
          className="form-meal__ingredients"
          type="text"
          aria-label="Ingredients"
          placeholder="Ingredients"
        />
        <input
          className="form-meal__image"
          type="image"
          aria-label="Meal image"
          placeholder="Add your image"
        />
        <button className="submit-form">Create meal</button>
      </MealFormStyled>
    </>
  );
};

export default MealForm;
