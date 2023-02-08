import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    background-color: #fff;
    font-family: "Inter", sans-serif;
    min-width: 100vw;
    min-height: 100vh;
  }

  ol, ul, li {
    list-style: none;
  }

*, 
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

#root{
  display:flex;
  align-items: center;
  justify-content: center;
}
`;

export default GlobalStyles;
