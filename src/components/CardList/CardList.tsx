import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  return (
    <CardListStyled className="meal-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListStyled>
  );
};

export default CardList;
