import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  bgColor: "#F7F9FA",
  fontColor: "#000000",
};
export const darkTheme = {
  bgColor: "#1E1F21",
  fontColor: "#D9D9D9",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background-color: ${(props) => props.theme.bgColor}
    }
`;
