import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  MenuButton,
  MenuLink,
  MenuList,
  MenuItem,
} from "./styles";
import { ButtonStyled } from "../Button";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <MenuButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuList isOpen={menuOpen}>
        <MenuItem>
          <MenuLink>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ButtonStyled>Home</ButtonStyled>
            </Link>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>
            <Link to="/tree" style={{ textDecoration: "none" }}>
              <ButtonStyled>Árvore</ButtonStyled>
            </Link>
          </MenuLink>
        </MenuItem>
      </MenuList>
    </HeaderContainer>
  );
};
