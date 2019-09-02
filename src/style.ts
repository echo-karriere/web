import { createGlobalStyle } from "styled-components";
import c from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: ${c.bootstrapGray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
