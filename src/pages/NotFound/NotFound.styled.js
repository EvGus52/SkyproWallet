import styled from "styled-components";
import { THEME } from "../../constants/theme";
import {
  CenteredContainer,
  Card,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "../../components/common/SharedStyles";

export const NotFoundContainer = CenteredContainer;

export const NotFoundCard = styled(Card)`
  padding: 64px 48px;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

export const ErrorCode = styled.div`
  font-family: ${THEME.fonts.family};
  font-size: 120px;
  font-weight: 800;
  color: ${THEME.colors.primary};
  line-height: 1;
  margin-bottom: 24px;
`;

export const ErrorTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes["2xl"]};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  font-family: ${THEME.fonts.family};
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export { ButtonGroup };

export const HomeButton = styled(PrimaryButton)`
  width: auto;
  padding: 16px 32px;
`;

export const BackButton = styled(SecondaryButton)`
  padding: 16px 32px;
  margin-right: 16px;
`;
