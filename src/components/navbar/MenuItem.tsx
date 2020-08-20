import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import downArrow from "../../assets/angle-down-solid.svg";
import upArrow from "../../assets/angle-up-solid.svg";

const NavLink = styled(Link)`
  align-self: center;
  color: ${({ theme }) => theme.color.textColor};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  padding: 2rem 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const Icon = styled.img`
  width: 12px;
`;

interface Props {
  title: string;
  to: string;
  children?: ReactNode;
}

export const DownArrow: React.FC = () => {
  return <Icon src={downArrow} alt="Expand icon" />;
};

export const UpArrow: React.FC = () => {
  return <Icon src={upArrow} alt="Minimize icon" />;
};

const MenuItem: React.FC<Props> = ({ title, to, children = undefined }) => {
  return (
    <>
      <NavLink to={to}>{title}</NavLink>
      {children && children}
    </>
  );
};

export default MenuItem;
