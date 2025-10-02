import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${THEME.colors.background};
`;

export const RegisterCard = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.large};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 48px;
  width: 100%;
  max-width: 520px;
  margin: 24px auto;
`;

export const RegisterTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.bold};
  font-size: ${THEME.fonts.sizes.xl};
  text-align: center;
  color: ${THEME.colors.gray[700]};
  margin-bottom: 24px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

/* контейнер, чтобы размещать input, measureSpan и звёздочку */
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

/* сами инпуты */
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${THEME.borderRadius.small};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  color: #000; /* текст должен быть чёрный */
  background-color: ${(props) =>
    props.$hasError ? "#FFEBEB" : THEME.colors.white};
  border: 1px solid
    ${(props) => (props.$hasError ? "#F25050" : THEME.colors.gray[300])};
  box-sizing: border-box;

  &::placeholder {
    color: ${THEME.colors.gray[400]};
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$hasError ? "#F25050" : THEME.colors.primary};
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.08);
  }
`;

/* звёздочка - позиционируется абсолютом внутри wrapper.
   Используем transient prop $left (styled-components не прокинет $left в DOM) */
export const ErrorStar = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) =>
    typeof props.$left === "number"
      ? `${props.$left}px`
      : `${props.$left || 12}px`};
  color: #F25050;
  font-weight: 700;
  pointer-events: none;
  user-select: none;
`;

/* span для измерения ширины текста: невидимый, но в DOM и с теми же стилями шрифта */
export const MeasureSpan = styled.span`
  position: absolute;
  left: -9999px; /* убираем за экран, но оставляем в DOM */
  top: 0;
  white-space: pre; /* чтобы учитывались пробелы */
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  font-weight: ${THEME.fonts.weights.normal};
  visibility: hidden;
`;

/* единое сообщение под всеми полями */
export const ErrorMessage = styled.div`
  color: #F25050;
  font-size: ${THEME.fonts.sizes.xs};
  margin-top: 6px;
  text-align: center;
`;

/* кнопка */
export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${THEME.borderRadius.small};
  border: none;
  font-family: ${THEME.fonts.family};
  font-weight: ${THEME.fonts.weights.semibold};
  background-color: ${(props) =>
    props.$disabled ? "#CCCCCC" : THEME.colors.primary};
  color: ${(props) => (props.$disabled ? "#666666" : THEME.colors.white)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  margin-top: 6px;

  &:hover {
    background-color: ${(props) =>
      !props.$disabled ? THEME.colors.primaryHover : "#CCCCCC"};
  }
`;

export const LoginLink = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  color: ${THEME.colors.gray[500]};
  text-align: center;
  margin-top: 16px;

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

// import styled from "styled-components";
// import { THEME } from "../../constants/theme";

// export const RegisterContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background-color: ${THEME.colors.background};
// `;

// export const RegisterCard = styled.div`
//   background-color: ${THEME.colors.white};
//   border-radius: ${THEME.borderRadius.large};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); 
//   padding: 48px;
//   width: 100%;
//   max-width: 379px;
//   margin: auto;
// `;

// export const RegisterTitle = styled.h1`
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.bold};
//   font-size: ${THEME.fonts.sizes.xl};
//   text-align: center;
//   color: ${THEME.colors.gray[700]};
//   margin-bottom: 32px;
// `;

// export const RegisterForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.sm};
//   font-weight: ${THEME.fonts.weights.medium};
//   color: ${THEME.colors.gray[600]};
//   margin-bottom: 8px;
// `;

// export const Input = styled.input`
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.base};
//   padding: 12px 16px;
//   border: 1px solid ${THEME.colors.gray[300]};
//   border-radius: ${THEME.borderRadius.small};
//   background-color: ${THEME.colors.white};
//   color: ${THEME.colors.gray[700]};
//   transition: border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;

//   &::placeholder {
//     font-family: ${THEME.fonts.family};
//     font-weight: ${THEME.fonts.weights.normal};
//     font-style: normal;
//     font-size: ${THEME.fonts.sizes.xs};
//     color: ${THEME.colors.gray[400]};
//   }

//   &:not(:placeholder-shown) {
//     color: ${THEME.colors.gray[700]};
//     font-weight: ${THEME.fonts.weights.medium};
//   }

//   &:focus {
//     outline: none;
//     border-color: ${THEME.colors.primary};
//     box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.1);
//     color: ${THEME.colors.gray[700]};
//   }

//   &:focus::placeholder {
//     color: ${THEME.colors.gray[400]};
//   }
// `;

// export const RegisterButton = styled.button`
//   width: 100%;
//   font-family: ${THEME.fonts.family};
//   font-weight: ${THEME.fonts.weights.semibold};
//   font-style: normal;
//   font-size: ${THEME.fonts.sizes.xs};
//   text-align: center;
//   padding: 12px;
//   border: none;
//   border-radius: ${THEME.borderRadius.small};
//   background-color: ${THEME.colors.primary};
//   color: ${THEME.colors.white};
//   cursor: pointer;
//   transition: background-color 0.2s ease;
//   margin-top: 8px;

//   &:hover {
//     background-color: ${THEME.colors.primaryHover};
//   }

//   &:focus {
//     outline: none;
//     box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
//   }
// `;

// export const LoginLink = styled.div`
//   font-family: ${THEME.fonts.family};
//   font-size: ${THEME.fonts.sizes.sm};
//   color: #999999;
//   text-align: center;
//   margin-top: 24px;

//   p {
//     margin: 0 0 8px 0;
//   }

//   a {
//     color: #999999;
//     text-decoration: underline;
//     font-weight: ${THEME.fonts.weights.normal};

//     &:hover {
//       color: ${THEME.colors.gray[600]};
//     }
//   }
// `;
