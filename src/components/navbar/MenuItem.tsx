import React from "react";
import { Link } from "gatsby";
import styles from "./MenuItem.module.scss";
import downArrow from "../../assets/angle-down-solid.svg";

interface Props {
  title: string;
  to: string;
  icon?: boolean;
}

const DownArrow: React.FC = () => {
  return <img src={downArrow} alt="Expand icon" className={styles.icon} />;
};

const MenuItem: React.FC<Props> = ({ title, to, icon = false }) => {
  return (
    <Link to={`/${to}/`} className={styles.link}>
      {title} {icon && <DownArrow />}
    </Link>
  );
};

export default MenuItem;
