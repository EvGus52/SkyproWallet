import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { appToasts } from "../../utils/toast";
import { confirmUtils } from "../../utils/confirmAlert.jsx";
import Header from "../../components/Header/Header";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import GlobalStyles, {
  FormColumn,
  TableGridArea,
  FormGridArea,
} from "../../GlobalStyles";
import {
  PageTitle,
  MainContainer,
  TitleContainer,
  AddButton,
  MobileDeleteButton,
} from "./MyExpenses.styled";

const MyExpenses = () => {
  const {
    addTransaction,
    loadTransactions,
    error,
    clearError,
    removeTransaction,
  } = useTransactions();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Загружаем транзакции при монтировании компонента
  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  // Показываем ошибки из контекста через toast
  useEffect(() => {
    if (error) {
      appToasts.generalError(error);
    }
  }, [error]);

  const handleExpenseSubmit = async (expenseData) => {
    setIsSubmitting(true);
    clearError();

    try {
      const success = await addTransaction(expenseData);
      if (success) {
        appToasts.expenseAdded();
      }
    } catch (err) {
      console.error("Ошибка при добавлении расхода:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    clearError();
  };

  const handleDeleteTransaction = () => {
    if (selectedTransaction) {
      confirmUtils.deleteExpense(selectedTransaction.description, () => {
        removeTransaction(selectedTransaction._id);
        setSelectedTransaction(null);
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer className="center grid-mob">
        <TitleContainer>
          <PageTitle>Мои расходы</PageTitle>
          <AddButton as={Link} to="/add-expense">
            <img src="/images/icons/plus.svg" alt="Добавить расход" />
            Новый расход
          </AddButton>
        </TitleContainer>

        <FormColumn>
          <TableGridArea>
            <TransactionTable
              onTransactionSelect={setSelectedTransaction}
              selectedTransaction={selectedTransaction}
            />
          </TableGridArea>
          <FormGridArea>
            <ExpenseForm
              onSubmit={handleExpenseSubmit}
              onCancel={handleCancel}
              isFormSubmitting={isSubmitting}
            />
          </FormGridArea>
        </FormColumn>

        {/* Мобильная кнопка удаления */}
        <MobileDeleteButton
          onClick={handleDeleteTransaction}
          disabled={!selectedTransaction}
        >
          Удалить расход
        </MobileDeleteButton>
      </MainContainer>
    </>
  );
};

export default MyExpenses;
