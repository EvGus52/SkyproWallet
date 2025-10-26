import styled from "styled-components";
import { THEME } from "../../constants/theme";
import {
  CenteredContainer,
  Card,
  ButtonGroup,
  DangerButton,
  SecondaryButton,
} from "../../components/common/SharedStyles";

export const LogoutContainer = CenteredContainer;

export const LogoutCard = styled(Card)`
  padding: 48px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const LogoutIcon = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
`;

export const LogoutTitle = styled.h1`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.xl};
  font-weight: ${THEME.fonts.weights.semibold};
  color: ${THEME.colors.gray[700]};
  margin-bottom: 16px;
`;

export const LogoutMessage = styled.p`
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.base};
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export { ButtonGroup };
export const ConfirmButton = DangerButton;
export const CancelButton = SecondaryButton;
