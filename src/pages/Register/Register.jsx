import { useState, useRef, useEffect } from "react";
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
  const [serverError, setServerError] = useState("");

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

  useEffect(() => {
    updateStar(emailInputRef, emailMeasureRef, setEmailStarLeft);
  }, [emailValue, errors.email]);

  useEffect(() => {
    updateStar(passwordInputRef, passwordMeasureRef, setPasswordStarLeft);
  }, [passwordValue, errors.password]);

  useEffect(() => {
    const handleResize = () => {
      updateStar(nameInputRef, nameMeasureRef, setNameStarLeft);
      updateStar(emailInputRef, emailMeasureRef, setEmailStarLeft);
      updateStar(passwordInputRef, passwordMeasureRef, setPasswordStarLeft);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = async (data) => {
    setServerError("");
    try {
      // Маппим email → login для API
      const payload = {
        name: data.name,
        login: data.email,
        password: data.password,
      };

      const result = await signUp(payload);
      setToken(result.user.token);
      setUserData(result.user);
      navigate("/");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
      setServerError(err?.message || "Ошибка сервера");
    }
  };

  const hasClientError = !!errors.name || !!errors.email || !!errors.password;
  const isDisabled = hasClientError || isSubmitting;

  const makeRegisterProps = (name, rules) => {
    const reg = register(name, rules);
    const { ref, ...rest } = reg;
    return { rest, ref };
  };

  const nameReg = makeRegisterProps("name", {
    required: "Имя обязательно",
    minLength: { value: 2, message: "Имя должно содержать минимум 2 символа" },
    pattern: { value: /^[^\d]+$/, message: "Имя не должно содержать цифры" },
  });

  const emailReg = makeRegisterProps("email", {
    required: "Email обязателен",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Неверный формат email",
    },
  });

  const passwordReg = makeRegisterProps("password", {
    required: "Пароль обязателен",
    minLength: {
      value: 6,
      message: "Пароль должен содержать минимум 6 символов",
    },
  });

  return (
    <>
      <GlobalStyles />
      <RegisterContainer>
        <Header />

        <RegisterCard>
          <RegisterTitle>Регистрация</RegisterTitle>

          {serverError && (
            <div
              style={{ color: "red", marginBottom: 12, textAlign: "center" }}
            >
              {serverError}
            </div>
          )}   

          <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            {/* NAME */}
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

            {/* EMAIL (отправляется как login) */}
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

            {/* PASSWORD */}
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

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import Header from "../../components/Header/Header";
// import GlobalStyles from "../../GlobalStyles";
// import { signUp } from "../../services/Auth";
// import { setToken, setUserData } from "../../utils/tokenUtils";
// import {
//   RegisterContainer,
//   RegisterCard,
//   RegisterTitle,
//   RegisterForm,
//   FormGroup,
//   Input,
//   RegisterButton,
//   LoginLink,
// } from "./Register.styled";

// const Register = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       login: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     setError("");

//     try {
//       const result = await signUp(data);

//       // Сохраняем токен и данные пользователя
//       setToken(result.user.token);
//       setUserData(result.user);

//       // Перенаправляем на главную страницу
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//       console.error("Ошибка регистрации:", err);
//     }
//   };

//   return (
//     <>
//       <GlobalStyles />
//       <RegisterContainer>
//         <Header />

//         <RegisterCard>
//           <RegisterTitle>Регистрация</RegisterTitle>
//           {error && (
//             <div
//               style={{
//                 color: "red",
//                 marginBottom: "16px",
//                 textAlign: "center",
//                 fontSize: "14px",
//               }}
//             >
//               {error}
//             </div>
//           )}
//           <RegisterForm onSubmit={handleSubmit(onSubmit)}>
//             <FormGroup>
//               <Input
//                 {...register("name", {
//                   required: "Имя обязательно",
//                   minLength: {
//                     value: 2,
//                     message: "Имя должно содержать минимум 2 символа",
//                   },
//                 })}
//                 type="text"
//                 placeholder="Имя"
//               />
//               {errors.name && (
//                 <span style={{ color: "red", fontSize: "12px" }}>
//                   {errors.name.message}
//                 </span>
//               )}
//             </FormGroup>

//             <FormGroup>
//               <Input
//                 {...register("login", {
//                   required: "Логин обязателен",
//                   minLength: {
//                     value: 3,
//                     message: "Логин должен содержать минимум 3 символа",
//                   },
//                   pattern: {
//                     value: /^[a-zA-Z0-9_]+$/,
//                     message:
//                       "Логин может содержать только буквы, цифры и подчеркивания",
//                   },
//                 })}
//                 type="text"
//                 placeholder="Логин"
//               />
//               {errors.login && (
//                 <span style={{ color: "red", fontSize: "12px" }}>
//                   {errors.login.message}
//                 </span>
//               )}
//             </FormGroup>

//             <FormGroup>
//               <Input
//                 {...register("password", {
//                   required: "Пароль обязателен",
//                   minLength: {
//                     value: 6,
//                     message: "Пароль должен содержать минимум 6 символов",
//                   },
//                 })}
//                 type="password"
//                 placeholder="Пароль"
//               />
//               {errors.password && (
//                 <span style={{ color: "red", fontSize: "12px" }}>
//                   {errors.password.message}
//                 </span>
//               )}
//             </FormGroup>

//             <RegisterButton type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
//             </RegisterButton>
//           </RegisterForm>

//           <LoginLink>
//             <p>Уже есть аккаунт?</p>
//             <Link to="/login">Войдите здесь</Link>
//           </LoginLink>
//         </RegisterCard>
//       </RegisterContainer>
//     </>
//   );
// };

// export default Register;
