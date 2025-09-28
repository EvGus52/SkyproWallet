import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px;
`;

export const FormTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 24px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  padding: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  color: #1f2937;
  transition: all 0.2s ease;

  &:focus,
  &.valid {
    outline: none;
    background-color: #f1ebfd;
    border: 0.5px solid #7334ea;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 12px;
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: ${(props) => (props.$selected ? "#7334EA" : "#ffffff")};
  color: ${(props) => (props.$selected ? "#ffffff" : "#374151")};
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$selected ? "#7334EA" : "#f9fafb")};
    border-color: ${(props) => (props.$selected ? "#7334EA" : "#d1d5db")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(115, 52, 234, 0.2);
  }
`;

export const CategoryIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: #7334ea;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background-color: #5b21b6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
