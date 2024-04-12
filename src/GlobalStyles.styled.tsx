import { createGlobalStyle } from "styled-components";
import "./index.css";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans Georgian", "", sans-serif;
  }
`;

export default GlobalStyles;
