import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-700"]};
    }

    body {
        background-color: ${(props) => props.theme["default-background"]};
        color: ${(props) => props.theme["text-base"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font: 400 1rem Roboto, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
