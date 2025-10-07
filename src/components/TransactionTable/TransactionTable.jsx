import { useState } from "react";
import Select from "react-select";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import { confirmUtils } from "../../utils/confirmAlert.jsx";
import {
  TableWrapper,
  TableTitleContainer,
  TableTitle,
  FiltersContainer,
  FilterGroup,
  FilterLabel,
  TableContainer,
  Table,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  TableRow,
  DateCell,
  CategoryCell,
  DescriptionCell,
  AmountCell,
  DeleteCell,
  DeleteButton,
  DeleteIcon,
} from "./TransactionTable.styled";

const categoriesList = [
  { name: "Все", value: "" },
  { name: "Еда", value: "food" },
  { name: "Транспорт", value: "transport" },
  { name: "Жилье", value: "housing" },
  { name: "Развлечения", value: "joy" },
  { name: "Образование", value: "education" },
  { name: "Другое", value: "others" },
];

const sortOptions = [
  { name: "дате", value: "date" },
  { name: "сумме", value: "sum" },
];

const TransactionTable = () => {
  const {
    transactions = [],
    loading = false,
    error = null,
    removeTransaction,
  } = useTransactions() || {};

  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const handleDelete = (id, description) => {
    if (typeof removeTransaction === "function") {
      confirmUtils.deleteExpense(description, () => removeTransaction(id));
    }
  };

  const formatAmount = (amount) =>
    new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 0 }).format(
      amount
    ) + " ₽";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getCategoryName = (category) => {
    const map = {
      food: "Еда",
      transport: "Транспорт",
      housing: "Жилье",
      joy: "Развлечения",
      education: "Образование",
      others: "Другое",
    };
    return map[category] || category;
  };

  // Фильтруем и сортируем на фронтенде
  const filteredTransactions = transactions
    .filter((tx) =>
      selectedCategory.value ? tx.category === selectedCategory.value : true
    )
    .sort((a, b) => {
      if (sortBy.value === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy.value === "sum") return b.sum - a.sum;
      return 0;
    });

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      background: "transparent",
      border: "none",
      boxShadow: "none",
      width: "fit-content",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#7334EA",
      textDecoration: "underline",
      fontWeight: 500,
      cursor: "pointer",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#7334EA",
      padding: "0 4px",
      cursor: "pointer",
    }),
    menu: (base) => ({
      ...base,
      position: "absolute",
      width: "fit-content",
      backgroundColor: "#F4F5F6",
      borderRadius: "6px",
      padding: "8px 12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      zIndex: 10,
    }),
    menuList: (base) => ({ ...base, padding: 0 }),
    option: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      borderRadius: "30px",
      backgroundColor: state.isFocused ? "#7334EA" : "#F4F5F6",
      color: "#000000",
      cursor: "pointer",
      width: "fit-content",
      transition: "background-color 0.2s ease",
    }),
  };

  return (
    <TableWrapper>
      <TableTitleContainer>
        <TableTitle>Таблица расходов</TableTitle>
        <FiltersContainer>
          <FilterGroup>
            <FilterLabel>Фильтровать по категории:</FilterLabel>
            <Select
              options={categoriesList}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.value}
              value={selectedCategory}
              onChange={setSelectedCategory}
              styles={customSelectStyles}
              isSearchable={false}
            />
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Сортировать по:</FilterLabel>
            <Select
              options={sortOptions}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.value}
              value={sortBy}
              onChange={setSortBy}
              styles={customSelectStyles}
              isSearchable={false}
            />
          </FilterGroup>
        </FiltersContainer>
      </TableTitleContainer>

      <TableContainer>
        <Table>
          <TableHeader>
            <HeaderRow>
              <HeaderCell>Описание</HeaderCell>
              <HeaderCell>Категория</HeaderCell>
              <HeaderCell>Дата</HeaderCell>
              <HeaderCell>Сумма</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  Загрузка...
                </td>
              </TableRow>
            ) : error ? (
              <TableRow>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px", color: "red" }}
                >
                  {error}
                </td>
              </TableRow>
            ) : filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <TableRow key={transaction._id}>
                  <DescriptionCell>{transaction.description}</DescriptionCell>
                  <CategoryCell>
                    {getCategoryName(transaction.category)}
                  </CategoryCell>
                  <DateCell>{formatDate(transaction.date)}</DateCell>
                  <AmountCell>{formatAmount(transaction.sum)}</AmountCell>
                  <DeleteCell>
                    <DeleteButton
                      onClick={() =>
                        handleDelete(transaction._id, transaction.description)
                      }
                    >
                      <DeleteIcon
                        src="/images/icons/deleteBtn.svg"
                        alt="Удалить"
                      />
                    </DeleteButton>
                  </DeleteCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  Нет транзакций для отображения
                </td>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default TransactionTable;

