import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const ChartWrapper = styled.div`
  background: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  width: 789px;
  height: 540px;
  position: relative;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 400px;
    margin-bottom: 16px;
  }
`;

export const ChartTitle = styled.h3`
  font-family: ${THEME.fonts.family};
  font-size: 18px;
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin: 0 0 20px 0;
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.lg};
  }
`;

export const DateText = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  color: #64748b;
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

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    height: 300px;
    top: 90px;
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
