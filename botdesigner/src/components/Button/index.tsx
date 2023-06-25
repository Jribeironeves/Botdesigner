import React from "react";
import { ButtonContainer, ButtonStyled } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <ButtonContainer>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </ButtonContainer>
  );
};
