import { useNavigate } from "react-router-dom";
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

  const handleLogout = () => {
    console.log("Выход из аккаунта");
    // Здесь будет логика выхода из аккаунта
    // Очистка токена, редирект на логин и т.д.
    navigate("/login");
  };

  const handleCancel = () => {
    console.log("Отмена выхода");
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
