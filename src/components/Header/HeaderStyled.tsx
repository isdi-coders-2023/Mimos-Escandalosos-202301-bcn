import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  background-color: white;

  &__mobileImage {
    display: flex;
    justify-content: flex-end;
  }

  .header__desktopImage {
    display: none;
  }

  .nav-bar {
    display: flex;
    gap: 30px;
    justify-content: flex-end;

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

  @media (min-width: 600px) {
    width: 100%;
    align-self: center;

    .header {
      display: flex;
    }

    .header__desktopImage {
      display: flex;
    }

    .header__mobileImage {
      display: none;
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
