import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    justify-content: space-between;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xl};
  }

  @media (max-width: 480px) {
    font-size: ${THEME.fonts.sizes.lg};
  }
`;

export const AddExpenseButton = styled.button`
  background: transparent;
  color: #1e293b;
  border: none;
  padding: 12px 20px;
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.bold};
  cursor: pointer;
  transition: opacity 0.2s ease;
  display: none; /* Скрываем по умолчанию */
  align-items: center;
  gap: 12px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    display: flex; /* Показываем только на мобильных устройствах */
    padding: 10px 16px;
    font-size: ${THEME.fonts.sizes.xs};
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 11px;
    gap: 8px;
  }
`;

export const PlusIcon = styled.span`
  width: 20px;
  height: 20px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  flex-shrink: 0;
`;

export const MobileDeleteButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${THEME.colors.primary};
  color: white;
  border: none;
  border-radius: ${THEME.borderRadius.medium};
  padding: 16px 32px;
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: pointer;
  width: calc(100% - 40px);
  max-width: 400px;
  z-index: 10;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${THEME.colors.primaryDark || "#6b46c1"};
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MainContainer = styled.main`
  padding: 24px;
  padding-bottom: 80px; /* Добавляем отступ для мобильной кнопки удаления */

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 100px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    padding-bottom: 100px;
  }
`;
