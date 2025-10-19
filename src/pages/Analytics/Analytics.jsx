import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import GlobalStyles from "../../GlobalStyles";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import { fetchAllTransactions } from "../../services/Api";
import { getToken } from "../../utils/tokenUtils";
import { appToasts } from "../../utils/toast";
import {
  AnalyticsContainer,
  AnalyticsTitle,
  AnalyticsContent,
  PeriodSelectionLink,
} from "./Analytics.styled";

const Analytics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState(null);
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { transactions: contextTransactions } = useTransactions();

  // Обработка выбранного периода из навигации
  useEffect(() => {
    if (location.state?.selectedPeriod) {
      const { selectedPeriod, periodType } = location.state;
      if (periodType === "range") {
        setSelectedRange(selectedPeriod);
        setSelectedDate(null);
      } else {
        setSelectedDate(selectedPeriod);
        setSelectedRange(null);
      }
      // Очищаем state после использования
      navigate("/analytics", { replace: true });
    }
  }, [location.state, navigate]);

  // Функция для обработки выбора дат
  const handleDateSelect = (dateSelection) => {
    if (dateSelection.type === "range") {
      setSelectedRange(dateSelection);
      setSelectedDate(null);
    } else {
      setSelectedDate(dateSelection);
      setSelectedRange(null);
    }
  };

  // Маппинг категорий API на русские названия
  const categoryMapping = useMemo(
    () => ({
      food: "Еда",
      transport: "Транспорт",
      housing: "Жилье",
      joy: "Развлечения",
      education: "Образование",
      others: "Другое",
    }),
    []
  );

  // Загружаем транзакции при монтировании компонента
  useEffect(() => {
    const loadTransactions = async () => {
      const token = getToken();
      if (!token) {
        setError("Необходимо войти в систему");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetchAllTransactions({ token });
        // Преобразуем данные API в нужный формат
        const formattedTransactions = response.map((transaction) => ({
          id: transaction.id,
          date: transaction.date,
          amount: transaction.sum,
          category:
            categoryMapping[transaction.category] || transaction.category,
          description: transaction.description,
        }));
        setAllTransactions(formattedTransactions);
      } catch (err) {
        console.error("Ошибка при загрузке транзакций:", err);
        setError(err.message);
        appToasts.generalError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Если есть данные в контексте, используем их, иначе загружаем
    if (contextTransactions && contextTransactions.length > 0) {
      const formattedTransactions = contextTransactions.map((transaction) => ({
        id: transaction.id,
        date: transaction.date,
        amount: transaction.sum,
        category: categoryMapping[transaction.category] || transaction.category,
        description: transaction.description,
      }));
      setAllTransactions(formattedTransactions);
    } else {
      loadTransactions();
    }
  }, [contextTransactions, categoryMapping]);

  // Фильтруем расходы по выбранному периоду
  const filteredExpenses = useMemo(() => {
    return allTransactions.filter((transaction) => {
      // Преобразуем дату из формата API (ISO string) в Date объект
      const expenseDate = new Date(transaction.date);

      // Нормализуем даты, убирая время для корректного сравнения
      const normalizedExpenseDate = new Date(
        expenseDate.getFullYear(),
        expenseDate.getMonth(),
        expenseDate.getDate()
      );

      if (selectedRange) {
        // Фильтруем по диапазону дат
        const startDate = selectedRange.startDate;
        const endDate = selectedRange.endDate;

        if (!startDate) return false;
        if (!endDate) {
          // Если выбран только один день
          return normalizedExpenseDate.getTime() === startDate.getTime();
        }

        // Если выбран диапазон
        return (
          normalizedExpenseDate >= startDate && normalizedExpenseDate <= endDate
        );
      } else if (selectedDate) {
        // Фильтруем по одной дате
        const normalizedSelectedDate = new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        );
        return (
          normalizedExpenseDate.getTime() === normalizedSelectedDate.getTime()
        );
      }

      return false;
    });
  }, [selectedDate, selectedRange, allTransactions]);

  // Группируем расходы по категориям для выбранного периода
  const chartData = useMemo(() => {
    // Инициализируем все категории с нулевыми значениями
    const allCategories = {
      Еда: 0,
      Транспорт: 0,
      Жилье: 0,
      Развлечения: 0,
      Образование: 0,
      Другое: 0,
    };

    // Добавляем данные из отфильтрованных расходов
    filteredExpenses.forEach((expense) => {
      if (
        Object.prototype.hasOwnProperty.call(allCategories, expense.category)
      ) {
        allCategories[expense.category] += expense.amount;
      }
    });

    return Object.entries(allCategories).map(([category, amount]) => ({
      category,
      amount,
    }));
  }, [filteredExpenses]);

  // Общая сумма расходов за выбранный период
  const totalAmount = useMemo(() => {
    return filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [filteredExpenses]);

  // Форматируем дату для отображения
  const formatDateRange = () => {
    if (selectedRange) {
      const startDate = selectedRange.startDate;
      const endDate = selectedRange.endDate;

      if (!endDate) {
        return format(startDate, "d MMMM yyyy", { locale: ru });
      }

      const startFormatted = format(startDate, "d MMMM", { locale: ru });
      const endFormatted = format(endDate, "d MMMM yyyy", { locale: ru });
      return `${startFormatted} - ${endFormatted}`;
    } else if (selectedDate) {
      return format(selectedDate, "d MMMM yyyy", { locale: ru });
    }
    return "";
  };

  // Если загружаем данные, не показываем ничего (данные загружаются быстро)
  if (loading) {
    return (
      <>
        <GlobalStyles />
        <Header />
        <main className="center grid-mob">
          <AnalyticsContainer>
            <AnalyticsTitle>Анализ расходов</AnalyticsTitle>
          </AnalyticsContainer>
        </main>
      </>
    );
  }

  // Если есть ошибка, показываем её
  if (error) {
    return (
      <>
        <GlobalStyles />
        <Header />
        <main className="center grid-mob">
          <AnalyticsContainer>
            <AnalyticsTitle>Анализ расходов</AnalyticsTitle>
            <div
              style={{ textAlign: "center", padding: "40px", color: "#ef4444" }}
            >
              <div>Ошибка: {error}</div>
            </div>
          </AnalyticsContainer>
        </main>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center grid-mob">
        <AnalyticsContainer>
          <AnalyticsTitle>Анализ расходов</AnalyticsTitle>
          <AnalyticsContent>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
            <ExpenseChart
              data={chartData}
              totalAmount={totalAmount}
              dateRange={formatDateRange()}
            />
          </AnalyticsContent>
          <PeriodSelectionLink onClick={() => navigate("/period-selection")}>
            Выбрать другой период
          </PeriodSelectionLink>
        </AnalyticsContainer>
      </main>
    </>
  );
};

export default Analytics;
