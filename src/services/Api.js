import axios from "axios";
import { getErrorMessage } from "../utils/errorHandler";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

// Простая настройка axios с таймаутом
const apiClient = axios.create({
  timeout: 10000,
});

export async function validateToken({ token }) {
  try {
    const response = await apiClient.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { isValid: true, data: response.data }; // Возвращаем массив транзакций для валидации
  } catch (error) {
    return { isValid: false, error: getErrorMessage(error) };
  }
}
/**
 * Получить список транзакций с возможностью сортировки и фильтрации
 * @param {Object} params - Параметры запроса
 * @param {string} params.token - Токен авторизации
 * @param {string} [params.sortBy] - Поле для сортировки: "date" или "sum" (по убыванию)
 * @param {string} [params.filterBy] - Категории для фильтрации через запятую: "food,transport,housing,joy,education,others"
 * @returns {Promise<Array>} Массив транзакций с учетом фильтрации и сортировки
 */
export async function fetchTransactions({ token, sortBy, filterBy }) {
  try {
    console.log("🔍 fetchTransactions вызвана с параметрами:", {
      token: token ? "есть" : "нет",
      sortBy,
      filterBy,
    });

    // Строим query параметры
    const queryParams = new URLSearchParams();

    if (sortBy) {
      queryParams.append("sortBy", sortBy);
    }

    if (filterBy) {
      queryParams.append("filterBy", filterBy);
    }

    // Формируем URL с параметрами
    const url = queryParams.toString()
      ? `${API_URL}?${queryParams.toString()}`
      : API_URL;

    console.log("🔍 Отправляем запрос на URL:", url);
    console.log("🔍 Заголовки:", {
      Authorization: `Bearer ${token?.substring(0, 20)}...`,
    });

    const response = await apiClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("✅ Ответ от сервера:", {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
      dataLength: Array.isArray(response.data)
        ? response.data.length
        : "не массив",
    });

    return response.data; // API возвращает массив транзакций напрямую
  } catch (error) {
    console.error("❌ Ошибка в fetchTransactions:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Получить транзакции за определенный период
 * @param {Object} params - Параметры запроса
 * @param {string} params.token - Токен авторизации
 * @param {Object} params.period - Период для получения транзакций
 * @param {string} params.period.start - Начало периода в формате "M-D-YYYY" (например: "12-1-2024")
 * @param {string} params.period.end - Конец периода в формате "M-D-YYYY" (например: "12-1-2025")
 * @returns {Promise<Array>} Массив транзакций за указанный период
 */
export async function getTransactionsByPeriod({ token, period }) {
  try {
    const response = await apiClient.post(`${API_URL}/period`, period, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": " ",
      },
    });
    return response.data; // API возвращает массив транзакций за период
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function fetchTaskById({ token, id }) {
  try {
    const response = await apiClient.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Добавить новую транзакцию
 * @param {Object} params - Параметры запроса
 * @param {string} params.token - Токен авторизации
 * @param {Object} params.transaction - Данные транзакции
 * @param {string} params.transaction.description - Описание (минимум 4 символа)
 * @param {number} params.transaction.sum - Сумма (положительное число)
 * @param {string} params.transaction.category - Категория (food, transport, housing, joy, education, others)
 * @param {string} params.transaction.date - Дата в формате "M-D-YYYY" (например: "6-1-2025")
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export async function postTransaction({ token, transaction }) {
  try {
    const response = await apiClient.post(API_URL, transaction, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": " ",
      },
    });
    return response.data; // API возвращает обновленный список всех транзакций
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Обновить транзакцию по ID
 * @param {Object} params - Параметры запроса
 * @param {string} params.token - Токен авторизации
 * @param {string} params.id - ID транзакции для обновления
 * @param {Object} params.transaction - Новые данные транзакции
 * @param {string} params.transaction.description - Описание (минимум 4 символа)
 * @param {number} params.transaction.sum - Сумма (положительное число)
 * @param {string} params.transaction.category - Категория (food, transport, housing, joy, education, others)
 * @param {string} params.transaction.date - Дата в формате "M-D-YYYY" (например: "12-12-2025")
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export async function editTransaction({ token, id, transaction }) {
  try {
    const response = await apiClient.patch(`${API_URL}/${id}`, transaction, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": " ",
      },
    });
    return response.data; // API возвращает обновленный список всех транзакций
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Удалить транзакцию по ID
 * @param {Object} params - Параметры запроса
 * @param {string} params.token - Токен авторизации
 * @param {string} params.id - ID транзакции для удаления
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export async function deleteTransaction({ token, id }) {
  try {
    const response = await apiClient.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // API возвращает обновленный список всех транзакций
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
