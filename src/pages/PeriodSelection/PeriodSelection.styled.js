import styled from "styled-components";
import { THEME } from "../../constants/theme";
import {
  BackButton,
  ArrowIcon,
  PrimaryButton,
} from "../../components/common/SharedStyles";

export const PeriodSelectionContainer = styled.div`
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-column: span 4;
    padding: 16px 0;
  }
`;

// Экспортируем импортированные компоненты
export { BackButton, ArrowIcon };

export const MobileSelectButton = styled(PrimaryButton)`
  display: none;
  grid-column: span 4;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const PeriodSelectionTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;
  text-align: left;

  @media (max-width: 767px) {
    margin-bottom: 16px;
    grid-column: span 4;
  }
`;

export const PeriodSelectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

export const SelectedPeriodDisplay = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.medium};
  color: ${THEME.colors.gray[600]};
  background-color: ${THEME.colors.gray[50]};
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${THEME.colors.gray[200]};
  text-align: center;
  min-width: 200px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background-color: ${(props) =>
    props.disabled ? THEME.colors.gray[300] : THEME.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
  }

  &:active:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background-color: transparent;
  color: ${THEME.colors.gray[600]};
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: 8px;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${THEME.colors.gray[50]};
    border-color: ${THEME.colors.gray[400]};
  }

  &:active {
    background-color: ${THEME.colors.gray[100]};
  }
`;
