// API.js - Файл с комментариями о запросах для аналитики расходов

// Базовый URL API (замените на ваш реальный URL)
const BASE_URL = "https://your-api-domain.com/api";

// Функция для выполнения HTTP запросов
const apiRequest = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Добавьте токен авторизации если нужно
      // 'Authorization': `Bearer ${getToken()}`,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

// ===== ЗАПРОСЫ ДЛЯ АНАЛИТИКИ РАСХОДОВ =====

/**
 * Получить расходы за конкретную дату
 * Используется для: отображения расходов в календаре за выбранный день
 * @param {string} date - Дата в формате YYYY-MM-DD
 * @returns {Promise<Array>} - Массив расходов за день
 */
export const getExpensesByDate = async (date) => {
  return apiRequest(`/expenses/date/${date}`);
};

/**
 * Получить расходы за период (диапазон дат)
 * Используется для: динамической диаграммы с фильтром по периодам
 * @param {string} fromDate - Начальная дата в формате YYYY-MM-DD
 * @param {string} toDate - Конечная дата в формате YYYY-MM-DD
 * @returns {Promise<Array>} - Массив расходов за период
 */
export const getExpensesByPeriod = async (fromDate, toDate) => {
  return apiRequest(`/expenses/period?from=${fromDate}&to=${toDate}`);
};

/**
 * Получить статистику расходов по категориям за период
 * Используется для: группировки данных в диаграмме по категориям
 * @param {string} fromDate - Начальная дата в формате YYYY-MM-DD
 * @param {string} toDate - Конечная дата в формате YYYY-MM-DD
 * @returns {Promise<Object>} - Объект с группировкой по категориям
 * {
 *   "Еда": 15000,
 *   "Транспорт": 8000,
 *   "Развлечения": 5000,
 *   ...
 * }
 */
export const getExpensesByCategory = async (fromDate, toDate) => {
  return apiRequest(`/expenses/categories?from=${fromDate}&to=${toDate}`);
};

/**
 * Получить все расходы пользователя
 * Используется для: отображения всех данных в календаре (подсветка дат с расходами)
 * @returns {Promise<Array>} - Массив всех расходов пользователя
 */
export const getAllExpenses = async () => {
  return apiRequest("/expenses");
};

/**
 * Получить динамику расходов по дням за период
 * Используется для: временных диаграмм (линейные графики по дням)
 * @param {string} fromDate - Начальная дата в формате YYYY-MM-DD
 * @param {string} toDate - Конечная дата в формате YYYY-MM-DD
 * @returns {Promise<Array>} - Массив с данными по дням
 * [
 *   { date: "2024-07-10", total: 9581, categories: {...} },
 *   { date: "2024-07-11", total: 2300, categories: {...} },
 *   ...
 * ]
 */
export const getExpensesTimeline = async (fromDate, toDate) => {
  return apiRequest(`/expenses/timeline?from=${fromDate}&to=${toDate}`);
};

/**
 * Получить сводную статистику за период
 * Используется для: отображения общей суммы и метрик
 * @param {string} fromDate - Начальная дата в формате YYYY-MM-DD
 * @param {string} toDate - Конечная дата в формате YYYY-MM-DD
 * @returns {Promise<Object>} - Объект со статистикой
 * {
 *   totalAmount: 25000,
 *   averagePerDay: 833,
 *   topCategory: "Еда",
 *   daysCount: 30,
 *   ...
 * }
 */
export const getExpensesSummary = async (fromDate, toDate) => {
  return apiRequest(`/expenses/summary?from=${fromDate}&to=${toDate}`);
};

// ===== ДОПОЛНИТЕЛЬНЫЕ ЗАПРОСЫ =====

/**
 * Добавить новый расход
 * @param {Object} expenseData - Данные расхода
 * @returns {Promise<Object>} - Созданный расход
 */
export const createExpense = async (expenseData) => {
  return apiRequest("/expenses", {
    method: "POST",
    body: JSON.stringify(expenseData),
  });
};

/**
 * Обновить расход
 * @param {string} id - ID расхода
 * @param {Object} expenseData - Новые данные расхода
 * @returns {Promise<Object>} - Обновленный расход
 */
export const updateExpense = async (id, expenseData) => {
  return apiRequest(`/expenses/${id}`, {
    method: "PUT",
    body: JSON.stringify(expenseData),
  });
};

/**
 * Удалить расход
 * @param {string} id - ID расхода
 * @returns {Promise<void>}
 */
export const deleteExpense = async (id) => {
  return apiRequest(`/expenses/${id}`, {
    method: "DELETE",
  });
};

/**
 * Получить список доступных категорий
 * @returns {Promise<Array>} - Массив категорий
 */
export const getCategories = async () => {
  return apiRequest("/categories");
};

// ===== ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ В КОМПОНЕНТАХ =====

/*
// В компоненте Analytics.jsx:

import { getExpensesByPeriod, getExpensesByCategory } from '../api/API';

// Загрузка данных для динамической диаграммы
useEffect(() => {
  const loadPeriodData = async () => {
    if (selectedPeriod?.from && selectedPeriod?.to) {
      try {
        const fromDate = selectedPeriod.from.toISOString().split('T')[0];
        const toDate = selectedPeriod.to.toISOString().split('T')[0];
        
        // Получаем данные по категориям
        const categoryData = await getExpensesByCategory(fromDate, toDate);
        
        // Преобразуем в формат для диаграммы
        const chartData = Object.entries(categoryData).map(([category, amount]) => ({
          category,
          amount,
        }));
        
        setDynamicChartData(chartData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    }
  };

  loadPeriodData();
}, [selectedPeriod]);

// В компоненте Calendar:
import { getAllExpenses } from '../api/API';

useEffect(() => {
  const loadExpenses = async () => {
    try {
      const expenses = await getAllExpenses();
      setExpenses(expenses);
    } catch (error) {
      console.error('Ошибка загрузки расходов:', error);
    }
  };

  loadExpenses();
}, []);
*/
