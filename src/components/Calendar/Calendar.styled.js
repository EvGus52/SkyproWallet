import styled from "styled-components";

export const CalendarContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
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
  height: 113px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 32px;
`;

export const CalendarHeader = styled.div`
  width: 315px;
  height: 29px;
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
    margin: 0;
  }
`;

// Убираем CalendarScrollArea, так как он больше не нужен

export const WeekDaysBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 16px 32px;
  background: #ffffff;
`;

export const WeekDay = styled.div`
  width: 17px;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
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
  background: #ffffff;
  overflow-y: auto;
  padding: 16px;

  .month-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .month-header {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #1e293b;
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

  span {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: ${(props) => {
      if (props.$isRangeStart || props.$isRangeEnd) return "#7334EA";
      if (props.$isInRange) return "#7334EA";
      if (props.$isSelected) return "#7334EA";
      return "#1e293b";
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
    if (props.$isRangeStart || props.$isRangeEnd) return "#F1EBFD";
    if (props.$isInRange) return "#F1EBFD";
    if (props.$isSelected) return "#F1EBFD";
    return "transparent";
  }};

  border: ${(props) => {
    if (props.$isRangeStart || props.$isRangeEnd) return "none";
    if (props.$isSelected) return "none";
    return "1px solid transparent";
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.$isRangeStart || props.$isRangeEnd) return "#E9D5FF";
      if (props.$isInRange) return "#E9D5FF";
      if (props.$isSelected) return "#F1EBFD";
      return "#f1f5f9";
    }};
  }
`;
