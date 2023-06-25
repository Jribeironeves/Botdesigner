/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  HeaderContainer,
  Title,
  MenuButton,
  MenuLink,
  MenuList,
  MenuItem
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
          <MenuLink href='#'>
            <Button children='Home' />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#'>
            <Button children='Árvore' />
          </MenuLink>
        </MenuItem>
      </MenuList>
    </HeaderContainer>
  );
};
