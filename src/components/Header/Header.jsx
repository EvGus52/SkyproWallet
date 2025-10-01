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
  DropdownWrapper,
  DropdownButton,
  DropdownArrow,
  DropdownMenu,
  DropdownItem,
  LogoutButton,
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
    return "Мои расходы";
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
            {/* Dropdown Navigation */}
            <DropdownWrapper ref={dropdownRef}>
              <DropdownButton onClick={toggleDropdown} $isOpen={isDropdownOpen}>
                {getDropdownTitle()}
                <DropdownArrow
                  $isOpen={isDropdownOpen}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </DropdownArrow>
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
                  to="/analytics"
                  $active={location.pathname === "/analytics"}
                  onClick={closeDropdown}
                >
                  Анализ расходов
                </DropdownItem>
              </DropdownMenu>
            </DropdownWrapper>

            <LogoutButton onClick={handleLogoutClick}>Выйти</LogoutButton>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
