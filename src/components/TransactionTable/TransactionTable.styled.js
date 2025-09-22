import styled from "styled-components";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px;
`;

export const TableTitle = styled.h2`
  width: 282px;
  height: 29px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 24px 0;
  opacity: 1;
`;

export const TableContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
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
  font-weight: 600;
  font-size: 14px;
  color: #64748b;
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

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }
`;

export const TableCell = styled.td`
  padding: 16px 20px;
  font-size: 14px;
  color: #334155;
  vertical-align: middle;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
    text-align: right;
  }
`;

export const DateCell = styled(TableCell)`
  color: #64748b;
  font-weight: 500;
`;

export const CategoryCell = styled(TableCell)`
  font-weight: 500;
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
  font-weight: 600;
  font-size: 16px;
  color: #334155;
`;

export const DescriptionCell = styled(TableCell)`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
