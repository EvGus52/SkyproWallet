import { useContext, useState, useCallback } from "react";
import TransactionsContext from "./TransactionsContext";
import {
  fetchTransactions,
  postTransaction,
  deleteTransaction,
} from "../services/Api";
import { getToken, isAuthenticated, clearAuthData } from "../utils/tokenUtils";
import { appToasts } from "../utils/toast";

// eslint-disable-next-line react-refresh/only-export-components
export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider"
    );
  }
  return context;
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Проверка авторизации
  const checkAuth = () => {
    if (!isAuthenticated()) {
      setError("Необходимо войти в систему");
      return false;
    }
    return true;
  };

  // Загрузить все транзакции
  const loadTransactions = useCallback(async (sortBy, filterBy) => {
    if (!checkAuth()) {
      return;
    }

    const token = getToken();
    setLoading(true);
    setError(null);

    try {
      const response = await fetchTransactions({
        token,
        sortBy,
        filterBy,
      });
      // API может возвращать объект с полем transactions или массив напрямую
      const transactions = response.transactions || response;
      setTransactions(transactions);
    } catch (err) {
      // Если ошибка 401, очищаем данные авторизации
      if (err.message.includes("авторизации") || err.message.includes("401")) {
        clearAuthData();
        appToasts.sessionExpired();
        setError("Сессия истекла. Пожалуйста, войдите в систему заново");
      } else {
        appToasts.generalError(err.message);
        setError(err.message);
      }
      console.error("Ошибка при загрузке транзакций:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Добавить новую транзакцию
  const addTransaction = useCallback(async (transactionData) => {
    if (!checkAuth()) {
      return false;
    }

    const token = getToken();
    setLoading(true);
    setError(null);

    try {
      const response = await postTransaction({
        token,
        transaction: transactionData,
      });
      // API возвращает объект с полем transactions, извлекаем массив
      const updatedTransactions = response.transactions || response;
      setTransactions(updatedTransactions);
      return true;
    } catch (err) {
      if (err.message.includes("авторизации") || err.message.includes("401")) {
        clearAuthData();
        appToasts.sessionExpired();
        setError("Сессия истекла. Пожалуйста, войдите в систему заново");
      } else {
        appToasts.generalError(err.message);
        setError(err.message);
      }
      console.error("Ошибка при добавлении транзакции:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Удалить транзакцию
  const removeTransaction = useCallback(async (id) => {
    if (!checkAuth()) {
      return false;
    }

    const token = getToken();
    setLoading(true);
    setError(null);

    try {
      const response = await deleteTransaction({
        token,
        id,
      });
      // API возвращает объект с полем transactions, извлекаем массив
      const updatedTransactions = response.transactions || response;
      setTransactions(updatedTransactions);
      return true;
    } catch (err) {
      if (err.message.includes("авторизации") || err.message.includes("401")) {
        clearAuthData();
        appToasts.sessionExpired();
        setError("Сессия истекла. Пожалуйста, войдите в систему заново");
      } else {
        appToasts.generalError(err.message);
        setError(err.message);
      }
      console.error("Ошибка при удалении транзакции:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Очистить ошибки
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Очистить транзакции (при выходе)
  const clearTransactions = useCallback(() => {
    setTransactions([]);
    setError(null);
    clearAuthData(); // Очищаем все данные авторизации
  }, []);

  const value = {
    transactions,
    loading,
    error,
    loadTransactions,
    addTransaction,
    removeTransaction,
    clearError,
    clearTransactions,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};
