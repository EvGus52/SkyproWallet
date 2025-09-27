import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import GlobalStyles from "../../GlobalStyles";
import {
  AnalyticsContainer,
  AnalyticsTitle,
  AnalyticsContent,
  AnalyticsGrid,
  FilterSection,
  ChartSection,
} from "./Analytics.styled";

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-07-10"));
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [chartType, setChartType] = useState("bar");


  // Обработчик выбора даты/периода из календаря
  const handleDateSelect = (dateOrRange) => {
    if (!dateOrRange) {
      // Очистка выбора
      setSelectedDate(new Date("2024-07-10"));
      setSelectedPeriod(null);
    } else if (
      dateOrRange &&
      typeof dateOrRange === "object" &&
      dateOrRange.days
    ) {
      // Выбрано несколько дней
      setSelectedPeriod(dateOrRange);
      setSelectedDate(dateOrRange.days[0]); // Для обратной совместимости
    } else if (dateOrRange instanceof Date) {
      // Выбрана одна дата - создаем период из одной даты
      setSelectedDate(dateOrRange);
      setSelectedPeriod({
        from: dateOrRange,
        to: dateOrRange,
        days: [dateOrRange],
      });
    }
  };

  // Фильтруем расходы по выбранной дате или периоду
  const selectedDateExpenses = useMemo(() => {


      return mockExpenses.filter((expense) => {
        return expense.date >= fromDate && expense.date <= toDate;
      });
    } else {
      // Если выбрана одна дата
      const dateStr = selectedDate.toISOString().split("T")[0];

      return mockExpenses.filter((expense) => expense.date === dateStr);
    }
  }, [selectedDate, selectedPeriod]);

  // Группируем расходы по категориям для выбранной даты (старая диаграмма)
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

          <AnalyticsGrid>
            <FilterSection>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                expenses={mockExpenses}
              />
            </FilterSection>

            <ChartSection>
              <ExpenseChart
                data={chartData}
                selectedDate={selectedDate}
                selectedPeriod={selectedPeriod}
                totalAmount={totalAmount}
                chartType={chartType}
                onChartTypeChange={setChartType}
              />
            </ChartSection>
          </AnalyticsGrid>
        </AnalyticsContainer>
      </main>
    </>
  );
};

export default Analytics;
