import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import styled, { keyframes } from "styled-components";
import { appToasts } from "./toast";

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const Dialog = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 420px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease-out;
`;

const Header = styled.div`
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid #f1f5f9;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.2;
`;

const Body = styled.div`
  padding: 16px 24px 24px 24px;
`;

const Message = styled.p`
  margin: 0 0 24px 0;
  color: #64748b;
  line-height: 1.5;
  font-size: 15px;
`;

const Highlight = styled.strong`
  color: #1e293b;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
  min-width: 80px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const CancelButton = styled(Button)`
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #334155;
  }
`;

const ConfirmButton = styled(Button)`
  background: #dc2626;
  color: white;

  &:hover {
    background: #b91c1c;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

// Компонент модального окна
// eslint-disable-next-line react-refresh/only-export-components
const ConfirmDialog = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  return (
    <Overlay>
      <Dialog>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <Message>{message}</Message>
          <Actions>
            <CancelButton onClick={onCancel}>
              {cancelText || "Отмена"}
            </CancelButton>
            <ConfirmButton onClick={onConfirm}>
              {confirmText || "Подтвердить"}
            </ConfirmButton>
          </Actions>
        </Body>
      </Dialog>
    </Overlay>
  );
};

// Утилиты для различных типов подтверждений
export const confirmUtils = {
  // Подтверждение удаления расхода
  deleteExpense: (expenseDescription, onConfirm) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmDialog
          title="Удаление расхода"
          message={
            <>
              Вы действительно хотите удалить расход{" "}
              <Highlight>"{expenseDescription}"</Highlight>?
              <br />
              <br />
              Это действие нельзя отменить.
            </>
          }
          confirmText="Да, удалить"
          cancelText="Отмена"
          onConfirm={async () => {
            const success = await onConfirm();
            if (success) {
              appToasts.expenseDeleted();
            }
            onClose();
          }}
          onCancel={onClose}
        />
      ),
    });
  },

  // Подтверждение удаления (общее)
  delete: (itemName, onConfirm, options = {}) => {
    const { title = "Подтверждение удаления", confirmText = "Да, удалить" } =
      options;

    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmDialog
          title={title}
          message={
            <>
              Вы действительно хотите удалить{" "}
              <Highlight>"{itemName}"</Highlight>?
              <br />
              <br />
              Это действие нельзя отменить.
            </>
          }
          confirmText={confirmText}
          cancelText="Отмена"
          onConfirm={async () => {
            const success = await onConfirm();
            if (success && options.onSuccess) {
              options.onSuccess();
            }
            onClose();
          }}
          onCancel={onClose}
        />
      ),
    });
  },

  // Подтверждение действия (общее)
  action: (title, message, onConfirm, options = {}) => {
    const { confirmText = "Подтвердить", cancelText = "Отмена" } = options;

    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmDialog
          title={title}
          message={message}
          confirmText={confirmText}
          cancelText={cancelText}
          onConfirm={async () => {
            const success = await onConfirm();
            if (success && options.onSuccess) {
              options.onSuccess();
            }
            onClose();
          }}
          onCancel={onClose}
        />
      ),
    });
  },

  // Подтверждение с кастомным UI
  custom: (customUI) => {
    confirmAlert({
      customUI,
    });
  },
};

export default confirmUtils;
