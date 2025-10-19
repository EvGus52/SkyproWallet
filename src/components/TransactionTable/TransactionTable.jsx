import { useTransactions } from "../../contexts/TransactionsContextProvider";
import { confirmUtils } from "../../utils/confirmAlert.jsx";
import TableSkeleton from "../TableSkeleton/TableSkeleton";
import {
  TableWrapper,
  TableTitle,
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

// Компонент будет получать данные через props

// Функция для форматирования суммы
const formatAmount = (amount) => {
  return (
    new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: 0,
    }).format(amount) + " ₽"
  );
};

const TransactionTable = ({ onTransactionSelect, selectedTransaction }) => {
  const { transactions, loading, error, removeTransaction } = useTransactions();

  // Транзакции загружаются в родительском компоненте MyExpenses

  const handleDelete = (id, description) => {
    confirmUtils.deleteExpense(description, () => removeTransaction(id));
  };

  const handleRowClick = (transaction) => {
    if (onTransactionSelect) {
      onTransactionSelect(transaction);
    }
  };

  // Функция для форматирования даты из API формата в читаемый вид
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Функция для получения русскоязычного названия категории
  const getCategoryName = (category) => {
    const categoryMap = {
      food: "Еда",
      transport: "Транспорт",
      housing: "Жилье",
      joy: "Развлечения",
      education: "Образование",
      others: "Другое",
    };
    return categoryMap[category] || category;
  };

  return (
    <TableWrapper>
      <TableTitle>Таблица расходов</TableTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <HeaderRow>
              <HeaderCell>Описание</HeaderCell>
              <HeaderCell>Категория</HeaderCell>
              <HeaderCell $alignRight>Дата</HeaderCell>
              <HeaderCell $alignRight>Сумма</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableSkeleton rows={8} />
            ) : error ? (
              <TableRow>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px", color: "red" }}
                >
                  {error.includes("Токен авторизации не найден") ? (
                    <div>
                      <p>Необходимо войти в систему</p>
                      <p style={{ fontSize: "14px", marginTop: "8px" }}>
                        <a href="/login" style={{ color: "#3b82f6" }}>
                          Перейти к странице входа
                        </a>
                      </p>
                    </div>
                  ) : (
                    `Ошибка: ${error}`
                  )}
                </td>
              </TableRow>
            ) : transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow
                  key={transaction._id}
                  onClick={() => handleRowClick(transaction)}
                  $isSelected={
                    selectedTransaction &&
                    selectedTransaction._id === transaction._id
                  }
                >
                  <DescriptionCell>{transaction.description}</DescriptionCell>
                  <CategoryCell>
                    {getCategoryName(transaction.category)}
                  </CategoryCell>
                  <DateCell>{formatDate(transaction.date)}</DateCell>
                  <AmountCell>{formatAmount(transaction.sum)}</AmountCell>
                  <DeleteCell>
                    <DeleteButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(transaction._id, transaction.description);
                      }}
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
