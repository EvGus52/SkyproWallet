import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  RegisterLink
} from "./Login.styled";
import { signIn } from "../../services/Auth";

const Login = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },

  } = useForm({
    mode: "onChange",
    defaultValues: {
      login: "",
      password: ""
    }
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
    setSubmitError(false);
    try {
      const result = await signIn(data);
      localStorage.setItem("token", result.user.token);
      navigate("/");
    } catch (err) {
      console.error("Ошибка входа:", err);
      setSubmitError(true);
    }
  };

  // следим за значениями
  const loginValue = watch("login");
  const passwordValue = watch("password");

  // если была ошибка сервера — сбрасываем её при изменении любого поля
  useEffect(() => {
    if (submitError) {
      setSubmitError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginValue, passwordValue]);

  // hasError — для отображения общего сообщения об ошибке (валидация или сервер)
  const hasError = Object.keys(errors).length > 0 || submitError;

  // isDisabled не должен включать submitError — иначе кнопка останется выключенной
  // когда пользователь исправляет данные после серверной ошибки.
  const isDisabled = Object.keys(errors).length > 0 || isSubmitting;

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Вход</LoginTitle>
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
  );
};

export default Login;
