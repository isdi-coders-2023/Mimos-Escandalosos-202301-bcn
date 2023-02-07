import styled from "styled-components";

const CardStyled = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;

  .meal {
    display: flex;
    background-color: #f6f6f6;
    padding: 10px;
    margin: 10px 0;
    font-size: 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    i {
      font-size: 20px;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 15px;
    }

    @media (min-width: 600px) {
      img {
        width: 240px;
        height: 240px;
      }
    }

    &__title {
      margin-top: 0;
    }

    &__data {
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      gap: 5px;
    }

    &__data-title {
      display: flex;
      gap: 15px;
      align-items: baseline;

      i {
        color: #df5c37;
      }
    }

    &__data-calories {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      padding-bottom: 10px;
      color: #868686;
    }

    &__cuisine-type {
      color: black;
      font-size: 14px;
    }

    &__mediterranean {
      background-color: #f2cf74;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }
  }
`;

export default CardStyled;
