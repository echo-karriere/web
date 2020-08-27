import React from "react";
import { Link } from "gatsby";
import styles from "./MenuItem.module.scss";
import downArrow from "../../assets/angle-down-solid.svg";

interface Props {
  title: string;
  to: string;
  icon?: boolean;
}

function DownArrow() {
  return <img src={downArrow} alt="Expand icon" className={styles.icon} />;
}

export function MenuItem({ title, to, icon = false }: Props): JSX.Element {
  return (
    <Link to={`/${to}/`} className={styles.link}>
      {title} {icon && <DownArrow />}
    </Link>
  );
}
