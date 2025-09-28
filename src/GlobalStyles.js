import styled, { createGlobalStyle } from "styled-components";

export const FormColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  align-items: start;
`;

export const TableGridArea = styled.div`
  grid-column: span 8;
`;

export const FormGridArea = styled.div`
  grid-column: span 4;
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(0, 0, 0);
    background-color: #F4F5F6;
  }

  #root {
    min-height: 100vh;
  }
  .center {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default GlobalStyles;
