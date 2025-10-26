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
        borderRadius: window.innerWidth <= 767 ? 6 : 12,
        borderSkipped: false,
      },
    ],
  };

  const isMobile = window.innerWidth <= 767;

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
          size: isMobile ? 12 : 14,
          weight: "600",
        },
        bodyFont: {
          family: "Inter, sans-serif",
          size: isMobile ? 11 : 12,
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
            size: isMobile ? 10 : 12,
            weight: "500",
          },
          color: "#374151",
          maxRotation: 0,
          callback: function (value) {
            const label = this.getLabelForValue(value);
            // Обрезаем только на мобильных
            if (isMobile && label.length > 6) {
              return label.substring(0, 6) + "...";
            }
            return label;
          },
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderRadius: isMobile ? 6 : 12,
      },
    },
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
    layout: {
      padding: {
        top: isMobile ? 30 : 40,
        bottom: isMobile ? 10 : 20,
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
              window.innerWidth <= 767 ? 6 : 12
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
      const isMobile = window.innerWidth <= 767;

      ctx.save();
      // Адаптивный размер шрифта
      ctx.font = isMobile
        ? "600 10px Inter, sans-serif"
        : "600 12px Inter, sans-serif";
      ctx.fillStyle = "#374151";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          const x = bar.x;
          // Меньше отступ на мобильных
          const y = bar.y - (isMobile ? 4 : 8);
          // Убираем символ ₽ на мобильных для экономии места
          const text = isMobile
            ? value.toLocaleString()
            : `${value.toLocaleString()} ₽`;
          ctx.fillText(text, x, y);
        });
      });

      ctx.restore();
    },
  };

  return (
    <ChartWrapper>
      <HeaderBlock>
        <TotalSum>{totalAmount.toLocaleString()} ₽</TotalSum>
        <DateText>
          <span className="period-label">Расходы за</span> {dateRange}
        </DateText>
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
