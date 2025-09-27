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
  Input,
  LoginButton,
  RegisterLink,
} from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

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
              <Input
                {...register("login", {
                  required: "Логин обязателен",
                  minLength: {
                    value: 3,
                    message: "Логин должен содержать минимум 3 символа",
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

            <LoginButton type="submit" disabled={isSubmitting}>
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
