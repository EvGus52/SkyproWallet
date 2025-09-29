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
      <main className="center" style={{ padding: "24px" }}>
        <h1
          style={{
            marginBottom: "24px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e293b",
          }}
        >
          Мои расходы
        </h1>

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
      </main>
    </>
  );
};

export default MyExpenses;
