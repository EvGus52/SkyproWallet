import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: ${THEME.colors.white};
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 19px;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.sm};
    padding: 6px 8px;
  }
`;

export const DropdownArrow = styled.svg`
  margin-left: 8px;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
  color: ${THEME.colors.primary};

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    min-width: 160px;
    right: 0;
    left: auto;
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

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: ${THEME.fonts.sizes.xs};
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
    color: ${THEME.colors.gray[600]};
  }

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.xs};
    padding: 6px 12px;
  }
`;
