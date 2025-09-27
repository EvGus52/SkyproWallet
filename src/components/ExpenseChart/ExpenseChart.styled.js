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
`;

export const TotalSum = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xl};
  font-weight: ${THEME.fonts.weights.bold};
  color: ${THEME.colors.gray[700]};
`;

export const DateText = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  color: #64748b;
`;

export const ChartArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  width: 725px;
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
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${THEME.colors.gray[700]};
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
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xs};
  font-weight: ${THEME.fonts.weights.normal};
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${THEME.colors.black};
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
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  color: #64748b;
  background: #f8fafc;
  border-radius: ${THEME.borderRadius.small};
  border: 2px dashed #cbd5e1;
`;
