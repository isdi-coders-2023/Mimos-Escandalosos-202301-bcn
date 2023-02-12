import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: inherit;
  font-size: 15px;

  .home-page {
    &__title {
      font-size: 25px;
      border-bottom: 5px solid orange;
      margin-bottom: 20px;
      max-width: 275px;
    }
  }
`;

export default HomePageStyled;
