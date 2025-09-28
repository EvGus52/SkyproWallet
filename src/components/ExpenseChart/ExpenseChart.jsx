import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LabelList,
} from "recharts";
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
  ChartTypeSelector,
  SelectorButton,
  ChartContainer,
} from "./ExpenseChart.styled";

const ExpenseChart = ({
  data = [],
  selectedDate,
  selectedPeriod,
  totalAmount = 0,
  chartType = "bar",
  onChartTypeChange,
}) => {
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

  const formatPeriod = (period) => {
    if (!period) return formatDate(selectedDate);

    // Если выбрано несколько дней без диапазона from/to
    if (period.days && period.days.length > 1) {
      const sortedDays = [...period.days].sort((a, b) => a - b);
      const fromStr = sortedDays[0].toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const toStr = sortedDays[sortedDays.length - 1].toLocaleDateString(
        "ru-RU",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );

      return `${fromStr} — ${toStr} (${period.days.length} дней)`;
    }

    // Если есть диапазон from-to
    if (period.from && period.to) {
      const fromStr = period.from.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const toStr = period.to.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      return `${fromStr} — ${toStr}`;
    }

    // Если выбрана одна дата
    if (period.days && period.days.length === 1) {
      return formatDate(period.days[0]);
    }

    return formatDate(selectedDate);
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString("ru-RU");
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "8px 12px",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{ margin: "0 0 4px 0", fontWeight: "600" }}>{label}</p>
          <p style={{ margin: 0, color: "#64748b" }}>
            Сумма: {formatAmount(payload[0].value)} ₽
          </p>
        </div>
      );
    }
    return null;
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 60, right: 20, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis
          dataKey="category"
          tick={{ fontSize: 12, fill: "#64748b" }}
          stroke="#64748b"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#64748b" }}
          stroke="#64748b"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) =>
            value > 0 ? `${(value / 1000).toFixed(0)}k` : ""
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="amount" radius={[6, 6, 0, 0]} maxBarSize={60}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
          ))}
          <LabelList
            dataKey="amount"
            position="top"
            formatter={(value) => `${formatAmount(value)} ₽`}
            style={{ fontSize: "12px", fill: "#1e293b", fontWeight: "600" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ category, percent }) =>
            `${category} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={120}
          fill="#8884d8"
          dataKey="amount"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [formatAmount(value), "Сумма"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );

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
          <DateText>Расходы за {formatPeriod(selectedPeriod)}</DateText>
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

  return (
    <ChartContainer>
      <ChartWrapper>
        <HeaderBlock>
          <TotalSum>{formatAmount(totalAmount)} ₽</TotalSum>
          <DateText>Расходы за {formatPeriod(selectedPeriod)}</DateText>
        </HeaderBlock>

        {onChartTypeChange && (
          <ChartTypeSelector>
            <SelectorButton
              $active={chartType === "bar"}
              onClick={() => onChartTypeChange("bar")}
            >
              Столбчатая
            </SelectorButton>
            <SelectorButton
              $active={chartType === "pie"}
              onClick={() => onChartTypeChange("pie")}
            >
              Круговая
            </SelectorButton>
          </ChartTypeSelector>
        )}

        <ChartArea>
          {onChartTypeChange
            ? chartType === "bar"
              ? renderBarChart()
              : renderPieChart()
            : renderChartContent()}
        </ChartArea>
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ExpenseChart;
