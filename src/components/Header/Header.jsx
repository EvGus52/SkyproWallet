import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { confirmUtils } from "../../utils/confirmAlert.jsx";
import { useTransactions } from "../../contexts/TransactionsContextProvider";
import { toastUtils } from "../../utils/toast";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoImage,
  Nav,
  NavLink,
  MobileActionsContainer,
  DropdownWrapper,
  DropdownButton,
  DropdownArrow,
  DropdownMenu,
  DropdownItem,
  LogoutButton,
  MobileLogoutButton,
} from "./Header.styled";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { clearTransactions } = useTransactions();

  // Определяем, находимся ли мы на страницах авторизации
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  // Определяем, нужно ли использовать мобильную высоту лого
  const isMobileLogoPage =
    location.pathname === "/" ||
    location.pathname === "/my-expenses" ||
    location.pathname === "/analytics" ||
    location.pathname === "/add-expense";

  const handleLogout = () => {
    // Очищаем локальные данные
    localStorage.removeItem("token");
    clearTransactions();

    toastUtils.success("Вы успешно вышли из аккаунта");
    navigate("/login");
  };

  const handleLogoutClick = () => {
    setIsDropdownOpen(false); // Закрываем меню перед выходом
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Закрываем dropdown при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Определяем текущий заголовок для dropdown
  const getDropdownTitle = () => {
    if (location.pathname === "/analytics") {
      return "Анализ расходов";
    }
    if (location.pathname === "/add-expense") {
      return "Новый расход";
    }
    return "Мои расходы";
  };

  return (
    <HeaderContainer $isMobilePages={isMobileLogoPage}>
      <HeaderContent className="center">
        <Logo>
          <button
            onClick={() => window.location.reload()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <LogoImage
              src="/images/logo.svg"
              alt="Skypro.Wallet"
              $isMobile={isMobileLogoPage}
            />
          </button>

        </Logo>

        {!isAuthPage && (
          <>
            {/* Desktop Navigation */}
            <Nav>
              <NavLink
                as={Link}
                to="/my-expenses"
                $active={
                  location.pathname === "/" ||
                  location.pathname === "/my-expenses"
                }
              >
                Мои расходы
              </NavLink>
              <NavLink
                as={Link}
                to="/analytics"
                $active={location.pathname === "/analytics"}
              >
                Анализ расходов
              </NavLink>
            </Nav>

            {/* Desktop Logout Button */}
            <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>

            {/* Mobile Actions Container */}
            <MobileActionsContainer>
              <DropdownWrapper ref={dropdownRef}>
                <DropdownButton
                  onClick={toggleDropdown}
                  $isOpen={isDropdownOpen}
                >
                  {getDropdownTitle()}
                  <DropdownArrow
                    src="/images/icons/header_arrow.svg"
                    alt="arrow"
                    $isOpen={isDropdownOpen}
                  />
                </DropdownButton>

                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem
                    as={Link}
                    to="/my-expenses"
                    $active={
                      location.pathname === "/" ||
                      location.pathname === "/my-expenses"
                    }
                    onClick={closeDropdown}
                  >
                    Мои расходы
                  </DropdownItem>
                  <DropdownItem
                    as={Link}
                    to="/add-expense"
                    $active={location.pathname === "/add-expense"}
                    onClick={closeDropdown}
                  >
                    Новый расход
                  </DropdownItem>
                  <DropdownItem
                    as={Link}
                    to="/analytics"
                    $active={location.pathname === "/analytics"}
                    onClick={closeDropdown}
                  >
                    Анализ расходов
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>

              <MobileLogoutButton onClick={handleLogoutClick}>
                Выйти
              </MobileLogoutButton>
            </MobileActionsContainer>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
