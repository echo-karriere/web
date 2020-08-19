import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import downArrow from "../../assets/angle-down-solid.svg";
import upArrow from "../../assets/angle-up-solid.svg";

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.textColor};
  align-self: center;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.color.textColor};
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
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
