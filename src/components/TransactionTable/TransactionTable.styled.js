import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const TableWrapper = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 618px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.lg};
    padding: 16px;
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

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xs};
  }
`;

export const TableHeader = styled.thead`
  background-color: ${THEME.colors.white};
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.normal};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e2e8f0;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
    text-align: right;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 10px;

    &:first-child {
      padding-left: 12px;
    }

    &:last-child {
      padding-right: 12px;
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

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

  @media (max-width: 768px) {
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
`;

export const DescriptionCell = styled(TableCell)`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    max-width: 100px;
  }

  @media (max-width: 480px) {
    max-width: 60px;
  }
`;
