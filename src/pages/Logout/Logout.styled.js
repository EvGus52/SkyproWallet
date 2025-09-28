import styled from "styled-components";

export const LogoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f5f6;
`;

export const LogoutCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
`;

export const LogoutMessage = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #ef4444;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #dc2626;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
  }
`;

export const CancelButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.3);
  }
`;
