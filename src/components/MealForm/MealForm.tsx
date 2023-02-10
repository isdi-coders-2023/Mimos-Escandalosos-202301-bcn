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
          required
        />
        <div className="form-meal__nutrients nutrients">
          <div className="nutrients-card__info">
            <div className="info-labels">
              <label htmlFor="Kcal">Kcal</label>
              <input
                className="nutrients__kcal"
                type="text"
                aria-label="Kcal"
                placeholder="Kcal"
                required
              />
            </div>
            <div className="info-labels">
              <label htmlFor="Cuisine type">Cuisine type</label>
              <select
                className="nutrients__type"
                name="Cuisine type"
                id="type-select"
                required
              >
                Cuisine type
              </select>
            </div>
          </div>
          <div className="nutrients-info">
            <div className="info-labels">
              <label htmlFor="Fat">Fat</label>
              <input
                className=" nutrients__fat nutrient"
                type="text"
                aria-label="Fat"
                placeholder="Fat"
                required
              />
            </div>
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <div className="info-labels">
              <label htmlFor="Sugar">Sugar</label>
              <input
                className=" nutrients__sugar nutrient"
                type="text"
                aria-label="Sugar"
                placeholder="Sugar"
                required
              />
            </div>
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <div className="info-labels">
              <label htmlFor="Carbs">Carbs</label>
              <input
                className="nutrients__carbs nutrient"
                type="text"
                aria-label="Carbs"
                placeholder="Carbs"
                required
              />
            </div>
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <div className="info-labels">
              <label htmlFor="Colesterol">Colesterol</label>
              <input
                className="nutrients__colesterol nutrient"
                type="text"
                aria-label="Colesterol"
                placeholder="Colesterol"
                required
              />
            </div>
            <span>mg</span>
          </div>
          <div className="nutrients-info">
            <div className="info-labels">
              <label htmlFor="Proteins">Proteins</label>
              <input
                className="nutrients__proteins nutrient"
                type="text"
                aria-label="Proteins"
                placeholder="Proteins"
                required
              />
            </div>
            <span>mg</span>
          </div>
        </div>
        <textarea
          className="form-meal__ingredients"
          aria-label="Ingredients"
          placeholder="Ingredients"
          required
        />
        <input
          className="form-meal__image"
          type="text"
          aria-label="Meal image"
          placeholder="Add your image"
          required
        />
        <div className="form-meal__submit submit">
          <button className="submit__button">Create meal</button>
        </div>
      </MealFormStyled>
    </>
  );
};

export default MealForm;
