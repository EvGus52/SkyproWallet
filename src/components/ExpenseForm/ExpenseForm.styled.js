import styled from "styled-components";
import { THEME } from "../../constants/theme";
import { Card } from "../common/SharedStyles";

export const FormWrapper = styled(Card)`
  padding: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 0;
    border-radius: ${THEME.borderRadius.medium};
    grid-column: span 4;
  }
`;

export const FormTitle = styled.h2`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 24px;

  @media (max-width: 767px) {
    display: none; /* Скрываем заголовок формы в мобильной версии */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.black};
  margin-bottom: 12px;

  ${(props) =>
    props.$hasError &&
    `
    &::after {
      content: " *";
      color: #f25050;
    }
  `}
`;

export const Input = styled.input`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  padding: 12px;
  border: 1px solid
    ${(props) => (props.$hasError ? "#F25050" : THEME.colors.gray[300])};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${(props) =>
    props.$hasError ? "#FFEBEB" : THEME.colors.white};
  transition: all 0.2s ease;

  &:focus {
    outline: none;

    background-color: #f1ebfd;
    border: 1px solid ${THEME.colors.primary};
  }

  &.error {
    background-color: #ffebeb;
    border: 1px solid #f25050;
  }

  &::placeholder {
    color: ${THEME.colors.gray[400]};
  }

  @media (max-width: 767px) {
    padding: 8px;
    font-size: ${THEME.fonts.sizes.sm};
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 8px;
  width: 313px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 6px;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: ${THEME.borderRadius.large};
  background-color: ${(props) =>
    props.$selected ? "#F1EBFD" : THEME.colors.background};
  color: ${(props) =>
    props.$selected ? THEME.colors.primary : THEME.colors.black};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xs};
  font-weight: ${THEME.fonts.weights.normal};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => (props.$selected ? "#F1EBFD" : "#f0f0f0")};
    border-color: ${(props) =>
      props.$selected ? THEME.colors.primary : THEME.colors.gray[300]};
    color: ${THEME.colors.primary};

    img {
      filter: brightness(0) saturate(100%) invert(25%) sepia(95%)
        saturate(7500%) hue-rotate(266deg) brightness(95%) contrast(101%);
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(115, 52, 234, 0.2);
  }

  @media (max-width: 767px) {
    padding: 10px 16px;
    font-size: 11px;
    gap: 6px;
  }
`;

export const CategoryIcon = styled.img`
  width: 16px;
  height: 16px;
  filter: ${(props) =>
    props.$selected
      ? "brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(7500%) hue-rotate(266deg) brightness(95%) contrast(101%)"
      : "none"};
  transition: filter 0.2s ease;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px;
  font-family: ${THEME.fonts.family};
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${(props) =>
    props.disabled ? "#ccc" : THEME.colors.primary};
  color: ${(props) => (props.disabled ? "#666" : THEME.colors.white)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
  }

  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
    opacity: 1;
  }
`;
