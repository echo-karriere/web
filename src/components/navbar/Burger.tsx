import styled from "styled-components";
import React from "react";
import { math } from "polished";

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: ${({ theme }) => math(`${theme.size.spacing} / 1.5`)};
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.grey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`;

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Burger: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
