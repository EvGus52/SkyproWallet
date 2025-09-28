import axios from "axios";
import { getErrorMessage } from "../utils/errorHandler";

const API_URL = "https://wedev-api.sky.pro/api";

// Простая настройка axios для авторизации
const authClient = axios.create({
  timeout: 10000,
});

/**
 * Вход в систему
 * @param {Object} userData - Данные пользователя
 * @param {string} userData.login - Логин пользователя
 * @param {string} userData.password - Пароль пользователя
 * @returns {Promise<Object>} Данные пользователя и токен
 */
export async function signIn(userData) {
  try {
    const response = await authClient.post(`${API_URL}/user/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Регистрация нового пользователя
 * @param {Object} userData - Данные пользователя
 * @param {string} userData.name - Имя пользователя
 * @param {string} userData.login - Логин пользователя
 * @param {string} userData.password - Пароль пользователя
 * @returns {Promise<Object>} Данные пользователя и токен
 */
export async function signUp(userData) {
  try {
    const response = await authClient.post(`${API_URL}/user`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Получить информацию о текущем пользователе
 * @param {string} token - Токен авторизации
 * @returns {Promise<Object>} Данные пользователя
 */
export async function getCurrentUser(token) {
  try {
    const response = await authClient.get(`${API_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Выход из системы
 * @param {string} token - Токен авторизации
 * @returns {Promise<Object>} Результат выхода
 */
export async function signOut(token) {
  try {
    const response = await authClient.post(
      `${API_URL}/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
