import React from "react";
import { ButtonContainer, ButtonStyleds } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: string;
}

export const ButtonStyled: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <ButtonContainer>
      <ButtonStyleds onClick={onClick}>{children}</ButtonStyleds>
    </ButtonContainer>
  );
};
