import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f5f6;
`;

export const NotFoundCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 64px 48px;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

export const ErrorCode = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 120px;
  font-weight: 800;
  color: #7334ea;
  line-height: 1;
  margin-bottom: 24px;
`;

export const ErrorTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export const HomeButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  background-color: #7334ea;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5b21b6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(115, 52, 234, 0.3);
  }
`;

export const BackButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 32px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: transparent;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 16px;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
