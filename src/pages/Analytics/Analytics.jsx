import React, { useState, useMemo } from "react";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import ExpenseChart from "../../components/ExpenseChart";
import GlobalStyles from "../../GlobalStyles";
import {
  AnalyticsContainer,
  AnalyticsTitle,
  AnalyticsContent,
} from "./Analytics.styled";

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-07-10"));

  // Пример данных для демонстрации
  const mockExpenses = [
    { date: "2024-07-10", amount: 3590, category: "Еда" },
    { date: "2024-07-10", amount: 1835, category: "Транспорт" },
    { date: "2024-07-10", amount: 0, category: "Жилье" },
    { date: "2024-07-10", amount: 1250, category: "Развлечения" },
    { date: "2024-07-10", amount: 600, category: "Образование" },
    { date: "2024-07-10", amount: 2306, category: "Другое" },
    { date: "2024-07-15", amount: 1500, category: "Еда" },
    { date: "2024-07-15", amount: 800, category: "Транспорт" },
    { date: "2024-08-01", amount: 2000, category: "Развлечения" },
    { date: "2024-08-01", amount: 1200, category: "Еда" },
  ];

  // Фильтруем расходы по выбранной дате
  const selectedDateExpenses = useMemo(() => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    return mockExpenses.filter((expense) => expense.date === dateStr);
  }, [selectedDate]);

  // Группируем расходы по категориям для выбранной даты
  const chartData = useMemo(() => {
    const categoryMap = {};
    selectedDateExpenses.forEach((expense) => {
      if (categoryMap[expense.category]) {
        categoryMap[expense.category] += expense.amount;
      } else {
        categoryMap[expense.category] = expense.amount;
      }
    });

    return Object.entries(categoryMap).map(([category, amount]) => ({
      category,
      amount,
    }));
  }, [selectedDateExpenses]);

  // Общая сумма расходов за выбранную дату
  const totalAmount = useMemo(() => {
    return selectedDateExpenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [selectedDateExpenses]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center">
        <AnalyticsContainer>
          <AnalyticsTitle>Анализ расходов</AnalyticsTitle>
          <AnalyticsContent>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              expenses={mockExpenses}
            />
            <ExpenseChart
              data={chartData}
              selectedDate={selectedDate}
              totalAmount={totalAmount}
            />
          </AnalyticsContent>
        </AnalyticsContainer>
      </main>
    </>
  );
};

export default Analytics;

