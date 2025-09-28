import styled from "styled-components";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f5f6;
`;

export const RegisterCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 48px;
  width: 100%;
  max-width: 400px;
`;

export const RegisterTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  margin-bottom: 32px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  color: #1f2937;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #7334ea;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #7334ea;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 8px;

  &:hover {
    background-color: #5b21b6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }
`;

export const LoginLink = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 24px;

  a {
    color: #7334ea;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
