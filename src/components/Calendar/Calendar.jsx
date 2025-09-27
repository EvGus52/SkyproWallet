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

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [displayedMonths] = useState([6, 7, 8, 9, 10, 11]); // Июль - Декабрь 2024

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
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

      days.push(
        <CalendarDay
          key={`${year}-${month}-${day}`}
          $isToday={isToday}
          $isSelected={isSelected}
          onClick={() => onDateSelect && onDateSelect(date)}
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
