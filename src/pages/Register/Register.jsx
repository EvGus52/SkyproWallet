import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStyles from "../../GlobalStyles";
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
  const [formData, setFormData] = useState({
    name: "",
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
    console.log("Регистрация:", formData);
    // Здесь будет логика регистрации
  };

  return (
    <>
      <GlobalStyles />
      <RegisterContainer>
        <Header />

        <RegisterCard>
          <RegisterTitle>Регистрация</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                required
              />
            </FormGroup>

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

            <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
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
