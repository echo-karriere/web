import { createGlobalStyle } from 'styled-components'
import { darkblue } from './constants/colors'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${darkblue};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }
`

export default GlobalStyle