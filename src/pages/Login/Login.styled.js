import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${THEME.colors.background};
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

export const LoginTitle = styled.h1`
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  padding: 12px 16px;
  border: 1px solid
    ${(props) => (props.$hasError ? "#F25050" : THEME.colors.gray[300])};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${(props) =>
    props.$hasError ? "#FFEBEB" : THEME.colors.white};
  color: ${THEME.colors.gray[700]};
  width: 100%;
  box-sizing: border-box;


  &::placeholder {
    color: black;
    font-weight: normal;
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$hasError ? "#F25050" : THEME.colors.primary};
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.1);
  }
`;

/* слой для текста placeholder с возможностью добавить звездочку */
export const PlaceholderWithStar = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-size: ${THEME.fonts.sizes.base};
  font-family: ${THEME.fonts.family};
  color: ${(props) => (props.$hasError ? "black" : THEME.colors.gray[400])};
  pointer-events: none;
  display: ${(props) => (props.$visible ? "flex" : "none")};
  align-items: center;

  span {
    margin-left: 2px;
    color: red;
    font-weight: bold;
    display: ${(props) => (props.$hasError ? "inline" : "none")};
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: ${THEME.fonts.sizes.xs};
  margin-top: 4px;
  text-align: center;
`;

export const LoginButton = styled.button`
  width: 100%;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.semibold};
  font-size: ${THEME.fonts.sizes.sm};
  text-align: center;
  padding: 12px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${(props) =>
    props.$disabled ? "#ccc" : THEME.colors.primary};
  color: ${(props) => (props.$disabled ? "#666" : THEME.colors.white)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      !props.$disabled ? THEME.colors.primaryHover : "#ccc"};
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
  }

  a {
    color: ${THEME.colors.gray[500]};
    text-decoration: underline;
    font-weight: ${THEME.fonts.weights.normal};

    &:hover {
      color: ${THEME.colors.gray[600]};
    }
  }
`;
