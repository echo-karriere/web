import React, { ReactNode } from "react";
import { Link } from "gatsby";
import downArrow from "../../assets/angle-down-solid.svg";
import upArrow from "../../assets/angle-up-solid.svg";
import styles from "./MenuItem.module.scss";

interface Props {
  title: string;
  to: string;
  children?: ReactNode;
}

export const DownArrow: React.FC = () => {
  return <img src={downArrow} alt="Expand icon" className={styles.icon} />;
};

export const UpArrow: React.FC = () => {
  return <img src={upArrow} alt="Minimize icon" className={styles.icon} />;
};

const MenuItem: React.FC<Props> = ({ title, to, children = undefined }) => {
  return (
    <>
      <Link to={to} className={styles.link}>
        {title}
      </Link>
      {children && children}
    </>
  );
};

export default MenuItem;
