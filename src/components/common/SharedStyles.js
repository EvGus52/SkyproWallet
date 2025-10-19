import styled from "styled-components";
import { THEME } from "../../constants/theme";

// Базовая карточка с белым фоном и тенью
export const Card = styled.div`
  background: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    box-shadow: none;
  }
`;

// Общий стиль для primary кнопок
export const PrimaryButton = styled.button`
  width: 100%;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  padding: 16px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }

  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
    opacity: 1;
  }
`;

// Кнопка "Назад"
export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${THEME.colors.gray[600]};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.xs};
    margin-bottom: 12px;
    grid-column: span 4;
  }
`;

// Иконка стрелки
export const ArrowIcon = styled.img`
  height: 14px;
`;

// Общий стиль для скроллбара
export const scrollbarStyles = `
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

// Заголовок страницы H1
export const PageTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 16px;
    grid-column: span 4;
  }
`;
