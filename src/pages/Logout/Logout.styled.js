import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const LogoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.colors.background};
`;

export const LogoutCard = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.medium};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 48px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const LogoutIcon = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
`;

export const LogoutTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xl};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 16px;
`;

export const LogoutMessage = styled.p`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  padding: 12px 24px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: #ef4444;
  color: ${THEME.colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #dc2626;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
  }
`;

export const CancelButton = styled.button`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  padding: 12px 24px;
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.white};
  color: ${THEME.colors.gray[600]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.3);
  }
`;
