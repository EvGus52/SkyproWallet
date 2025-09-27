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
  Input,
  RegisterButton,
  LoginLink,
} from "./Register.styled";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      login: "",
      password: "",
    },
  });

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
              <Input
                {...register("name", {
                  required: "Имя обязательно",
                  minLength: {
                    value: 2,
                    message: "Имя должно содержать минимум 2 символа",
                  },
                })}
                type="text"
                placeholder="Имя"
              />
              {errors.name && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.name.message}
                </span>
              )}
            </FormGroup>

            <FormGroup>
              <Input
                {...register("login", {
                  required: "Логин обязателен",
                  minLength: {
                    value: 3,
                    message: "Логин должен содержать минимум 3 символа",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message:
                      "Логин может содержать только буквы, цифры и подчеркивания",
                  },
                })}
                type="text"
                placeholder="Логин"
              />
              {errors.login && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.login.message}
                </span>
              )}
            </FormGroup>

            <FormGroup>
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
              />
              {errors.password && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.password.message}
                </span>
              )}
            </FormGroup>

            <RegisterButton type="submit" disabled={isSubmitting}>
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
