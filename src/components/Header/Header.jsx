import { Link, useLocation } from "react-router-dom";
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

  // Определяем, находимся ли мы на страницах авторизации
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

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

            <LogoutButton as={Link} to="/logout">
              Выйти
            </LogoutButton>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
