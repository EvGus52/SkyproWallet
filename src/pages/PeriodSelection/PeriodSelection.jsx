import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import GlobalStyles from "../../GlobalStyles";
import {
  PeriodSelectionContainer,
  PeriodSelectionTitle,
  PeriodSelectionContent,
  SelectPeriodButton,
  BackButton,
} from "./PeriodSelection.styled";

const PeriodSelection = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState(null);

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

  // Функция для обработки нажатия кнопки "Выбрать период"
  const handleSelectPeriod = () => {
    // Передаем выбранные даты в URL параметрах
    const params = new URLSearchParams();

    if (selectedRange) {
      if (selectedRange.startDate) {
        params.set("startDate", selectedRange.startDate.toISOString());
      }
      if (selectedRange.endDate) {
        params.set("endDate", selectedRange.endDate.toISOString());
      }
      params.set("type", "range");
    } else if (selectedDate) {
      params.set("date", selectedDate.toISOString());
      params.set("type", "single");
    }

    // Переходим обратно на страницу аналитики с выбранными датами
    navigate(`/analytics?${params.toString()}`);
  };

  // Функция для возврата назад
  const handleBack = () => {
    navigate("/analytics");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center">
        <PeriodSelectionContainer>
          <BackButton onClick={handleBack}>← Анализ расходов</BackButton>
          <PeriodSelectionTitle>Выбор периода</PeriodSelectionTitle>
          <PeriodSelectionContent>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </PeriodSelectionContent>
          <SelectPeriodButton onClick={handleSelectPeriod}>
            Выбрать период
          </SelectPeriodButton>
        </PeriodSelectionContainer>
      </main>
    </>
  );
};

export default PeriodSelection;
