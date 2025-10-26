import styled from "styled-components";
import {
  PageTitle,
  BackButton,
  ArrowIcon,
} from "../../components/common/SharedStyles";

export const PageContainer = styled.main`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 16px;
    max-width: 100%;
    grid-column: span 4;
  }
`;

// Экспортируем импортированные компоненты
export { PageTitle, BackButton, ArrowIcon };
