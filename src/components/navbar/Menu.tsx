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

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    transform: none;
    flex-direction: row;
    height: auto;
    top: initial;
    left: initial;
    position: initial;
    display: flex;
  }
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;

    > * {
      &:not(:last-child) {
        margin-right: ${({ theme }) => theme.size.spacing};
      }
    }
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
