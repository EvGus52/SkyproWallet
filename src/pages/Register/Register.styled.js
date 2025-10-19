import styled from "styled-components";
import {
  AuthContainer,
  AuthCard,
  AuthTitle,
  AuthForm,
  FormGroup,
  InputWrapper,
  Input,
  SubmitButton,
  ErrorMessage,
  AuthLink,
} from "../../components/common/AuthFormStyles";

// Экспортируем общие компоненты с локальными именами
export const RegisterContainer = AuthContainer;
export const RegisterTitle = AuthTitle;
export const RegisterForm = styled(AuthForm)`
  gap: 12px;
`;
export { FormGroup, InputWrapper, Input, ErrorMessage };

// Card с увеличенной шириной для регистрации
export const RegisterCard = styled(AuthCard)`
  max-width: 520px;
  margin: 24px auto;
`;

export const RegisterButton = SubmitButton;
export const LoginLink = styled(AuthLink)`
  margin-top: 16px;
`;
