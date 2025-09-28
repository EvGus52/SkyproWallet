import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
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
  font-size: 16px;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  color: ${(props) => (props.$active ? "#7334ea" : "#000000")};
  cursor: pointer;
  padding: 8px 0;
  border-bottom: ${(props) =>
    props.$active ? "2px solid #7334ea" : "2px solid transparent"};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #7334ea;
    font-weight: 600;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #374151;
  }
`;
