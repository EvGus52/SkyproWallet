import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 618px;
  display: flex;
  flex-direction: column;
`;

export const TableTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  padding: 24px;
  color: #1e293b;
  opacity: 1;
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
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
  font-family: "Montserrat", sans-serif;
`;

export const TableHeader = styled.thead`
  background-color: #ffffff;
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
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
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 16px 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #000000;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
    text-align: right;
  }
`;

export const DateCell = styled(TableCell)`
  color: #000000;
  font-weight: 400;
`;

export const CategoryCell = styled(TableCell)`
  font-weight: 400;
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
  border-radius: 4px;
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
  font-weight: 400;
  font-size: 12px;
  color: #000000;
`;

export const DescriptionCell = styled(TableCell)`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
