import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ButtonStyled = styled.button`
  margin-right: 20px;
  padding: 8px 12px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;