import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #999999;
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.normal};
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
  transition: color 0.2s ease;

  &:hover {
    color: ${THEME.colors.primary};
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const BackIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const BackText = styled.span`
  font-size: ${THEME.fonts.sizes.sm};
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xl};
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: ${THEME.fonts.sizes.lg};
    margin-bottom: 20px;
  }
`;

export const MainContainer = styled.main`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;



