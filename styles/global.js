import { createGlobalStyle } from "styled-components";
import CLASS_NAMES from "utils/constants/class-names";

const GlobalStyle = createGlobalStyle`


  body {
    color: ${({ theme }) => theme.palettetextprimary};
    background-color: ${({ theme }) => theme.palettebackgrounddefault};
    transition: color 0.5s ease, background-color 0.5s ease;
  }

  

  * {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    box-sizing: border-box;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.largest} {
    html {
      font-size: 57.5%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.large}  {
    html {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    line-height: 1.6;
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
  }

  .${CLASS_NAMES.VISIBLE} {
    visibility: visible;
  }

  .${CLASS_NAMES.INVISIBLE} {
    visibility: hidden;
  }
`;

export default GlobalStyle;
