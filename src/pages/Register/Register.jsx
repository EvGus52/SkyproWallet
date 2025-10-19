import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import GlobalStyles from "../../GlobalStyles";
import { signUp } from "../../services/Auth";
import { setToken, setUserData } from "../../utils/tokenUtils";
import {
  RegisterContainer,
  RegisterCard,
  RegisterTitle,
  RegisterForm,
  FormGroup,
  InputWrapper,
  Input,
  ErrorMessage,
  RegisterButton,
  LoginLink,
} from "./Register.styled";

const Register = () => {
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
      name: "",
      login: "",
      password: "",
    },
  });

  const nameValue = watch("name");
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
      const result = await signUp(data);

      // Сохраняем токен и данные пользователя
      setToken(result.user.token);
      setUserData(result.user);

      // Перенаправляем на главную страницу
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Ошибка регистрации:", err);
    }
  };

  return (
    <>
      <GlobalStyles />
      <RegisterContainer>
        <Header />

        <RegisterCard>
          <RegisterTitle>Регистрация</RegisterTitle>
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
          <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <InputWrapper $hasError={hasFieldError("name")}>
                <Input
                  {...register("name", {
                    required: "Имя обязательно",
                    minLength: {
                      value: 3,
                      message: "Имя должно содержать минимум 3 символа",
                    },
                  })}
                  type="text"
                  placeholder="Имя"
                  className={getFieldClass("name", nameValue)}
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper $hasError={hasFieldError("login")}>
                <Input
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

            <RegisterButton
              type="submit"
              disabled={isSubmitting || hasValidationErrors}
            >
              {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
            </RegisterButton>
          </RegisterForm>

          <LoginLink>
            <p>Уже есть аккаунт?</p>
            <Link to="/login">Войдите здесь</Link>
          </LoginLink>
        </RegisterCard>
      </RegisterContainer>
    </>
  );
};

export default Register;
