import { useState, useEffect } from "react";
import { appToasts } from "../../utils/toast";
import Header from "../../components/Header/Header";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import GlobalStyles, {
  FormColumn,
  TableGridArea,
  FormGridArea,
} from "../../GlobalStyles";
import { PageTitle, MainContainer } from "./MyExpenses.styled";

const MyExpenses = () => {
  const { addTransaction, loadTransactions, error, clearError } =
    useTransactions();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer className="center">
        <PageTitle>Мои расходы</PageTitle>

        <FormColumn>
          <TableGridArea>
            <TransactionTable />
          </TableGridArea>
          <FormGridArea>
            <ExpenseForm
              onSubmit={handleExpenseSubmit}
              onCancel={handleCancel}
              isFormSubmitting={isSubmitting}
            />
          </FormGridArea>
        </FormColumn>
      </MainContainer>
    </>
  );
};

export default MyExpenses;
