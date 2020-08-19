import React from "react";
import styled from "styled-components";

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

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  const tabIndex = open ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <a href="/" tabIndex={tabIndex}>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        Pricing
      </a>
      <a href="/" tabIndex={tabIndex}>
        Contact
      </a>
    </StyledMenu>
  );
};
export default Menu;
