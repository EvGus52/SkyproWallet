import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const PeriodSelectionContainer = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;

  /* На десктопе скрываем всю страницу */
  @media (min-width: 769px) {
    display: none;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #64748b;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: pointer;
  padding: 16px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${THEME.colors.gray[600]};
  }

  /* Показываем кнопку только на мобильных */
  @media (min-width: 769px) {
    display: none;
  }
`;

export const PeriodSelectionTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: 20px;
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 0;
  padding: 0 16px;

  /* Показываем заголовок только на мобильных */
  @media (min-width: 769px) {
    display: none;
  }
`;

export const PeriodSelectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  height: auto;
  padding: 0;
  margin-bottom: 0;
  flex: 1;
  min-height: 400px;
  overflow: visible;

  /* Показываем календарь только на мобильных */
  @media (min-width: 769px) {
    display: none;
  }
`;

export const SelectPeriodButton = styled.button`
  background: #7c3aed;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 24px 16px;

  &:hover {
    background: #6d28d9;
  }

  &:active {
    background: #5b21b6;
  }

  /* Показываем кнопку только на мобильных */
  @media (min-width: 769px) {
    display: none;
  }
`;
