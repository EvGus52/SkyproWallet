import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/Auth";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import {
  LogoutContainer,
  LogoutCard,
  LogoutIcon,
  LogoutTitle,
  LogoutMessage,
  ButtonGroup,
  ConfirmButton,
  CancelButton,
} from "./Logout.styled";

const Logout = () => {
  const navigate = useNavigate();
  const { clearTransactions } = useTransactions();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        // Вызываем API для выхода из системы
        await signOut(token);
      }

      // Очищаем локальные данные
      localStorage.removeItem("token");
      clearTransactions();

      navigate("/login");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
      // Даже если API вызов не удался, очищаем локальные данные
      localStorage.removeItem("token");
      clearTransactions();
      navigate("/login");
    }
  };

  const handleCancel = () => {
    navigate("/my-expenses");
  };

  return (
    <LogoutContainer>
      <LogoutCard>
        <LogoutIcon>👋</LogoutIcon>
        <LogoutTitle>Выход из аккаунта</LogoutTitle>
        <LogoutMessage>
          Вы уверены, что хотите выйти из своего аккаунта Skypro.Wallet?
          <br />
          Все несохраненные данные будут потеряны.
        </LogoutMessage>

        <ButtonGroup>
          <CancelButton onClick={handleCancel}>Отмена</CancelButton>
          <ConfirmButton onClick={handleLogout}>Выйти</ConfirmButton>
        </ButtonGroup>
      </LogoutCard>
    </LogoutContainer>
  );
};

export default Logout;
