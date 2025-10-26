import styled from "styled-components";
import { THEME } from "../../constants/theme";
import { PrimaryButton } from "../../components/common/SharedStyles";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    grid-column: span 4;
    margin-top: 12px;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;

  @media (max-width: 767px) {
    font-size: ${THEME.fonts.sizes.xl};
  }
`;

export const AddButton = styled.button`
  display: none;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${THEME.colors.black};
  font-family: ${THEME.fonts.family};
  font-size: ${THEME.fonts.sizes.sm};
  font-weight: ${THEME.fonts.weights.medium};
  cursor: pointer;
  border-radius: ${THEME.borderRadius.small};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: ${THEME.colors.gray[100]};
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 767px) {
    display: flex;
    font-size: ${THEME.fonts.sizes.xs};

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const MobileDeleteButton = styled(PrimaryButton)`
  display: none;

  @media (max-width: 767px) {
    display: block;
    grid-column: span 4;
  }
`;

export const MainContainer = styled.main`
  padding: 24px;

  @media (max-width: 767px) {
    padding: 12px;
  }
`;
