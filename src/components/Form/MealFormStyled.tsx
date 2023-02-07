import styled from "styled-components";

const MealFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 100vw;
  padding: 20px 0;

  input,
  select {
    border: 2px solid #c1c1c1;
    border-radius: 10px;
    background: #f1f1f1;
    width: 100%;
    height: 35px;
  }

  input::placeholder {
    padding: 0 6px;
  }

  .form-meal {
    &__name {
      height: 35px;
    }

    &__ingredients {
      height: 120px;
    }
  }

  .nutrients {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    &__kcal {
      width: 130px;
      height: 35px;
    }

    &__type {
      width: 130px;
      height: 40px;
    }

    @media (min-width: 800px) {
      &__kcal {
        width: 645px;
        height: 50px;
      }

      &__type {
        width: 645px;
        height: 50px;
      }
    }
  }

  .nutrients-card__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100vw;
    padding-right: 4px;
  }

  .nutrients-info {
    display: flex;
    gap: 10px;
    font-size: 12px;
    align-items: center;
  }

  .nutrient {
    width: 100px;
    height: 30px;
  }
`;

export default MealFormStyled;
