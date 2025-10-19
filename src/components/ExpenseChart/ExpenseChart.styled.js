import styled from "styled-components";
import { THEME } from "../../constants/theme";
import { Card } from "../common/SharedStyles";

export const ChartWrapper = styled(Card)`
  margin-bottom: 24px;
  width: 789px;
  height: 540px;
  position: relative;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    min-height: 420px;
    margin-bottom: 16px;
    grid-column: span 4;
  }

  /* Устанавливаем grid-column для десктопной версии */
  @media (min-width: 768px) {
    grid-column: span 8;
  }
`;

export const HeaderBlock = styled.div`
  width: 725px;
  height: 56px;
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: 1;

  @media (max-width: 1024px) {
    width: calc(100% - 64px);
  }

  @media (max-width: 767px) {
    width: calc(100% - 32px);
    top: 16px;
    left: 16px;
    height: auto;
    gap: 12px;
  }
`;

export const TotalSum = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xl};
  font-weight: ${THEME.fonts.weights.bold};
  color: ${THEME.colors.gray[700]};

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.lg};
  }
`;

export const DateText = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  color: #64748b;

  .period-label {
    @media (max-width: 767px) {
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
    }
  }

  @media (max-width: 767px) {
    font-weight: 600;
    font-style: normal;
    font-size: 12px;
    color: #999999;
  }
`;

export const ChartArea = styled.div`
  width: 725px;
  height: 387px;
  position: absolute;
  top: 109px;
  left: 32px;
  padding: 0;
  margin: 0;
  opacity: 1;

  @media (max-width: 1024px) {
    width: calc(100% - 64px);
  }

  @media (max-width: 767px) {
    width: calc(100% - 32px);
    height: 320px;
    top: 80px;
    left: 16px;
  }

  /* Стили для Chart.js */
  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  /* Скрываем легенду */
  .chartjs-legend {
    display: none;
  }
`;

export const NoDataMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  color: #64748b;
  background: #f8fafc;
  border-radius: ${THEME.borderRadius.small};
  border: 2px dashed #cbd5e1;
`;
