/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";

const logo = require("../../assets/logo.png");

export const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  padding: 20px;
  width: 97.4vw;

  @media (min-width: 1501px) and (max-width: 1600px) {
    padding: 20px;
    width: 97.37vw;
    background-color: #FFFFFF;
  }

  @media (min-width: 2501px) and (max-width: 2600px) {
    padding: 20px;
    width: 98.43vw;
    background-color: #FFFFFF;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  color: #253d5c;
  font-size: 32px;
  width: 250px;
  height: 80px;
  font-weight: 600;
  margin: 20px 0 0;
  margin-left: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 4rem;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 62px;
    right: 20px;
    z-index: 10;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;

    span {
      display: block;
      width: 25px;
      height: 3px;
      margin-bottom: 5px;
      background-color: #333;
    }
  }
`;

export const MenuList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none !important;
  justify-content: flex-end;
  margin-right: 60px;
  margin-top: -3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    width: auto;
    height: 70%;
    top: 166px;
    left: 20px;
    background-color: #F3F4F8;
    padding: 10px;
    border-radius: 4px;
    z-index: 1;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;
  text-decoration: none !important;
`;

export const MenuLink = styled.a`
  text-decoration: none !important;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;
