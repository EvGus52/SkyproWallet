import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RegisterContainer,
  RegisterCard,
  RegisterTitle,
  RegisterForm,
  FormGroup,
  Label,
  Input,
  RegisterButton,
  LoginLink,
} from "./Register.styled";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    console.log("Регистрация:", formData);
    // Здесь будет логика регистрации
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterTitle>Регистрация в Skypro.Wallet</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              required
            />
          </FormGroup>

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

          <FormGroup>
            <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Повторите пароль"
              required
            />
          </FormGroup>

          <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
        </RegisterForm>

        <LoginLink>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </LoginLink>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
