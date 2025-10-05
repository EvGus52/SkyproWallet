import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  HeaderRow,
  AddExpenseButton,
  PlusIcon,
  MobileDeleteButton,
} from "./MyExpenses.styled";

const MyExpenses = () => {
  const navigate = useNavigate();
  const {
    addTransaction,
    loadTransactions,
    error,
    clearError,
    removeTransaction,
    transactions,
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

  const handleTransactionSelect = (transaction) => {
    console.log("Selecting transaction:", transaction);
    setSelectedTransaction(transaction);
  };

  const handleDeleteSelected = () => {
    if (selectedTransaction) {
      confirmUtils.deleteExpense(selectedTransaction.description, () => {
        removeTransaction(selectedTransaction._id);
        setSelectedTransaction(null);
        appToasts.expenseDeleted(); // Показываем уведомление об удалении
      });
    }
  };

  const handleAddExpenseClick = () => {
    navigate("/add-expense");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer className="center">
        <HeaderRow>
          <PageTitle>Мои расходы</PageTitle>
          <AddExpenseButton onClick={handleAddExpenseClick}>
            <PlusIcon>+</PlusIcon> Новый расход
          </AddExpenseButton>
        </HeaderRow>

        <FormColumn>
          <TableGridArea>
            <TransactionTable
              selectedTransaction={selectedTransaction}
              onTransactionSelect={handleTransactionSelect}
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

        {selectedTransaction && (
          <MobileDeleteButton onClick={handleDeleteSelected}>
            Удалить расход
          </MobileDeleteButton>
        )}
      </MainContainer>
    </>
  );
};

export default MyExpenses;
