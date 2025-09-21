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

// Моковые данные транзакций согласно макету
const mockTransactions = [
  {
    id: 1,
    date: "03.07.2024",
    category: "Еда",
    description: "Пятерочка",
    amount: 3500,
  },
  {
    id: 2,
    date: "03.07.2024",
    category: "Транспорт",
    description: "Яндекс Такси",
    amount: 730,
  },
  {
    id: 3,
    date: "03.07.2024",
    category: "Другое",
    description: "Аптека Вита",
    amount: 1200,
  },
  {
    id: 4,
    date: "03.07.2024",
    category: "Еда",
    description: "Бургер Кинг",
    amount: 950,
  },
  {
    id: 5,
    date: "02.07.2024",
    category: "Еда",
    description: "Деливери",
    amount: 1320,
  },
  {
    id: 6,
    date: "02.07.2024",
    category: "Еда",
    description: "Кофейня №1",
    amount: 400,
  },
  {
    id: 7,
    date: "29.06.2024",
    category: "Развлечения",
    description: "Бильярд",
    amount: 600,
  },
  {
    id: 8,
    date: "29.06.2024",
    category: "Еда",
    description: "Перекресток",
    amount: 2360,
  },
  {
    id: 9,
    date: "29.06.2024",
    category: "Транспорт",
    description: "Лукойл",
    amount: 1000,
  },
  {
    id: 10,
    date: "29.06.2024",
    category: "Другое",
    description: "Летуаль",
    amount: 4300,
  },
  {
    id: 11,
    date: "28.06.2024",
    category: "Транспорт",
    description: "Яндекс Такси",
    amount: 320,
  },
  {
    id: 12,
    date: "28.06.2024",
    category: "Еда",
    description: "Перекресток",
    amount: 1360,
  },
  {
    id: 13,
    date: "28.06.2024",
    category: "Еда",
    description: "Деливери",
    amount: 2320,
  },
  {
    id: 14,
    date: "27.06.2024",
    category: "Еда",
    description: "Вкусвилл",
    amount: 1220,
  },
  {
    id: 15,
    date: "27.06.2024",
    category: "Еда",
    description: "Кофейня №1",
    amount: 920,
  },
  {
    id: 16,
    date: "26.06.2024",
    category: "Еда",
    description: "Вкусвилл",
    amount: 840,
  },
  {
    id: 17,
    date: "26.06.2024",
    category: "Еда",
    description: "Кофейня №1",
    amount: 920,
  },
];

// Функция для форматирования суммы
const formatAmount = (amount) => {
  return (
    new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: 0,
    }).format(amount) + " ₽"
  );
};

const TransactionTable = () => {
  const handleDelete = (id) => {
    console.log("Удаление транзакции с ID:", id);
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
              <HeaderCell>Дата</HeaderCell>
              <HeaderCell>Сумма</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <DescriptionCell>{transaction.description}</DescriptionCell>
                <CategoryCell>{transaction.category}</CategoryCell>
                <DateCell>{transaction.date}</DateCell>
                <AmountCell>{formatAmount(transaction.amount)}</AmountCell>
                <DeleteCell>
                  <DeleteButton onClick={() => handleDelete(transaction.id)}>
                    <DeleteIcon
                      src="/images/icons/deleteBtn.svg"
                      alt="Удалить"
                    />
                  </DeleteButton>
                </DeleteCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default TransactionTable;
