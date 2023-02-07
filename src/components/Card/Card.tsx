import CardStyled from "./CardStyled";

const Card = (): JSX.Element => {
  return (
    <CardStyled className="meal">
      <div className="meal">
        <div>
          <img className="meal__image" alt="" />
        </div>
        <div className="meal__data">
          <div className="meal__data-title">
            <h2 className="meal__title">Chorizo & mozzarella gnocchi bake</h2>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="meal__data-calories">
            <i className="fa-solid fa-fire"></i>
            <span className="meal__calories">350 Kcal</span>
          </div>
          <div className="meal__cuisine-type">
            <span className="meal__mediterranean">Mediterranean</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
