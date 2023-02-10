import styled from "styled-components";

const MealFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  font-size: 12px;
  font-family: inherit;

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

    &__meal-name {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__nutrients-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &__nutrients {
      width: 100%;
      display: flex;
      gap: 85px;
    }

    &__proteins {
      width: 100%;
    }
  }

  .info-values {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .info-unit {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .info {
    &__data {
      width: 120px;
      border: 2px solid #c1c1c1;
      border-radius: 10px;
      background: #f1f1f1;
      height: 35px;
    }
  }

  .ingredients {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &__data {
      height: 120px;
      border: 2px solid #c1c1c1;
      border-radius: 10px;
      background: #f1f1f1;
      resize: none;
      font-family: inherit;
      padding: 6px 6px;
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .submit {
    display: flex;
    &__button {
      width: 350px;
      height: 35px;
      border: none;
      border-radius: 10px;
      background-color: #f7af30;
      color: black;
    }
  }
`;

export default MealFormStyled;
