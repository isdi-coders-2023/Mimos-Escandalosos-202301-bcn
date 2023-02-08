import styled from "styled-components";

const MealFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;

  @media (min-width: 800px) {
    width: 800px;
    align-self: center;
  }

  input {
    border: 2px solid #c1c1c1;
    border-radius: 10px;
    background: #f1f1f1;
    height: 35px;
    width: 100%;
    padding: 0 6px;
  }

  input::placeholder {
    padding: 0 6px;
  }

  input:focus {
    border-color: #edb14d;
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
    gap: 20px;

    &__kcal {
      width: 130px;
      height: 35px;
    }

    &__type {
      width: 130px;
      height: 35px;
      border: 2px solid #c1c1c1;
      border-radius: 10px;
      background: #f1f1f1;
    }

    @media (min-width: 800px) {
      &__kcal {
        width: 350px;
        height: 35px;
      }

      &__type {
        width: 350px;
        height: 35px;
      }
    }
  }

  .nutrients-card__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 4px;
    width: 352px;

    @media (min-width: 800px) {
      min-width: 100%;
    }
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

  .submit {
    display: flex;
    &__button {
      width: 350px;
      height: 35px;
      border: none;
      border-radius: 10px;
      background-color: #df5c37;
      color: #fff;
    }

    @media (min-width: 800px) {
      min-width: 100%;
      justify-content: flex-end;
    }
  }
`;

export default MealFormStyled;
