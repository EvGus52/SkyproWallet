import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import GlobalStyles from "../../GlobalStyles";
import { signIn } from "../../services/Auth";
import { setToken, setUserData } from "../../utils/tokenUtils";
import {
  LoginContainer,
  LoginCard,
  LoginTitle,
  LoginForm,
  FormGroup,
  InputWrapper,
  Input,
  ErrorMessage,
  LoginButton,
  RegisterLink,
} from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const loginValue = watch("login");
  const passwordValue = watch("password");

  // Функция для проверки валидности поля
  const isFieldValid = (fieldName, value) => {
    return value && !errors[fieldName];
  };

  // Функция для проверки наличия ошибки
  const hasFieldError = (fieldName) => {
    return !!errors[fieldName];
  };

  // Функция для получения класса поля
  const getFieldClass = (fieldName, value) => {
    if (hasFieldError(fieldName)) return "error";
    if (isFieldValid(fieldName, value)) return "valid";
    return "";
  };

  // Проверка, есть ли ошибки валидации
  const hasValidationErrors = Object.keys(errors).length > 0;

  const onSubmit = async (data) => {
    setError("");

    try {
      const result = await signIn(data);

      // Сохраняем токен и данные пользователя
      setToken(result.user.token);
      setUserData(result.user);

      // Перенаправляем на главную страницу
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <Header />

        <LoginCard>
          <LoginTitle>Вход</LoginTitle>
          {error && (
            <div
              style={{
                color: "red",
                marginBottom: "16px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <InputWrapper $hasError={hasFieldError("login")}>
                <Input
                  id="login"
                  {...register("login", {
                    required: "Эл. почта обязательна",
                    minLength: {
                      value: 3,
                      message: "Эл. почта должна содержать минимум 3 символа",
                    },
                  })}
                  type="email"
                  placeholder="Эл. почта"
                  className={getFieldClass("login", loginValue)}
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper $hasError={hasFieldError("password")}>
                <Input
                  id="password"
                  {...register("password", {
                    required: "Пароль обязателен",
                    minLength: {
                      value: 6,
                      message: "Пароль должен содержать минимум 6 символов",
                    },
                  })}
                  type="password"
                  placeholder="Пароль"
                  className={getFieldClass("password", passwordValue)}
                />
              </InputWrapper>
              {hasValidationErrors && (
                <ErrorMessage>
                  Упс! Введенные вами данные некорректны. Введите данные
                  корректно и повторите попытку.
                </ErrorMessage>
              )}
            </FormGroup>

            <LoginButton
              type="submit"
              disabled={isSubmitting || hasValidationErrors}
            >
              {isSubmitting ? "Вход..." : "Войти"}
            </LoginButton>
          </LoginForm>

          <RegisterLink>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </RegisterLink>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default Login;
