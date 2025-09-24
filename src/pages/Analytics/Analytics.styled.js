import styled from "styled-components";

export const AnalyticsContainer = styled.div`
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AnalyticsTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 32px;
`;

export const AnalyticsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  height: 540px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    height: auto;
  }
`;
