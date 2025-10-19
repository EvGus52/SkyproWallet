import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appToasts } from "../../utils/toast";
import Header from "../../components/Header/Header";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import GlobalStyles from "../../GlobalStyles";
import {
  PageContainer,
  PageTitle,
  BackButton,
  ArrowIcon,
} from "./AddExpense.styled";

const AddExpense = () => {
  const { addTransaction, error, clearError } = useTransactions();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
        navigate("/my-expenses"); // Переходим обратно на страницу расходов
      }
    } catch (err) {
      console.error("Ошибка при добавлении расхода:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    clearError();
    navigate("/my-expenses"); // Возвращаемся на страницу расходов
  };

  const handleBack = () => {
    navigate("/my-expenses");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <PageContainer className="center grid-mob">
        <BackButton onClick={handleBack}>
          <ArrowIcon src="/images/icons/arrow.svg" alt="Назад" />
          Мои расходы
        </BackButton>
        <PageTitle>Новый расход</PageTitle>
        <ExpenseForm
          onSubmit={handleExpenseSubmit}
          onCancel={handleCancel}
          isFormSubmitting={isSubmitting}
        />
      </PageContainer>
    </>
  );
};

export default AddExpense;
