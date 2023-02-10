import styled from "styled-components";

const MealNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 10px;

  .meal-not-found-container {
    display: flex;
    background-color: #ee9a87;
    margin: auto;
  }

  i {
    font-size: 18px;
  }

  .meal-not-found-content__icon {
    display: flex;
    color: #ee9a87;
    font-size: 20px;
  }

  .meal-not-found-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #ee9a87;
    border-radius: 10px;
    width: 250px;
    height: 90px;
    gap: 10px;
  }
`;

export default MealNotFoundStyled;
