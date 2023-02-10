import styled from "styled-components";

const MealRemovedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 10px;

  .meal-removed-container {
    display: flex;
    background-color: #94cf97;
    margin: auto;
  }

  i {
    font-size: 18px;
  }

  .meal-removed-content__icon {
    display: flex;
    color: #94cf97;
    font-size: 20px;
  }

  .meal-removed-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #1cb802;
    border-radius: 10px;
    width: 250px;
    height: 90px;
    gap: 10px;
  }
`;

export default MealRemovedStyled;
