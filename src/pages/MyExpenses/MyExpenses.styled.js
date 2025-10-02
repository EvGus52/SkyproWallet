import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const PageTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xl};
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: ${THEME.fonts.sizes.lg};
    margin-bottom: 16px;
  }
`;

export const MainContainer = styled.main`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
