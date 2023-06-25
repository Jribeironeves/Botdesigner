import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  padding: 20px;
  width: 97.4vw;

  @media (min-width: 1501px) and (max-width: 1600px) {
    padding: 20px;
    width: 97.37vw;
    background-color: red;
  }

  @media (min-width: 2501px) and (max-width: 2600px) {
    padding: 20px;
    width: 98.43vw;
    background-color: green;
  }
`;

export const Title = styled.h1`
  color: #253d5c;
  font-size: 32px;
  font-weight: 600;
  margin: 20px 0 0;
  margin-left: 80px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 10px;
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
  justify-content: flex-end;
  margin-top: -2rem;
  margin-right: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    width: auto;
    top: 166px;
    left: 8px;
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 4px;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;
