import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const AnalyticsContainer = styled.div`
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px 0;
    padding-bottom: 100px; /* Отступ для фиксированной кнопки */
  }
`;

export const AnalyticsTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes["2xl"]};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xl};
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: ${THEME.fonts.sizes.lg};
    margin-bottom: 16px;
  }
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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #999999;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
  transition: color 0.2s ease;
  width: 131px;
  height: 18px;
  opacity: 1;
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;

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
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
`;

export const BackText = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
`;

export const SelectPeriodButton = styled.button`
  background: ${THEME.colors.primary};
  color: white;
  border: none;
  border-radius: ${THEME.borderRadius.medium};
  padding: 16px 32px;
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
  margin-top: 24px;

  &:hover {
    background: ${THEME.colors.primaryDark || "#6b46c1"};
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: calc(100% - 40px);
    padding: 16px 24px;
    margin-top: 0;
    z-index: 10;
  }

  @media (min-width: 769px) {
    display: none; /* Показываем кнопку только на мобильных устройствах */
  }
`;
