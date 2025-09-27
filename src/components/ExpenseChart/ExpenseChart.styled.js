import styled from "styled-components";

export const ChartWrapper = styled.div`
  background: #ffffff;
  border-radius: 16px 16px 24px 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  width: 100%;
  max-width: 789px;
  height: 540px;
  position: relative;
  opacity: 1;
  border: 1px solid #e2e8f0;
`;

export const ChartTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 20px 0;
`;

export const HeaderBlock = styled.div`
  width: calc(100% - 64px);
  height: 56px;
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 1;
`;

export const TotalSum = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

export const DateText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin: 0;
`;

export const ChartArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: calc(100% - 64px);
  height: 387px;
  position: absolute;
  top: 109px;
  left: 32px;
  padding: 0;
  margin: 0;
  opacity: 1;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  position: relative;
  min-width: 0;
`;

export const BarColumn = styled.div`
  width: 94px;
  border-radius: 12px;
  transition: height 0.3s ease;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
`;

export const BarValue = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0px;
  color: #1e293b;
  text-align: center;
  white-space: nowrap;
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  width: 94px;
  height: 20px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarCategory = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;
  text-align: center;
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 94px;
`;

export const NoDataMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #64748b;
  background: #f8fafc;
  border-radius: 8px;
  border: 2px dashed #cbd5e1;
`;

export const ChartContainer = styled.div`
  margin-bottom: 24px;
`;

export const ChartTypeSelector = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
  justify-content: center;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const SelectorButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${(props) => (props.$active ? "#7334EA" : "#e2e8f0")};
  background: ${(props) => (props.$active ? "#F1EBFD" : "white")};
  color: ${(props) => (props.$active ? "#7334EA" : "#64748b")};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7334ea;
    background: ${(props) => (props.$active ? "#E9D5FF" : "#f8fafc")};
  }
`;
