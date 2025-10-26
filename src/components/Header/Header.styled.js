import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: ${THEME.colors.white};
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 767px) {
    background-color: #f4f5f6;
    height: ${(props) => (props.$isMobilePages ? "54px" : "64px")};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 767px) {
    display: flex;
    grid-template-columns: unset;
    gap: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 19px;

  @media (max-width: 767px) {
    height: ${(props) => (props.$isMobile ? "14px" : "19px")};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 767px) {
    display: none;
    gap: 32px;
  }
`;

export const MobileActionsContainer = styled.div`
  display: none;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: flex;
    gap: 8px;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${(props) =>
    props.$active ? THEME.fonts.weights.semibold : THEME.fonts.weights.normal};
  color: ${(props) =>
    props.$active ? THEME.colors.primary : THEME.colors.black};
  cursor: pointer;
  padding: 8px 0;
  transition: all 0.2s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${THEME.colors.primary};
    font-weight: ${THEME.fonts.weights.semibold};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${THEME.colors.primary};
    opacity: ${(props) => (props.$active ? "1" : "0")};
    transition: opacity 0.2s ease;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: none;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.medium};
  color: ${THEME.colors.primary};
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.2s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.xs};
    font-weight: ${THEME.fonts.weights.semibold};
    font-style: normal;
    padding: 6px 8px;
    padding-bottom: 4px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 8px;
      right: 8px;
      height: 1px;
      background-color: ${THEME.colors.primary};
    }
  }
`;

export const DropdownArrow = styled.img`
  margin-left: 8px;
  width: 12px;
  height: 8px;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;

  @media (max-width: 767px) {
    width: 10px;
    height: 6px;
    margin-left: 6px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background-color: ${THEME.colors.white};
  border: 1px solid ${THEME.colors.gray[200]};
  border-radius: ${THEME.borderRadius.medium};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  padding: 8px 0;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease;
  z-index: 1000;

  @media (max-width: 767px) {
    min-width: 200px;
    right: 0;
    left: auto;
    border-radius: 24px;
    padding: 16px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
`;

export const DropdownItem = styled.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.normal};
  color: ${(props) =>
    props.$active ? THEME.colors.primary : THEME.colors.black};
  cursor: pointer;
  padding: 12px 20px;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${THEME.colors.gray[100]};
    color: ${THEME.colors.primary};
  }

  &::before {
    content: ${(props) => (props.$active ? '"●"' : '""')};
    margin-right: ${(props) => (props.$active ? "8px" : "0")};
    color: ${THEME.colors.primary};
    font-size: 8px;
  }

  @media (max-width: 767px) {
    padding: 8px;
    font-size: ${THEME.fonts.sizes.sm};
    border-radius: 24px;
    background-color: ${(props) => (props.$active ? "#F1EBFD" : "#F4F5F6")};
    color: ${THEME.colors.black};
    font-weight: ${THEME.fonts.weights.normal};

    &:hover {
      background-color: ${(props) => (props.$active ? "#F1EBFD" : "#F4F5F6")};
      color: ${THEME.colors.black};
    }

    &::before {
      content: "";
      margin-right: 0;
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${THEME.colors.black};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${THEME.colors.primary};
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileLogoutButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${THEME.colors.black};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xs};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  text-align: center;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${THEME.colors.primary};
  }

  @media (max-width: 767px) {
    display: block;
  }
`;
