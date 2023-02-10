import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 75px;
  width: 100%;

  background-color: rgb(255, 255, 255);

  .header__desktop {
    &__image {
      display: none;
    }
  }

  &__mobile {
    display: flex;
  }

  .nav-bar {
    display: flex;
    gap: 30px;

    &__text {
      display: none;
    }
  }

  .fa-solid {
    font-size: 1.8rem;
    color: #7b7979;

    &--active:hover {
      color: #df5c37;
    }
  }

  @media (min-width: 750px) {
    width: 100%;
    align-self: center;
    justify-content: space-between;
    padding: 20px 0 30px;

    .header {
      display: flex;

      &__desktop {
        &__link {
          display: flex;
        }
        &__image {
          display: flex;
        }
      }

      &__mobile {
        &__link {
          display: none;
        }
        &__image {
          display: none;
        }
      }
    }

    .nav-bar {
      display: flex;

      &__element {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      &__text {
        display: flex;
        font-size: 1.2rem;
      }
    }
  }
`;

export default HeaderStyled;
