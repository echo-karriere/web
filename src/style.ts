import { createGlobalStyle } from "styled-components";
import { darkblue } from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: #343a40;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
