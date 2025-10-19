import styled from "styled-components";
import { THEME } from "../../constants/theme";
import { PrimaryButton } from "../../components/common/SharedStyles";

export const AnalyticsContainer = styled.div`
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-column: span 4;
    padding: 0;
    max-width: none;
    margin: 0;
  }

  /* Убираем grid-column для десктопной версии */
  @media (min-width: 768px) {
    grid-column: unset;
  }
`;

export const AnalyticsTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes["2xl"]};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.xl};
    margin-top: 12px;
    margin-bottom: 12px;
    grid-column: span 4;
  }

  /* Убираем grid-column для десктопной версии */
  @media (min-width: 768px) {
    grid-column: unset;
  }
`;

export const AnalyticsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  height: 540px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    height: auto;
    grid-column: span 4;

    /* Скрываем календарь в мобильной версии */
    > div:first-child {
      display: none;
    }
  }

  /* Убираем grid-column для десктопной версии */
  @media (min-width: 768px) {
    grid-column: unset;
  }
`;

export const PeriodSelectionLink = styled(PrimaryButton)`
  display: none;
  grid-column: span 4;

  @media (max-width: 767px) {
    display: block;
  }
`;
