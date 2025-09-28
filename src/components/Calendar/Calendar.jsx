import React, { useState } from "react";
import {
  CalendarContainer,
  PeriodBlock,
  CalendarHeader,
  WeekDaysBlock,
  WeekDay,
  SeparatorLine,
  MonthSection,
  CalendarGrid,
  CalendarDay,
} from "./Calendar.styled";

const Calendar = ({ selectedDate, onDateSelect, expenses = [] }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(2024);
  const [currentMonth, setCurrentMonth] = useState(6); // Июль (0-11)
  const [displayedMonths, setDisplayedMonths] = useState([6, 7, 8, 9, 10, 11]); // Июль - Декабрь 2024
  const [selectedRange, setSelectedRange] = useState({ from: null, to: null });
  const [selectedDays, setSelectedDays] = useState([]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handleDateClick = (date) => {
    const dateString = date.toISOString().split("T")[0];

    // Проверяем, выбрана ли уже эта дата
    const isAlreadySelected = selectedDays.some(
      (day) => day.toISOString().split("T")[0] === dateString
    );

    if (isAlreadySelected) {
      // Если дата уже выбрана, убираем её
      const newSelectedDays = selectedDays.filter(
        (day) => day.toISOString().split("T")[0] !== dateString
      );
      setSelectedDays(newSelectedDays);

      // Обновляем диапазон
      if (newSelectedDays.length === 0) {
        setSelectedRange({ from: null, to: null });
        onDateSelect && onDateSelect(null);
      } else if (newSelectedDays.length === 1) {
        setSelectedRange({ from: newSelectedDays[0], to: null });
        onDateSelect && onDateSelect(newSelectedDays[0]);
      } else {
        // Для множественного выбора не устанавливаем from/to, только days
        setSelectedRange({ from: null, to: null });
        onDateSelect &&
          onDateSelect({
            days: newSelectedDays,
          });
      }
    } else {
      // Если дата не выбрана, добавляем её (максимум 10 дней)
      if (selectedDays.length >= 10) {
        alert("Можно выбрать максимум 10 дней");
        return;
      }

      const newSelectedDays = [...selectedDays, date].sort((a, b) => a - b);
      setSelectedDays(newSelectedDays);

      // Обновляем диапазон
      if (newSelectedDays.length === 1) {
        setSelectedRange({ from: date, to: null });
        onDateSelect && onDateSelect(date);
      } else {
        // Для множественного выбора не устанавливаем from/to, только days
        setSelectedRange({
          from: null,
          to: null,
        });
        onDateSelect &&
          onDateSelect({
            days: newSelectedDays,
          });
      }
    }
  };

  const isDateInRange = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return selectedDays.some(
      (day) => day.toISOString().split("T")[0] === dateString
    );
  };

  const isDateInSelectedRange = (date) => {
    return isDateInRange(date);
  };

  const isDateRangeStart = (date) => {
    if (selectedDays.length === 0) return false;
    const dateString = date.toISOString().split("T")[0];
    const sortedDays = [...selectedDays].sort((a, b) => a - b);
    return sortedDays[0].toISOString().split("T")[0] === dateString;
  };

  const isDateRangeEnd = (date) => {
    if (selectedDays.length === 0) return false;
    const dateString = date.toISOString().split("T")[0];
    const sortedDays = [...selectedDays].sort((a, b) => a - b);
    return (
      sortedDays[sortedDays.length - 1].toISOString().split("T")[0] ===
      dateString
    );
  };

  const renderMonth = (year, month) => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(
      new Date(year, month)
    );
    const days = [];

    // Пустые ячейки для начала месяца
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${year}-${month}-${i}`} />);
    }

    // Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = false; // Убираем автоматическое выделение сегодняшней даты
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      // Новые состояния для диапазона
      const isInRange = isDateInSelectedRange(date);
      const isRangeStart = isDateRangeStart(date);
      const isRangeEnd = isDateRangeEnd(date);

      days.push(
        <CalendarDay
          key={`${year}-${month}-${day}`}
          $isToday={isToday}
          $isSelected={isSelected}
          $isInRange={isInRange}
          $isRangeStart={isRangeStart}
          $isRangeEnd={isRangeEnd}
          onClick={() => handleDateClick(date)}
        >
          <span>{day}</span>
        </CalendarDay>
      );
    }

    return days;
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // Показываем только текущий месяц
  const currentDate = new Date(currentYear, currentMonth);

  return (
    <CalendarContainer>
      <PeriodBlock>
        <CalendarHeader>
          <h3>Период</h3>
        </CalendarHeader>
      </PeriodBlock>

      <WeekDaysBlock>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDaysBlock>

      <SeparatorLine />

      <MonthSection>
        {displayedMonths.map((monthIndex) => (
          <div key={monthIndex} className="month-row">
            <div className="month-header">{monthNames[monthIndex]} 2024</div>
            <CalendarGrid>{renderMonth(2024, monthIndex)}</CalendarGrid>
          </div>
        ))}
      </MonthSection>
    </CalendarContainer>
  );
};

export default Calendar;
