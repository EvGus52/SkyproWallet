import styled, { createGlobalStyle } from "styled-components";

export const FormColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TableGridArea = styled.div`
  grid-column: span 8;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const FormGridArea = styled.div`
  grid-column: span 4;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
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
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;

    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }

    @media (max-width: 480px) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export default GlobalStyles;
