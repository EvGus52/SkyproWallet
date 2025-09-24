import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStyles from "../../GlobalStyles";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Вход в систему:", formData);
    // Здесь будет логика аутентификации
  };

  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <Header />

        <LoginCard>
          <LoginTitle>Вход</LoginTitle>
          <LoginForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Эл. почта"
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
              />
            </FormGroup>

            <LoginButton type="submit">Войти</LoginButton>
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
