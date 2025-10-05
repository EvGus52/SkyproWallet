import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${THEME.colors.background};

  @media (max-width: 768px) {
    background-color: ${THEME.colors.white};
  }
`;

export const LoginCard = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 48px;
  width: 100%;
  max-width: 379px;
  margin: auto;

  @media (max-width: 768px) {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 24px 20px;
    margin: 0;
    max-width: 100%;
  }
`;

export const LoginTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  text-align: center;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 40px;
    margin-top: 60px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  padding: 12px 16px;
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.white};
  color: ${THEME.colors.gray[700]};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  &::placeholder {
    font-family: ${THEME.fonts.family};
    font-weight: ${THEME.fonts.weights.normal};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xs};
    color: ${THEME.colors.gray[400]};
  }

  &:not(:placeholder-shown) {
    color: ${THEME.colors.gray[700]};
    font-weight: ${THEME.fonts.weights.medium};
  }

  &:focus {
    outline: none;
    border-color: ${THEME.colors.primary};
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.1);
    color: ${THEME.colors.gray[700]};
  }

  &:focus::placeholder {
    color: ${THEME.colors.gray[400]};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  text-align: center;
  padding: 12px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 8px;

  &:hover {
    background-color: ${THEME.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }
`;

export const RegisterLink = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  color: #999999;
  text-align: center;
  margin-top: 24px;

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #999999;
  }

  a {
    color: #999999;
    text-decoration: underline;
    font-weight: ${THEME.fonts.weights.normal};
    font-size: 14px;

    &:hover {
      color: #666666;
    }
  }
`;
