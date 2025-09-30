import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  ChartWrapper,
  HeaderBlock,
  NoDataMessage,
  TotalSum,
  DateText,
  ChartArea,
} from "./ExpenseChart.styled";

// Регистрируем компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = ({ data = [], totalAmount = 0, dateRange }) => {
  if (!data || data.length === 0) {
    return (
      <ChartWrapper>
        <NoDataMessage>Нет данных для отображения</NoDataMessage>
      </ChartWrapper>
    );
  }

  const categoryColors = {
    Еда: "#D9B6FF",
    Транспорт: "#FFB53D",
    Жилье: "#6EE4FE",
    Развлечения: "#B0AEFF",
    Образование: "#BCEC30",
    Другое: "#FFB9B8",
  };

  // Подготавливаем данные для Chart.js
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Сумма расходов",
        data: data.map((item) => item.amount),
        backgroundColor: data.map(
          (item) => categoryColors[item.category] || "#64748b"
        ),
        borderColor: data.map(
          (item) => categoryColors[item.category] || "#64748b"
        ),
        borderWidth: 0,
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#374151",
        bodyColor: "#6b7280",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        titleFont: {
          family: "Inter, sans-serif",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "Inter, sans-serif",
          size: 12,
        },
        callbacks: {
          title: function (context) {
            return context[0].label;
          },
          label: function (context) {
            return `Сумма: ${context.parsed.y.toLocaleString()} ₽`;
          },
        },
        filter: function () {
          // Показываем tooltip для всех значений, включая нулевые
          return true;
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "Inter, sans-serif",
            size: 12,
            weight: "500",
          },
          color: "#374151",
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 12,
      },
    },
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
    layout: {
      padding: {
        top: 40,
        bottom: 20,
      },
    },
  };

  // Кастомный плагин для обработки нулевых значений
  const minHeightPlugin = {
    id: "minHeight",
    beforeDatasetsDraw: (chart) => {
      const { ctx, data } = chart;

      // Рисуем столбцы для нулевых значений с высотой 4px
      data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          if (value === 0) {
            ctx.save();
            ctx.fillStyle = dataset.backgroundColor[index];
            ctx.beginPath();
            ctx.roundRect(
              bar.x - bar.width / 2,
              chart.chartArea.bottom - 4,
              bar.width,
              4,
              12
            );
            ctx.fill();
            ctx.restore();
          }
        });
      });
    },
  };

  // Кастомный плагин для скрытия оригинальных столбцов нулевых значений
  const hideZeroBarsPlugin = {
    id: "hideZeroBars",
    afterDatasetsDraw: (chart) => {
      const { ctx, data } = chart;

      // Скрываем оригинальные столбцы для нулевых значений
      data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          if (value === 0) {
            ctx.save();
            ctx.fillStyle = chart.options.backgroundColor || "white";
            ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.height);
            ctx.restore();
          }
        });
      });
    },
  };

  // Кастомный плагин для отображения значений на столбцах
  const valueOnTopPlugin = {
    id: "valueOnTop",
    afterDatasetsDraw: (chart) => {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "600 12px Inter, sans-serif";
      ctx.fillStyle = "#374151";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          const x = bar.x;
          const y = bar.y - 8;
          ctx.fillText(`${value.toLocaleString()} ₽`, x, y);
        });
      });

      ctx.restore();
    },
  };

  return (
    <ChartWrapper>
      <HeaderBlock>
        <TotalSum>{totalAmount.toLocaleString()} ₽</TotalSum>
        <DateText>Расходы за {dateRange}</DateText>
      </HeaderBlock>
      <ChartArea>
        <Bar
          data={chartData}
          options={options}
          plugins={[minHeightPlugin, hideZeroBarsPlugin, valueOnTopPlugin]}
        />
      </ChartArea>
    </ChartWrapper>
  );
};

export default ExpenseChart;
