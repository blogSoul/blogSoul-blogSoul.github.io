import { createGlobalStyle }from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        background-color: #ecf0f1;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0);
        height: 14000px;
        padding-top: 70px;
    }
`;

export default globalStyles;