import React, { useState, useMemo } from "react";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import ExpenseChart from "../../components/ExpenseChart";
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

  // Расширенные данные для демонстрации разных периодов
  const mockExpenses = [
    // Июль 2024
    { date: "2024-07-10", amount: 3590, category: "Еда" },
    { date: "2024-07-10", amount: 1835, category: "Транспорт" },
    { date: "2024-07-10", amount: 0, category: "Жилье" },
    { date: "2024-07-10", amount: 1250, category: "Развлечения" },
    { date: "2024-07-10", amount: 600, category: "Образование" },
    { date: "2024-07-10", amount: 2306, category: "Другое" },
    { date: "2024-07-15", amount: 1500, category: "Еда" },
    { date: "2024-07-15", amount: 800, category: "Транспорт" },
    { date: "2024-07-20", amount: 2000, category: "Развлечения" },
    { date: "2024-07-20", amount: 1200, category: "Еда" },
    { date: "2024-07-25", amount: 800, category: "Транспорт" },
    { date: "2024-07-25", amount: 1500, category: "Жилье" },

    // Август 2024
    { date: "2024-08-01", amount: 2000, category: "Развлечения" },
    { date: "2024-08-01", amount: 1200, category: "Еда" },
    { date: "2024-08-05", amount: 3000, category: "Образование" },
    { date: "2024-08-05", amount: 500, category: "Другое" },
    { date: "2024-08-10", amount: 1800, category: "Еда" },
    { date: "2024-08-10", amount: 900, category: "Транспорт" },
    { date: "2024-08-15", amount: 2200, category: "Развлечения" },
    { date: "2024-08-15", amount: 700, category: "Жилье" },

    // Сентябрь 2024
    { date: "2024-09-01", amount: 2500, category: "Еда" },
    { date: "2024-09-01", amount: 1200, category: "Транспорт" },
    { date: "2024-09-05", amount: 1800, category: "Образование" },
    { date: "2024-09-05", amount: 600, category: "Другое" },
  ];

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
    if (
      selectedPeriod &&
      selectedPeriod.days &&
      selectedPeriod.days.length > 0
    ) {
      // Если выбраны конкретные дни
      const selectedDateStrings = selectedPeriod.days.map(
        (day) => day.toISOString().split("T")[0]
      );

      return mockExpenses.filter((expense) => {
        return selectedDateStrings.includes(expense.date);
      });
    } else if (selectedPeriod && selectedPeriod.from && selectedPeriod.to) {
      // Если выбран период (диапазон)
      const fromDate = selectedPeriod.from.toISOString().split("T")[0];
      const toDate = selectedPeriod.to.toISOString().split("T")[0];

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
