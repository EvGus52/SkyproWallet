import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundCard,
  ErrorCode,
  ErrorTitle,
  ErrorMessage,
  ButtonGroup,
  BackButton,
  HomeButton,
} from "./NotFound.styled";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    console.log("Переход на главную");
    navigate("/");
  };

  const handleGoBack = () => {
    console.log("Возврат назад");
    navigate(-1); // Возврат на предыдущую страницу
  };

  return (
    <NotFoundContainer>
      <NotFoundCard>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Страница не найдена</ErrorTitle>
        <ErrorMessage>
          К сожалению, запрашиваемая вами страница не существует.
          <br />
          Возможно, она была удалена или вы ввели неправильный адрес.
        </ErrorMessage>

        <ButtonGroup>
          <BackButton onClick={handleGoBack}>← Назад</BackButton>
          <HomeButton onClick={handleGoHome}>На главную</HomeButton>
        </ButtonGroup>
      </NotFoundCard>
    </NotFoundContainer>
  );
};

export default NotFound;
