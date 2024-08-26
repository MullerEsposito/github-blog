import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: ${props => props.theme.colors["base-background"]};
    color: ${ props => props.theme.colors["base-subtitle"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`