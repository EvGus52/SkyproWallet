import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const FormWrapper = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: ${THEME.borderRadius.medium};
  }
`;

export const FormTitle = styled.h2`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xl};
  color: ${THEME.colors.gray[700]};
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: ${THEME.fonts.sizes.lg};
    margin: 0 0 16px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
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
`;

export const Input = styled.input`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  padding: 12px;
  border: 1px solid ${THEME.colors.gray[300]};
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.white};
  color: #1f2937;
  transition: all 0.2s ease;

  &:focus,
  &.valid {
    outline: none;
    background-color: #f1ebfd;
    border: 0.5px solid ${THEME.colors.primary};
  }

  &::placeholder {
    font-family: ${THEME.fonts.family};
    font-weight: ${THEME.fonts.weights.normal};
    font-style: normal;
    font-size: ${THEME.fonts.sizes.xs};
    color: ${THEME.colors.gray[400]};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: ${THEME.fonts.sizes.sm};
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  width: 313px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 6px;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
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
    background-color: ${(props) =>
      props.$selected ? "#F1EBFD" : THEME.colors.gray[200]};
    border-color: ${(props) =>
      props.$selected ? THEME.colors.primary : THEME.colors.gray[300]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(115, 52, 234, 0.2);
  }

  @media (max-width: 768px) {
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
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.semibold};
  font-style: normal;
  font-size: ${THEME.fonts.sizes.xs};
  padding: 16px;
  border: none;
  border-radius: ${THEME.borderRadius.small};
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background-color: ${THEME.colors.primaryHover};
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
