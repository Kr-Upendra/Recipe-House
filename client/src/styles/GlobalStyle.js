import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --font-family: "Delius", cursive;
        --font-size: 15px;
        --basic-transition: background-color .3s, color .3s;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: var(--font-size);
        font-family: var(--font-family);
        background-image: linear-gradient(to bottom, #272829, #040D12);
        min-height: 100vh;
    }

    button {
        text-transform: uppercase;
        font-weight: 500;
        border: none;
    }

    input, button {
        font-family: inherit;
    }

    input {
        outline: none;
        border: none;
    }
`;

export default GlobalStyle;
