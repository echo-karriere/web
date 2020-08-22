import React from "react";
import { Link } from "gatsby";
import styles from "./MenuItem.module.scss";
import { DownArrow, UpArrow } from "./Menu";

interface Props {
  title: string;
  to: string;
}

interface IconProps extends Props {
  open: boolean;
}

export const MenuItemIcon: React.FC<IconProps> = ({ title, to, open }) => {
  return (
    <Link to={to} className={styles.link}>
      {title} {open ? <UpArrow /> : <DownArrow />}
    </Link>
  );
};

const MenuItem: React.FC<Props> = ({ title, to }) => {
  return (
    <Link to={`/${to}/`} className={styles.link}>
      {title}
    </Link>
  );
};

export default MenuItem;
