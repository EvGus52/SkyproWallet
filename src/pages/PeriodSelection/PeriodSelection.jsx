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
  SelectedPeriodDisplay,
  ActionButtons,
  ConfirmButton,
  CancelButton,
  BackButton,
  ArrowIcon,
  MobileSelectButton,
} from "./PeriodSelection.styled";

const PeriodSelection = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
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

  // Обработчик подтверждения выбора
  const handleConfirm = () => {
    const selectedPeriod = selectedRange || selectedDate;
    if (selectedPeriod) {
      // Передаем выбранный период через state при навигации
      navigate("/analytics", {
        state: {
          selectedPeriod: selectedPeriod,
          periodType: selectedRange ? "range" : "single",
        },
      });
    }
  };

  // Обработчик отмены
  const handleCancel = () => {
    navigate("/analytics");
  };

  // Обработчик кнопки "Назад"
  const handleBack = () => {
    navigate("/analytics");
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center grid-mob">
        <PeriodSelectionContainer>
          <BackButton onClick={handleBack}>
            <ArrowIcon src="/images/icons/arrow.svg" alt="Назад" />
            Анализ расходов
          </BackButton>
          <PeriodSelectionTitle>Выбор периода</PeriodSelectionTitle>
          <PeriodSelectionContent>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
            {formatDateRange() && (
              <SelectedPeriodDisplay>
                Выбранный период: {formatDateRange()}
              </SelectedPeriodDisplay>
            )}
            <ActionButtons>
              <CancelButton onClick={handleCancel}>Отмена</CancelButton>
              <ConfirmButton
                onClick={handleConfirm}
                disabled={!selectedDate && !selectedRange}
              >
                Применить
              </ConfirmButton>
            </ActionButtons>
            <MobileSelectButton
              onClick={handleConfirm}
              disabled={!selectedDate && !selectedRange}
            >
              Выбрать период
            </MobileSelectButton>
          </PeriodSelectionContent>
        </PeriodSelectionContainer>
      </main>
    </>
  );
};

export default PeriodSelection;
