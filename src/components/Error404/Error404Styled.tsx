import styled from "styled-components";

const ErrorNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100vh;
  margin-top: 20px;

  .error {
    padding: 20px;

    &__image__desktop {
      display: none;
    }

    &__button {
      width: 350px;
      height: 35px;
      border: none;
      border-radius: 10px;
      background-color: #f7af30;
      color: black;
    }

    &__button:hover {
      cursor: pointer;
      border: 5px solid #df5c37;
    }
  }

  @media (min-width: 750px) {
    .error {
      &__image__mobile {
        display: none;
      }

      &__image__desktop {
        display: flex;
      }

      &__button {
        cursor: pointer;
      }
    }
  }
`;

export default ErrorNotFoundStyled;
