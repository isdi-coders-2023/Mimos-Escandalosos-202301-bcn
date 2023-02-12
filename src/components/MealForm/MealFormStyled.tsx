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

  input,
  select,
  textarea {
    border: 2px solid #c1c1c1;
    border-radius: 10px;
    background: #f1f1f1;
    height: 35px;
    width: 100%;
    padding: 0 6px;
  }

  select {
    min-width: 185px;
  }

  textarea {
    height: 120px;
    resize: none;
    font-family: inherit;
    padding: 6px 6px;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #edb14d;
    outline: #edb14d;
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

    &__proteins {
      width: 100%;
    }
  }

  .info-values,
  .info-unit {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .ingredients {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
      width: 275px;
      height: 35px;
      border: none;
      border-radius: 10px;
      background-color: #f7af30;
      color: #000;
    }
  }
`;

export default MealFormStyled;
