import MealFormStyled from "./MealFormStyled";

const MealForm = (): JSX.Element => {
  return (
    <>
      <MealFormStyled className="form-meal">
        <div className="form-meal__meal-name">
          <label htmlFor="meal-name">Meal name</label>
          <input
            className="form-meal__name"
            type="text"
            aria-label="Meal name"
            placeholder="Meal name"
            required
          />
        </div>
        <div className="form-meal__nutrients">
          <div className="info-values">
            <label htmlFor="Kcal">Kcal</label>
            <input
              className="info__data"
              type="text"
              aria-label="Kcal"
              placeholder="Kcal"
              required
            />
          </div>
          <div className="info-values">
            <label htmlFor="Cuisine type">Cuisine type</label>
            <select className="info__data" id="type-select" required>
              Cuisine type
            </select>
          </div>
        </div>
        <div className="form-meal__nutrients-info info">
          <div className="info-values">
            <label htmlFor="Fat">Fat</label>
            <div className="info-unit">
              <input
                className="info__data"
                type="text"
                aria-label="Fat"
                placeholder="Fat"
                required
              />
              <span>mg</span>
            </div>
          </div>
          <div className="info-values">
            <label htmlFor="Sugar">Sugar</label>
            <div className="info-unit">
              <input
                className="info__data"
                type="text"
                aria-label="Sugar"
                placeholder="Sugar"
                required
              />
              <span>mg</span>
            </div>
          </div>
        </div>
        <div className="form-meal__nutrients-info info">
          <div className="info-values">
            <label htmlFor="Carbs">Carbs</label>
            <div className="info-unit">
              <input
                className="info__data"
                type="text"
                aria-label="Carbs"
                placeholder="Carbs"
                required
              />
              <span>mg</span>
            </div>
          </div>
          <div className="info-values">
            <label htmlFor="Colesterol">Colesterol</label>
            <div className="info-unit">
              <input
                className="info__data"
                type="text"
                aria-label="Colesterol"
                placeholder="Colesterol"
                required
              />
              <span>mg</span>
            </div>
          </div>
        </div>
        <div className="form-meal__proteins">
          <div className="info-values">
            <label htmlFor="Proteins">Proteins</label>
            <div className="info-unit">
              <input
                className="info__data"
                type="text"
                aria-label="Proteins"
                placeholder="Proteins"
                required
              />
              <span>mg</span>
            </div>
          </div>
        </div>
        <div className="form-meal__ingredients ingredients">
          <label htmlFor="Ingredients">Ingredients</label>
          <textarea
            className="ingredients__data"
            aria-label="Ingredients"
            placeholder="Ingredients"
            required
          />
        </div>
        <div className="form-meal__image image">
          <label htmlFor="Image">Image</label>
          <input
            className="image__data"
            type="text"
            aria-label="Meal image"
            placeholder="Add your image"
            required
          />
        </div>
        <div className="form-meal__submit submit">
          <button className="submit__button">Create meal</button>
        </div>
      </MealFormStyled>
    </>
  );
};

export default MealForm;
