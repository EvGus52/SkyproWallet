import { useState, useCallback } from "react"; //useContext,
import AuthContext from "./AuthContext";
import { signIn, signUp, signOut } from "../services/Auth";
import {
  setToken,
  getToken,
  setUserData,
  getUserData,
  clearAuthData,
  isAuthenticated,
} from "../utils/tokenUtils";
import { appToasts } from "../utils/toast";

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserData() || null);
  const [token, setAuthToken] = useState(getToken() || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Проверка авторизации
  const checkAuth = () => {
    if (!isAuthenticated()) {
      setError("Необходимо войти в систему");
      return false;
    }
    return true;
  };

  // Вход
  const handleSignIn = useCallback(async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn(credentials);
      const { user } = result;

      setToken(user.token);
      setUserData(user);
      setAuthToken(user.token);
      setUser(user);

      appToasts.success("Вы успешно вошли в систему");
      return true;
    } catch (err) {
      appToasts.generalError(err.message);
      setError(err.message || "Ошибка входа");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Регистрация
  const handleSignUp = useCallback(async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signUp(userData);
      const { user } = result;

      setToken(user.token);
      setUserData(user);
      setAuthToken(user.token);
      setUser(user);

      appToasts.success("Регистрация прошла успешно");
      return true;
    } catch (err) {
      appToasts.generalError(err.message);
      setError(err.message || "Ошибка регистрации");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Выход
  const handleSignOut = useCallback(async () => {
    if (!checkAuth()) return;

    try {
      await signOut(token);
      appToasts.success("Вы вышли из аккаунта");
    } catch (err) {
      console.error("Ошибка выхода:", err);
      appToasts.generalError("Не удалось выйти");
    } finally {
      clearAuthData();
      setUser(null);
      setAuthToken(null);
    }
  }, [token]);

  // Очистить ошибки
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    user,
    token,
    loading,
    error,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    clearError,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
