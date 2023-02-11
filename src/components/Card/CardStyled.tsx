import styled from "styled-components";

const CardStyled = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;

  .meal {
    display: flex;
    background-color: #f6f6f6;
    padding: 20px;
    margin: 10px 0;
    font-size: 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    width: 500px;

    @media (min-width: 600px) {
      .meal {
        width: 100%;
      }
    }

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
        width: 200px;
        height: 200px;
      }
    }

    &__title {
      margin-top: 0;
    }

    &__data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
      width: auto;
      gap: 5px;
    }

    &__data-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 5px;

      i {
        color: #df5c37;
      }
    }

    &__data-calories {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      padding-bottom: 10px;
      color: #403f3f;
    }

    &__cuisine-type {
      display: flex;
      color: black;
      font-size: 11px;
    }

    &__mediterranean {
      background-color: #f2cf74;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__american {
      background-color: #d67171;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__asian {
      background-color: #b4e289;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__british {
      background-color: #61afab;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__caribbean {
      background-color: #37dfdf;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__central {
      background-color: #ef8365;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__chinese {
      background-color: #cceaec;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__eastern {
      background-color: #b8cc9f;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__french {
      background-color: #5d84ee;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__indian {
      background-color: #c4cf4c;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__italian {
      background-color: #dcdc3d;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__japanese {
      background-color: #cdbcb8;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__kosher {
      background-color: #97d555;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__mexican {
      background-color: #9da553;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__middle {
      background-color: #99b8c0;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__nordic {
      background-color: #a3b1c8;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__south {
      background-color: #cf8c94;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }

    &__world {
      background-color: #e26330;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }
  }
`;

export default CardStyled;
