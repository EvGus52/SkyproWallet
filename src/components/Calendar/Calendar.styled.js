import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const CalendarContainer = styled.div`
  background: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  width: 379px;
  height: 540px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #e2e8f0;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 379px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 450px;
    margin-bottom: 16px;
  }

  /* Стили для скроллбара */
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

export const PeriodBlock = styled.div`
  width: 100%;
  height: 60px;
  background: ${THEME.colors.white};
  display: flex;
  align-items: center;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
    height: auto;
    min-height: 50px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-family: ${THEME.fonts.family};
    font-weight: ${THEME.fonts.weights.bold};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xl};
    color: ${THEME.colors.gray[700]};
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${THEME.fonts.sizes.lg};
    }
  }
`;

export const WeekDaysBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 16px 32px;
  background: ${THEME.colors.white};

  @media (max-width: 768px) {
    padding: 12px 16px;
    gap: 4px;
  }
`;

export const WeekDay = styled.div`
  width: 17px;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xs};
  font-weight: ${THEME.fonts.weights.normal};
  color: rgba(153, 153, 153, 1);
  text-align: center;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e2e8f0;
`;

export const MonthSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${THEME.colors.white};
  overflow-y: auto;
  padding: 14px;

  .month-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .month-header {
    font-family: ${THEME.fonts.family};
    font-weight: ${THEME.fonts.weights.semibold};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.base};
    line-height: 100%;
    letter-spacing: 0px;
    color: ${THEME.colors.gray[700]};
    margin-bottom: 16px;
    text-align: left;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0;
  position: relative;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const CalendarDay = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  gap: 10px;
  padding: 10px 15px;
  opacity: 1;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    padding: 8px 12px;
    gap: 6px;
  }

  span {
    font-family: ${THEME.fonts.family};
    font-size: ${THEME.fonts.sizes.xs};
    font-weight: ${THEME.fonts.weights.normal};
    font-style: normal;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: ${(props) => {
      if (props.$isSelected || props.$inRange) return "#7334EA";
      return THEME.colors.gray[700];
    }};
  }

  .expense-indicator {
    font-size: 8px;
    color: #ef4444;
    font-weight: 600;
    margin-top: 1px;
    text-align: center;
    line-height: 1;
  }

  background-color: ${(props) => {
    if (props.$isSelected || props.$inRange) return "#F1EBFD";
    if (props.$isBoundary) return "#F1EBFD";
    if (props.$isToday) return "#f1f5f9";
    return "transparent";
  }};

  border: ${(props) => {
    if (props.$isSelected || props.$inRange) return "none";
    if (props.$isBoundary) return "2px solid #7334EA";
    if (props.$isToday) return "1px solid #cbd5e1";
    return "1px solid transparent";
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.$isSelected || props.$inRange) return "#F1EBFD";
      if (props.$isBoundary) return "#E8D5FF";
      if (props.$isToday) return "#e2e8f0";
      return "#f1f5f9";
    }};
  }
`;
