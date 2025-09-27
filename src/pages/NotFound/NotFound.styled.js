import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.colors.background};
`;

export const NotFoundCard = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.medium};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 64px 48px;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

export const ErrorCode = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: 120px;
  font-weight: 800;
  color: ${THEME.colors.primary};
  line-height: 1;
  margin-bottom: 24px;
`;

export const ErrorTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes["2xl"]};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  font-family: ${THEME.fonts.family};
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export const HomeButton = styled.button`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  padding: 16px 32px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${THEME.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }
`;

export const BackButton = styled.button`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.medium};
  padding: 16px 32px;
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: ${THEME.borderRadius.small};
  background-color: transparent;
  color: ${THEME.colors.gray[600]};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 16px;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
