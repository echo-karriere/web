import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.backgroundColor};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.color.textColor};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.screen.sm}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

const MenuItems = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    margin: 0 auto;
  }
`;

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  const navigation = useNavigationData();

  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <MenuItems>
        {navigation.map((nav: NavItem) => (
          <MenuItem title={nav.title} to={nav.link} key={nav.link} />
        ))}
      </MenuItems>
    </StyledMenu>
  );
};
export default Menu;
