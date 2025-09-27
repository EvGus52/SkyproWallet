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

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${(props) =>
    props.$active ? THEME.fonts.weights.semibold : THEME.fonts.weights.normal};
  color: ${(props) =>
    props.$active ? THEME.colors.primary : THEME.colors.black};
  cursor: pointer;
  padding: 8px 0;
  border-bottom: ${(props) =>
    props.$active
      ? `2px solid ${THEME.colors.primary}`
      : "2px solid transparent"};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${THEME.colors.primary};
    font-weight: ${THEME.fonts.weights.semibold};
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
`;
