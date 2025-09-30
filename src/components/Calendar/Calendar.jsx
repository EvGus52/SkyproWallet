import React, { useState, useEffect, useRef } from "react";
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
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentMonthRef = useRef(null);

  // Состояние для выбора диапазона дат
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSelectingRange, setIsSelectingRange] = useState(false);

  // Показываем текущий месяц и 11 месяцев назад
  const [displayedMonths] = useState(() => {
    const months = [];
    for (let i = -11; i <= 0; i++) {
      const monthIndex = currentMonth + i;
      const yearOffset = Math.floor(monthIndex / 12);
      const actualMonth = ((monthIndex % 12) + 12) % 12;
      months.push({
        month: actualMonth,
        yearOffset: yearOffset,
      });
    }
    return months;
  });

  // Прокручиваем к текущему месяцу при загрузке компонента
  useEffect(() => {
    if (currentMonthRef.current) {
      currentMonthRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  // Функция для обработки выбора даты
  const handleDateClick = (date) => {
    if (!isSelectingRange || !startDate) {
      // Начинаем новый диапазон
      setStartDate(date);
      setEndDate(null);
      setIsSelectingRange(true);
      onDateSelect &&
        onDateSelect({ startDate: date, endDate: null, type: "range" });
    } else {
      // Завершаем диапазон
      if (date < startDate) {
        // Если новая дата раньше начальной, меняем их местами
        setEndDate(startDate);
        setStartDate(date);
        onDateSelect &&
          onDateSelect({ startDate: date, endDate: startDate, type: "range" });
      } else {
        setEndDate(date);
        onDateSelect &&
          onDateSelect({ startDate, endDate: date, type: "range" });
      }
      setIsSelectingRange(false);
    }
  };

  // Функция для проверки, находится ли дата в выбранном диапазоне
  const isDateInRange = (date) => {
    if (!startDate) return false;
    if (!endDate) return date.toDateString() === startDate.toDateString();
    return date >= startDate && date <= endDate;
  };

  // Функция для проверки, является ли дата началом или концом диапазона
  const isRangeBoundary = (date) => {
    if (!startDate) return false;
    if (date.toDateString() === startDate.toDateString()) return true;
    if (endDate && date.toDateString() === endDate.toDateString()) return true;
    return false;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    // Исправляем день недели: в JS воскресенье = 0, понедельник = 1, но нам нужен понедельник = 0
    let startingDayOfWeek = firstDay.getDay();
    if (startingDayOfWeek === 0)
      startingDayOfWeek = 6; // Воскресенье становится 6
    else startingDayOfWeek = startingDayOfWeek - 1; // Понедельник становится 0

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
      const isToday =
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const inRange = isDateInRange(date);
      const isBoundary = isRangeBoundary(date);

      days.push(
        <CalendarDay
          key={`${year}-${month}-${day}`}
          $isToday={isToday}
          $isSelected={isSelected}
          $inRange={inRange}
          $isBoundary={isBoundary}
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
        {displayedMonths.map((monthData) => {
          const year = currentYear + monthData.yearOffset;
          const actualMonth = monthData.month;
          const isCurrentMonth =
            year === currentYear && actualMonth === currentMonth;

          return (
            <div
              key={`${year}-${actualMonth}`}
              className="month-row"
              ref={isCurrentMonth ? currentMonthRef : null}
            >
              <div className="month-header">
                {monthNames[actualMonth]} {year}
              </div>
              <CalendarGrid>{renderMonth(year, actualMonth)}</CalendarGrid>
            </div>
          );
        })}
      </MonthSection>
    </CalendarContainer>
  );
};

export default Calendar;