// import { useTransactions } from "../../contexts/TransactionsContextProvider";
// import { confirmUtils } from "../../utils/confirmAlert.jsx";
// import {
//   TableWrapper,
//   TableTitle,
//   TableContainer,
//   Table,
//   TableHeader,
//   HeaderRow,
//   HeaderCell,
//   TableBody,
//   TableRow,
//   DateCell,
//   CategoryCell,
//   DescriptionCell,
//   AmountCell,
//   DeleteCell,
//   DeleteButton,
//   DeleteIcon,
// } from "./TransactionTable.styled";

// // Компонент будет получать данные через props

// // Функция для форматирования суммы
// const formatAmount = (amount) => {
//   return (
//     new Intl.NumberFormat("ru-RU", {
//       minimumFractionDigits: 0,
//     }).format(amount) + " ₽"
//   );
// };

// const TransactionTable = () => {
//   const { transactions, loading, error, removeTransaction } = useTransactions();

//   // Транзакции загружаются в родительском компоненте MyExpenses

//   const handleDelete = (id, description) => {
//     confirmUtils.deleteExpense(description, () => removeTransaction(id));
//   };

//   // Функция для форматирования даты из API формата в читаемый вид
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("ru-RU", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });
//   };

//   // Функция для получения русскоязычного названия категории
//   const getCategoryName = (category) => {
//     const categoryMap = {
//       food: "Еда",
//       transport: "Транспорт",
//       housing: "Жилье",
//       joy: "Развлечения",
//       education: "Образование",
//       others: "Другое",
//     };
//     return categoryMap[category] || category;
//   };

//   return (
//     <TableWrapper>
//       <TableTitle>Таблица расходов</TableTitle>
//       <TableContainer>
//         <Table>
//           <TableHeader>
//             <HeaderRow>
//               <HeaderCell>Описание</HeaderCell>
//               <HeaderCell>Категория</HeaderCell>
//               <HeaderCell>Дата</HeaderCell>
//               <HeaderCell>Сумма</HeaderCell>
//               <HeaderCell></HeaderCell>
//             </HeaderRow>
//           </TableHeader>
//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <td
//                   colSpan="5"
//                   style={{ textAlign: "center", padding: "20px" }}
//                 >
//                   Загрузка...
//                 </td>
//               </TableRow>
//             ) : error ? (
//               <TableRow>
//                 <td
//                   colSpan="5"
//                   style={{ textAlign: "center", padding: "20px", color: "red" }}
//                 >
//                   {error.includes("Токен авторизации не найден") ? (
//                     <div>
//                       <p>Необходимо войти в систему</p>
//                       <p style={{ fontSize: "14px", marginTop: "8px" }}>
//                         <a href="/login" style={{ color: "#3b82f6" }}>
//                           Перейти к странице входа
//                         </a>
//                       </p>
//                     </div>
//                   ) : (
//                     `Ошибка: ${error}`
//                   )}
//                 </td>
//               </TableRow>
//             ) : transactions.length > 0 ? (
//               transactions.map((transaction) => (
//                 <TableRow key={transaction._id}>
//                   <DescriptionCell>{transaction.description}</DescriptionCell>
//                   <CategoryCell>
//                     {getCategoryName(transaction.category)}
//                   </CategoryCell>
//                   <DateCell>{formatDate(transaction.date)}</DateCell>
//                   <AmountCell>{formatAmount(transaction.sum)}</AmountCell>
//                   <DeleteCell>
//                     <DeleteButton
//                       onClick={() =>
//                         handleDelete(transaction._id, transaction.description)
//                       }
//                     >
//                       <DeleteIcon
//                         src="/images/icons/deleteBtn.svg"
//                         alt="Удалить"
//                       />
//                     </DeleteButton>
//                   </DeleteCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <td
//                   colSpan="5"
//                   style={{ textAlign: "center", padding: "20px" }}
//                 >
//                   Нет транзакций для отображения
//                 </td>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </TableWrapper>
//   );
// };

// export default TransactionTable;
