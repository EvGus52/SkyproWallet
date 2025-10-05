import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appToasts } from "../../utils/toast";
import Header from "../../components/Header/Header";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import GlobalStyles from "../../GlobalStyles";
import {
  BackButton,
  BackIcon,
  BackText,
  PageTitle,
  MainContainer,
} from "./AddExpense.styled";

const AddExpense = () => {
  const navigate = useNavigate();
  const { addTransaction, error, clearError } = useTransactions();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        navigate("/my-expenses"); // Переходим обратно к списку расходов
      }
    } catch (err) {
      console.error("Ошибка при добавлении расхода:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    clearError();
    navigate("/my-expenses"); // Возвращаемся к списку расходов
  };

  const handleBack = () => {
    navigate("/my-expenses");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer className="center">
        <BackButton onClick={handleBack}>
          <BackIcon>←</BackIcon>
          <BackText>Мои расходы</BackText>
        </BackButton>

        <PageTitle>Новый расход</PageTitle>

        <ExpenseForm
          onSubmit={handleExpenseSubmit}
          onCancel={handleCancel}
          isFormSubmitting={isSubmitting}
        />
      </MainContainer>
    </>
  );
};

export default AddExpense;



