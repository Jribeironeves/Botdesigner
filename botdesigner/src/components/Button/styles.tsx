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
  width: 140px;
  margin-right: 20px;
  padding: 8px 12px;
  background-color: #3680AE;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80vw;
  }

  &:hover {
    background-color: #4198ce;
  }

`;
