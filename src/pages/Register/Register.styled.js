import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${THEME.colors.background};
`;

export const RegisterCard = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 48px;
  width: 100%;
  max-width: 379px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 32px 24px;
    margin: 16px;
    max-width: calc(100% - 32px);
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    margin: 12px;
    max-width: calc(100% - 24px);
  }
`;

export const RegisterTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  text-align: center;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.lg};
    margin-bottom: 24px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  color: ${THEME.colors.gray[600]};
  margin-bottom: 8px;
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

export const RegisterButton = styled.button`
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

export const LoginLink = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  color: #999999;
  text-align: center;
  margin-top: 24px;

  p {
    margin: 0 0 8px 0;
  }

  a {
    color: #999999;
    text-decoration: underline;
    font-weight: ${THEME.fonts.weights.normal};

    &:hover {
      color: ${THEME.colors.gray[600]};
    }
  }
`;
