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
  ErrorStar,
  MeasureSpan,
  ErrorMessage,
  RegisterButton,
  LoginLink,
} from "./Register.styled";

const Register = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  // режим onChange — чтобы ошибки появлялись в реальном времени
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    mode: "onChange",
  });

  // значения полей
  const nameValue = watch("name");
  const emailValue = watch("email");
  const passwordValue = watch("password");

  // refs: input DOM + measure span
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const nameMeasureRef = useRef(null);
  const emailMeasureRef = useRef(null);
  const passwordMeasureRef = useRef(null);

  // позиции для звёздочек
  const [nameStarLeft, setNameStarLeft] = useState(12);
  const [emailStarLeft, setEmailStarLeft] = useState(12);
  const [passwordStarLeft, setPasswordStarLeft] = useState(12);

  // helper: обновляем позицию звезды для указанного поля
  const updateStar = (inputRef, measureRef, setLeft) => {
    if (!inputRef?.current || !measureRef?.current) return;
    const inputEl = inputRef.current;
    const measureEl = measureRef.current;

    // текст для измерения: если есть введённый текст — измеряем его,
    // если пусто — измерим placeholder (чтобы звезда стояла в начале).
    const textToMeasure = inputEl.value || inputEl.placeholder || "";
    // используем white-space: pre в measureSpan, поэтому заменяем пробелы
    measureEl.textContent = textToMeasure;

    const textWidth = measureEl.getBoundingClientRect().width; // ширина текста
    const inputRect = inputEl.getBoundingClientRect();
    const inputPaddingLeft =
      parseFloat(getComputedStyle(inputEl).paddingLeft) || 12;
    const starOffset = 6; // расстояние между текстом и звездой

    // вычисляем left: базовая позиция = paddingLeft + текстовая ширина + offset
    let left = inputPaddingLeft + textWidth + starOffset;

    // не позволяем звезде вылезти за правый край input'а
    const maxLeft = inputRect.width - 12; // 12px запас справа
    if (left > maxLeft) left = maxLeft;

    // если поле пустое — ставим звезду внутрь слева (начало)
    if (!inputEl.value) left = inputPaddingLeft;

    setLeft(Math.round(left));
  };

  // обновляем позиции при изменении значений или при ресайзе
  useEffect(() => {
    updateStar(nameInputRef, nameMeasureRef, setNameStarLeft);
  }, [nameValue, errors.name]);

  useEffect(() => {
    updateStar(emailInputRef, emailMeasureRef, setEmailStarLeft);
  }, [emailValue, errors.email]);

  useEffect(() => {
    updateStar(passwordInputRef, passwordMeasureRef, setPasswordStarLeft);
  }, [passwordValue, errors.password]);

  // обновлять при изменении размеров окна (чтобы звезда не "вылетала")
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
      const result = await signUp(data);
      setToken(result.user.token);
      setUserData(result.user);
      navigate("/");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
      setServerError(err?.message || "Ошибка сервера");
    }
  };

  // если ошибка в любом поле — звезда показывается; кнопка станет неактивной, если есть ошибки
  const hasClientError = !!errors.name || !!errors.email || !!errors.password;
  const isDisabled = hasClientError || isSubmitting;

  // Для корректной работы register + локального ref комбинируем ref'ы:
  const makeRegisterProps = (name, rules) => {
    const reg = register(name, rules);
    // reg contains { onChange, onBlur, name, ref } — распакуем ref и остальные
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
              <InputWrapper>
                <Input
                  {...nameReg.rest}
                  ref={(e) => {
                    nameReg.ref(e);
                    nameInputRef.current = e;
                  }}
                  placeholder={errors.name && !nameValue ? "" : "Имя"}
                  $hasError={!!errors.name}
                />
                {/* measure span — скрыт, но нужен для вычисления ширины */}
                <MeasureSpan ref={nameMeasureRef} aria-hidden />
                {/* показываем звёздочку когда есть ошибка */}
                {errors.name && <ErrorStar $left={nameStarLeft}>*</ErrorStar>}
              </InputWrapper>
            </FormGroup>

            {/* EMAIL */}
            <FormGroup>
              <InputWrapper>
                <Input
                  {...emailReg.rest}
                  ref={(e) => {
                    emailReg.ref(e);
                    emailInputRef.current = e;
                  }}
                  placeholder={errors.email && !emailValue ? "" : "Email"}
                  $hasError={!!errors.email}
                />
                <MeasureSpan ref={emailMeasureRef} aria-hidden />
                {errors.email && <ErrorStar $left={emailStarLeft}>*</ErrorStar>}
              </InputWrapper>
            </FormGroup>

            {/* PASSWORD */}
            <FormGroup>
              <InputWrapper>
                <Input
                  {...passwordReg.rest}
                  ref={(e) => {
                    passwordReg.ref(e);
                    passwordInputRef.current = e;
                  }}
                  type="password"
                  placeholder={
                    errors.password && !passwordValue ? "" : "Пароль"
                  }
                  $hasError={!!errors.password}
                />
                <MeasureSpan ref={passwordMeasureRef} aria-hidden />
                {errors.password && (
                  <ErrorStar $left={passwordStarLeft}>*</ErrorStar>
                )}
              </InputWrapper>
            </FormGroup>

            {/* единое сообщение об ошибке (если нужно) */}
            {hasClientError && (
              <ErrorMessage>
                Упс! Введенные Вами данные некорректны. Введите данные корректно
                и повторите попытку.
              </ErrorMessage>
            )}

            <RegisterButton
              type="submit"
              disabled={isDisabled}
              $disabled={isDisabled}
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
