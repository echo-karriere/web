import styled from "styled-components";
import React from "react";
import { math } from "polished";

const StyledBurger = styled.button<{ open: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: ${({ theme }) => math(`${theme.size.spacing} / 1.5`)};
  width: 2rem;
  z-index: 10;

  @media screen and (prefers-reduced-motion: reduce) {
    span {
      background: ${({ theme }) => theme.color.grey};
      border-radius: 10px;
      height: 0.25rem;
      position: relative;
      transform-origin: 1px;
      transition: none;
      width: 2rem;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }

  span {
    background: ${({ theme }) => theme.color.grey};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

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
