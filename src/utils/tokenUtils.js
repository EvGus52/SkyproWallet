/**
 * Утилиты для работы с токеном авторизации
 */

/**
 * Получить токен из localStorage
 * @returns {string|null} Токен или null если не найден
 */
export const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    console.error("Ошибка при получении токена:", error);
    return null;
  }
};

/**
 * Сохранить токен в localStorage
 * @param {string} token - Токен для сохранения
 * @returns {boolean} true если успешно сохранен
 */
export const setToken = (token) => {
  try {
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    console.error("Ошибка при сохранении токена:", error);
    return false;
  }
};

/**
 * Удалить токен из localStorage
 * @returns {boolean} true если успешно удален
 */
export const removeToken = () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    console.error("Ошибка при удалении токена:", error);
    return false;
  }
};

/**
 * Проверить, есть ли валидный токен
 * @returns {boolean} true если токен существует
 */
export const hasValidToken = () => {
  const token = getToken();
  return token !== null && token.trim() !== "";
};

/**
 * Проверить, авторизован ли пользователь
 * @returns {boolean} true если пользователь авторизован
 */
export const isAuthenticated = () => {
  return hasValidToken();
};

/**
 * Получить данные пользователя из localStorage
 * @returns {Object|null} Данные пользователя или null
 */
export const getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    return null;
  }
};

/**
 * Сохранить данные пользователя в localStorage
 * @param {Object} userData - Данные пользователя
 * @returns {boolean} true если успешно сохранены
 */
export const setUserData = (userData) => {
  try {
    localStorage.setItem("userData", JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error("Ошибка при сохранении данных пользователя:", error);
    return false;
  }
};

/**
 * Очистить все данные авторизации
 * @returns {boolean} true если успешно очищены
 */
export const clearAuthData = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    return true;
  } catch (error) {
    console.error("Ошибка при очистке данных авторизации:", error);
    return false;
  }
};
