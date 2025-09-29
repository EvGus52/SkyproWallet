import React from "react";
import {
  ChartWrapper,
  HeaderBlock,
  NoDataMessage,
  TotalSum,
  DateText,
  ChartArea,
  BarWrapper,
  BarColumn,
  BarValue,
  BarCategory,
} from "./ExpenseChart.styled"; 

const ExpenseChart = ({ data = [], selectedDate, totalAmount = 0 }) => {
  if (!data || data.length === 0) {
    return (
      <ChartWrapper>
        <NoDataMessage>Нет данных для отображения</NoDataMessage>
      </ChartWrapper>
    );
  }

  const formatDate = (date) => {
    if (!date) return "";
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("ru-RU", options);
  };

  const categoryColors = {
    Еда: "#D9B6FF",
    Транспорт: "#FFB53D",
    Жилье: "#6EE4FE",
    Развлечения: "#B0AEFF",
    Образование: "#BCEC30",
    Другое: "#FFB9B8",
  };

  const renderChartContent = () => {
    // Высоты столбцов согласно макету (в пикселях)
    const barHeights = {
      Еда: 328,
      Транспорт: 169,
      Жилье: 4,
      Развлечения: 109,
      Образование: 65,
      Другое: 212,
    };

    return (
      <>
        <HeaderBlock>
          <TotalSum>{totalAmount.toLocaleString()} ₽</TotalSum>
          <DateText>Расходы за {formatDate(selectedDate)}</DateText>
        </HeaderBlock>
        <ChartArea>
          {data.map((item, index) => {
            const height = barHeights[item.category] || 4;
            return (
              <BarWrapper key={index}>
                <BarColumn
                  style={{
                    backgroundColor: categoryColors[item.category] || "#64748b",
                    height: `${height}px`,
                  }}
                >
                  <BarValue>{item.amount.toLocaleString()} ₽</BarValue>
                </BarColumn>
                <BarCategory>{item.category}</BarCategory>
              </BarWrapper>
            );
          })}
        </ChartArea>
      </>
    );
  };

  return <ChartWrapper>{renderChartContent()}</ChartWrapper>;
};

export default ExpenseChart;
