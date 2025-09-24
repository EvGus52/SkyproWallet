import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const AnalyticsContainer = styled.div`
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AnalyticsTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes["2xl"]};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
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
