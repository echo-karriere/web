import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";

export const StyledMenu = styled.nav<{ open: boolean }>`
  background: ${({ theme }) => theme.color.backgroundcolor};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: absolute;
  text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    display: flex;
    flex-direction: row;
    height: auto;
    left: initial;
    position: initial;
    top: initial;
    transform: none;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
