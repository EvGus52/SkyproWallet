import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginCard,
  LoginTitle,
  LoginForm,
  FormGroup,
  Label,
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
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Вход в Skypro.Wallet</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите пароль"
              required
            />
          </FormGroup>

          <LoginButton type="submit">Войти</LoginButton>
        </LoginForm>

        <RegisterLink>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </RegisterLink>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
