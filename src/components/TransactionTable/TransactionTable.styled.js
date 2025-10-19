import styled from "styled-components";
import { THEME } from "../../constants/theme";
import { Card } from "../common/SharedStyles";

export const TableWrapper = styled(Card)`
  height: 618px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    height: auto;
    min-height: 400px;
    max-height: 600px;
  }
`;

export const TableTitle = styled.h2`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xl};
  padding: 24px;
  color: ${THEME.colors.gray[700]};
  opacity: 1;

  @media (max-width: 767px) {
    display: none; /* Скрываем заголовок в мобильной версии */
  }
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${THEME.borderRadius.small};
  flex: 1;
  scrollbar-gutter: stable;

  /* Стили для скроллбара */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: ${THEME.borderRadius.large};
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${THEME.fonts.family};

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.xs};
    table-layout: fixed; /* Фиксированная ширина колонок */
  }
`;

export const TableHeader = styled.thead`
  background-color: ${THEME.colors.white};
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  position: sticky;
  top: 0;
  padding: 16px 20px;
  text-align: left;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.normal};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  color: #999999;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e2e8f0;
  background-color: ${THEME.colors.white};
  z-index: 10;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
    text-align: right;
  }

  @media (max-width: 767px) {
    padding: 12px 8px;
    font-size: 10px;
    width: 25%; /* Каждая колонка занимает 25% (1/4) */

    &:first-child {
      padding-left: 12px;
    }

    &:last-child {
      padding-right: 12px;
      display: none; /* Скрываем колонку удаления в мобильной версии */
    }

    ${(props) =>
      props.$alignRight &&
      `
      text-align: right;
    `}
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${THEME.colors.gray[50]};
  }

  ${(props) =>
    props.$isSelected &&
    `
    background-color: ${THEME.colors.primary}15;
    border-left: 3px solid ${THEME.colors.primary};
  `}

  @media (max-width: 767px) {
    cursor: pointer;
  }
`;

export const TableCell = styled.td`
  padding: 4px 20px;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.normal};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  color: ${THEME.colors.black};

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
    text-align: right;
  }

  @media (max-width: 767px) {
    padding: 6px 8px;
    font-size: 11px;

    &:first-child {
      padding-left: 12px;
    }

    &:last-child {
      padding-right: 12px;
    }
  }
`;

export const DateCell = styled(TableCell)`
  color: ${THEME.colors.black};
  font-weight: ${THEME.fonts.weights.normal};

  @media (max-width: 767px) {
    text-align: right;
  }
`;

export const CategoryCell = styled(TableCell)`
  font-weight: ${THEME.fonts.weights.normal};
`;

export const DeleteCell = styled(TableCell)`
  width: 40px;
  text-align: center;

  &:last-child {
    padding-right: 24px;
    text-align: center;
  }

  @media (max-width: 767px) {
    display: none; /* Скрываем кнопку удаления в мобильной версии */
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: ${THEME.borderRadius.small};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const AmountCell = styled(TableCell)`
  font-weight: ${THEME.fonts.weights.normal};
  font-size: ${THEME.fonts.sizes.xs};
  color: ${THEME.colors.black};

  @media (max-width: 767px) {
    text-align: right;
  }
`;

export const DescriptionCell = styled(TableCell)`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    max-width: 60px;
  }
`;
