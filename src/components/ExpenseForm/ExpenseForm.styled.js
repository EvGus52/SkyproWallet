import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const FormWrapper = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ErrorStar = styled.span`
  color: red;
  font-weight: bold;
  font-size: 16px;
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
    border-color: ${(props) =>
      props.$hasError ? "#F25050" : THEME.colors.primary};
    background-color: ${(props) => (props.$hasError ? "#FFEBEB" : "#f1ebfd")};
  }

  &::placeholder {
    color: ${THEME.colors.gray[400]};
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
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
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$selected ? "#F1EBFD" : "#f0f0f0")};
    border-color: ${(props) =>
      props.$selected ? THEME.colors.primary : "#ccc"};
  }
`;

export const CategoryIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px;
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.semibold};
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
`;

// import styled from "styled-components";
// import { THEME } from "../../constants/theme";

// export const FormWrapper = styled.div`
//   background-color: ${THEME.colors.white};
//   border-radius: ${THEME.borderRadius.large};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
// `;

// export const FormTitle = styled.h2`
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.bold};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xl};
//   color: ${THEME.colors.gray[700]};
//   margin: 0 0 24px 0;
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   flex: 1;
// `;

// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.base};
//   font-weight: ${THEME.fonts.weights.semibold};
//   color: ${THEME.colors.black};
//   margin-bottom: 12px;
// `;

// export const Input = styled.input`
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.base};
//   padding: 12px;
//   border: 1px solid ${THEME.colors.gray[300]};
//   border-radius: ${THEME.borderRadius.small};
//   background-color: ${THEME.colors.white};
//   color: #1f2937;
//   transition: all 0.2s ease;

//   &:focus,
//   &.valid {
//     outline: none;
//     background-color: #f1ebfd;
//     border: 0.5px solid ${THEME.colors.primary};
//   }

//   &::placeholder {
//     font-family: ${THEME.fonts.family};
//     font-weight: ${THEME.fonts.weights.normal};
//     font-style: normal;
//     font-size: ${THEME.fonts.sizes.xs};
//     color: ${THEME.colors.gray[400]};
//   }
// `;

// export const CategoriesContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 12px;
//   width: 313px;
// `;

// export const CategoryButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 12px 24px;
//   border: 1px solid #e5e7eb;
//   border-radius: ${THEME.borderRadius.large};
//   background-color: ${(props) =>
//     props.$selected ? "#F1EBFD" : THEME.colors.background};
//   color: ${(props) =>
//     props.$selected ? THEME.colors.primary : THEME.colors.black};
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.xs};
//   font-weight: ${THEME.fonts.weights.normal};
//   cursor: pointer;
//   transition: all 0.2s ease;
//   white-space: nowrap;
//   flex-shrink: 0;

//   &:hover {
//     background-color: ${(props) =>
//       props.$selected ? "#F1EBFD" : THEME.colors.gray[200]};
//     border-color: ${(props) =>
//       props.$selected ? THEME.colors.primary : THEME.colors.gray[300]};
//   }

//   &:focus {
//     outline: none;
//     box-shadow: 0 0 0 2px rgba(115, 52, 234, 0.2);
//   }
// `;

// export const CategoryIcon = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: ${(props) =>
//     props.$selected
//       ? "brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(7500%) hue-rotate(266deg) brightness(95%) contrast(101%)"
//       : "none"};
//   transition: filter 0.2s ease;
// `;

// export const PrimaryButton = styled.button`
//   width: 100%;
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.semibold};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xs};
//   padding: 16px;
//   border: none;
//   border-radius: ${THEME.borderRadius.small};
//   background-color: ${THEME.colors.primary};
//   color: ${THEME.colors.white};
//   cursor: pointer;
//   transition: all 0.2s ease;
//   margin-top: 8px;

//   &:hover:not(:disabled) {
//     background-color: ${THEME.colors.primaryHover};
//   }

//   &:focus {
//     outline: none;
//     box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;
