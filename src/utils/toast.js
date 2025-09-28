import { toast } from "react-toastify";

// Общие настройки для всех toast-уведомлений
const defaultOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

// Утилиты для различных типов уведомлений
export const toastUtils = {
  // Успешные операции
  success: (message, options = {}) => {
    return toast.success(message, {
      ...defaultOptions,
      ...options,
    });
  },

  // Ошибки
  error: (message, options = {}) => {
    return toast.error(message, {
      ...defaultOptions,
      autoClose: 3000, // Ошибки показываем дольше
      ...options,
    });
  },

  // Предупреждения
  warning: (message, options = {}) => {
    return toast.warning(message, {
      ...defaultOptions,
      autoClose: 3000,
      ...options,
    });
  },

  // Информационные сообщения
  info: (message, options = {}) => {
    return toast.info(message, {
      ...defaultOptions,
      ...options,
    });
  },

  // Загрузка/прогресс
  loading: (message, options = {}) => {
    return toast.loading(message, {
      ...defaultOptions,
      autoClose: false, // Загрузка не закрывается автоматически
      ...options,
    });
  },

  // Обновление существующего toast (например, для загрузки)
  update: (toastId, message, type = "success", options = {}) => {
    return toast.update(toastId, {
      render: message,
      type,
      ...defaultOptions,
      autoClose: type === "error" ? 3000 : 2000,
      ...options,
    });
  },

  // Закрытие конкретного toast
  dismiss: (toastId) => {
    return toast.dismiss(toastId);
  },

  // Закрытие всех toast
  dismissAll: () => {
    return toast.dismiss();
  },
};

// Специализированные уведомления для приложения
export const appToasts = {
  // Расходы
  expenseAdded: () => {
    return toastUtils.success("Расход успешно добавлен!");
  },

  expenseUpdated: () => {
    return toastUtils.success("Расход успешно обновлен!");
  },

  expenseDeleted: () => {
    return toastUtils.success("Расход успешно удален!");
  },

  // Ошибки авторизации
  authError: (message = "Ошибка авторизации") => {
    return toastUtils.error(message);
  },

  sessionExpired: () => {
    return toastUtils.warning(
      "Сессия истекла. Пожалуйста, войдите в систему заново"
    );
  },

  // Ошибки сети
  networkError: () => {
    return toastUtils.error("Ошибка сети. Проверьте подключение к интернету");
  },

  // Общие ошибки
  generalError: (message = "Произошла ошибка") => {
    return toastUtils.error(message);
  },

  // Загрузка
  loading: (message = "Загрузка...") => {
    return toastUtils.loading(message);
  },
};

export default toastUtils;
