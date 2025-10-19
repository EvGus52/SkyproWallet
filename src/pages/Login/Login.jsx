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
  PlaceholderWithStar,
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
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      login: "",
      password: ""
    }
  });

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

        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {/* Логин */}
          <FormGroup>
            <InputWrapper>
              <Input
                {...register("login", { required: true, minLength: 3 })}
                $hasError={!!errors.login || submitError}
              />
              <PlaceholderWithStar
                $hasError={!!errors.login || submitError}
                $visible={!loginValue}
              >
                Логин<span>*</span>
              </PlaceholderWithStar>
            </InputWrapper>
          </FormGroup>

          {/* Пароль */}
          <FormGroup>
            <InputWrapper>
              <Input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                $hasError={!!errors.password || submitError}
              />
              <PlaceholderWithStar
                $hasError={!!errors.password || submitError}
                $visible={!passwordValue}
              >
                Пароль<span>*</span>
              </PlaceholderWithStar>
            </InputWrapper>
          </FormGroup>

          {/* Сообщение об ошибке один раз под всеми полями */}
          {hasError && (
            <ErrorMessage>
              Упс! Введенные Вами данные некорректны. Введите данные корректно
              и повторите попытку.
            </ErrorMessage>
          )}

          <LoginButton type="submit" $disabled={isDisabled} disabled={isDisabled}>
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
