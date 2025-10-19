import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${THEME.colors.background};

  @media (max-width: 767px) {
    background-color: #ffffff;
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

  @media (max-width: 767px) {
    padding: 24px 16px;
    margin: auto 12px;
    max-width: calc(100% - 24px);
    box-shadow: none;
  }
`;

export const LoginTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  text-align: center;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 32px;

  @media (max-width: 767px) {
    font-family: ${THEME.fonts.family};
    font-weight: ${THEME.fonts.weights.bold};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xl};
    margin-bottom: 24px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 767px) {
    gap: 12px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &::after {
    content: ${(props) => (props.$hasError ? '"*"' : '""')};
    position: absolute;
    right: 12px;
    color: #f25050;
    font-size: 18px;
    font-weight: 600;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  padding: 12px 16px;
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.white};
  color: ${THEME.colors.gray[700]};
  transition: all 0.2s ease;

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

  &.valid {
    background-color: #f1ebfd;
    border: 1px solid ${THEME.colors.primary};
  }

  &.error {
    background-color: #ffebeb;
    border: 1px solid #f25050;
  }

  @media (max-width: 767px) {
    font-weight: ${THEME.fonts.weights.normal};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xs};

    &::placeholder {
      font-weight: ${THEME.fonts.weights.normal};
      font-style: normal;
      font-size: ${THEME.fonts.sizes.xs};
    }
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

  &:hover:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }

  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const ErrorMessage = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  color: #f25050;
  text-align: center;
  margin-top: 12px;
`;

export const RegisterLink = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xs};
  font-weight: ${THEME.fonts.weights.normal};
  font-style: normal;
  color: #999999;
  text-align: center;
  margin-top: 24px;

  p {
    margin: 0 0 8px 0;
  }

  a {
    color: ${THEME.colors.gray[500]};
    text-decoration: underline;
    font-weight: ${THEME.fonts.weights.normal};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xs};

    &:hover {
      color: ${THEME.colors.gray[600]};
    }
  }
`;
