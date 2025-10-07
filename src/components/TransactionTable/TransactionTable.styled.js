import styled from "styled-components";
import { THEME } from "../../constants/theme";

/* Обертка таблицы */
export const TableWrapper = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 618px;
  display: flex;
  flex-direction: column;
`;

/* Заголовок таблицы и контейнер фильтров */
export const TableTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 24px;
`;

export const TableTitle = styled.h2`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  color: ${THEME.colors.gray[700]};
`;

/* Контейнер фильтров */
export const FiltersContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterLabel = styled.span`
  font-size: ${THEME.fonts.sizes.sm};
  color: ${THEME.colors.black};
  font-weight: ${THEME.fonts.weights.medium};
`;

/* Таблица */
export const TableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${THEME.borderRadius.small};
  flex: 1;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${THEME.colors.gray[300]};
    border-radius: ${THEME.borderRadius.large};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${THEME.colors.gray[400]};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${THEME.fonts.family};
`;

export const TableHeader = styled.thead`
  background-color: ${THEME.colors.white};
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-weight: ${THEME.fonts.weights.normal};
  font-size: ${THEME.fonts.sizes.xs};
  color: ${THEME.colors.gray[400]};
  text-transform: uppercase;
  border-bottom: 1px solid ${THEME.colors.gray[300]};

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
  padding: 4px 20px;
  font-size: ${THEME.fonts.sizes.xs};
  color: ${THEME.colors.black};

  &:first-child {
    padding-left: 24px;
  }
  &:last-child {
    padding-right: 24px;
    text-align: right;
  }
`;

export const DateCell = styled(TableCell)``;
export const CategoryCell = styled(TableCell)``;
export const DescriptionCell = styled(TableCell)`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const AmountCell = styled(TableCell)``;

export const DeleteCell = styled(TableCell)`
  width: 40px;
  text-align: center;
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

/* Кнопки фильтров и сортировки */
export const CategoryButton = styled.button`
  background: none;
  border: none;
  color: ${THEME.colors.primary};
  cursor: pointer;
  padding: 0;
  font-size: ${THEME.fonts.sizes.sm};
  text-decoration: underline;
  transition: color 0.25s ease;

  &:hover {
    color: ${THEME.colors.primaryHover};
  }
`;

export const SortSelect = styled.select`
  background: none;
  border: none;
  color: ${THEME.colors.primary};
  cursor: pointer;
  padding: 0;
  font-size: ${THEME.fonts.sizes.sm};
  text-decoration: underline;
  transition: color 0.25s ease;

  &:hover {
    color: ${THEME.colors.primaryHover};
  }

  &:focus {
    outline: none;
    color: ${THEME.colors.primary};
  }
`;


// import styled from "styled-components";
// import { THEME } from "../../constants/theme";

// export const TableWrapper = styled.div`
//   background-color: ${THEME.colors.white};
//   border-radius: ${THEME.borderRadius.large};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
//   height: 618px;
//   display: flex;
//   flex-direction: column;
// `;

// export const TableTitle = styled.h2`
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.bold};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xl};
//   padding: 24px;
//   color: ${THEME.colors.gray[700]};
//   opacity: 1;
// `;

// export const TableContainer = styled.div`
//   overflow-y: auto;
//   overflow-x: hidden;
//   border-radius: ${THEME.borderRadius.small};
//   flex: 1;
//   scrollbar-gutter: stable;

//   /* Стили для скроллбара */
//   &::-webkit-scrollbar {
//     width: 6px;
//   }

//   &::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #d9d9d9;
//     border-radius: ${THEME.borderRadius.large};
//     opacity: 1;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #d9d9d9;
//   }
// `;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   font-family: ${THEME.fonts.family};
// `;

// export const TableHeader = styled.thead`
//   background-color: ${THEME.colors.white};
// `;

// export const HeaderRow = styled.tr``;

// export const HeaderCell = styled.th`
//   padding: 16px 20px;
//   text-align: left;
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.normal};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xs};
//   color: #999999;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   border-bottom: 1px solid #e2e8f0;

//   &:first-child {
//     padding-left: 24px;
//   }

//   &:last-child {
//     padding-right: 24px;
//     text-align: right;
//   }
// `;

// export const TableBody = styled.tbody``;

// export const TableRow = styled.tr``;

// export const TableCell = styled.td`
//   padding: 4px 20px;
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.normal};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xs};
//   color: ${THEME.colors.black};

//   &:first-child {
//     padding-left: 24px;
//   }

//   &:last-child {
//     padding-right: 24px;
//     text-align: right;
//   }
// `;

// export const DateCell = styled(TableCell)`
//   color: ${THEME.colors.black};
//   font-weight: ${THEME.fonts.weights.normal};
// `;

// export const CategoryCell = styled(TableCell)`
//   font-weight: ${THEME.fonts.weights.normal};
// `;

// export const DeleteCell = styled(TableCell)`
//   width: 40px;
//   text-align: center;

//   &:last-child {
//     padding-right: 24px;
//     text-align: center;
//   }
// `;

// export const DeleteButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 4px;
//   border-radius: ${THEME.borderRadius.small};
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 0.7;
//   }
// `;

// export const DeleteIcon = styled.img`
//   width: 16px;
//   height: 16px;
// `;

// export const AmountCell = styled(TableCell)`
//   font-weight: ${THEME.fonts.weights.normal};
//   font-size: ${THEME.fonts.sizes.xs};
//   color: ${THEME.colors.black};
// `;

// export const DescriptionCell = styled(TableCell)`
//   max-width: 200px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;
