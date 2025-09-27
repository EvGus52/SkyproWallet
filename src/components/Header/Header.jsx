import { Link, useLocation, useNavigate } from "react-router-dom";
import { confirmUtils } from "../../utils/confirmAlert.jsx";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import { toastUtils } from "../../utils/toast";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoImage,
  Navigation,
  NavItem,
  LogoutButton,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearTransactions } = useTransactions();

  // Определяем, находимся ли мы на страницах авторизации
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    // Очищаем локальные данные
    localStorage.removeItem("token");
    clearTransactions();

    toastUtils.success("Вы успешно вышли из аккаунта");
    navigate("/login");
  };

  const handleLogoutClick = () => {
    try {
      confirmUtils.action(
        "Выход из аккаунта",
        "Вы уверены, что хотите выйти из своего аккаунта Skypro.Wallet?",
        handleLogout,
        {
          confirmText: "Выйти",
          cancelText: "Отмена",
        }
      );
    } catch (error) {
      console.error("Ошибка при показе подтверждения:", error);
      // Fallback - прямой выход без подтверждения
      handleLogout();
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent className="center">
        <Logo>
          <Link to="/">
            <LogoImage src="/images/logo.png" alt="Skypro.Wallet" />
          </Link>
        </Logo>

        {!isAuthPage && (
          <>
            <Navigation>
              <NavItem
                as={Link}
                to="/my-expenses"
                $active={
                  location.pathname === "/" ||
                  location.pathname === "/my-expenses"
                }
              >
                Мои расходы
              </NavItem>
              <NavItem
                as={Link}
                to="/analytics"
                $active={location.pathname === "/analytics"}
              >
                Анализ расходов
              </NavItem>
            </Navigation>

            <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
