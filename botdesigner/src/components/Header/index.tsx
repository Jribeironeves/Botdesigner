import React, { useState } from "react";
import {
  HeaderContainer,
  Title,
  MenuButton,
  MenuLink,
  MenuList,
  MenuItem,
} from "./styles";
import { Button } from "../Button";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Title>Botdesigner</Title>
      <MenuButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuList isOpen={menuOpen}>
        <MenuItem>
          <MenuLink href="#">
            <Button>Home</Button>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <Button>Árvore</Button>
          </MenuLink>
        </MenuItem>
      </MenuList>
    </HeaderContainer>
  );
};
