import React from "react";
import { Link } from "gatsby";
import styles from "./MenuItem.module.scss";

interface Props {
  title: string;
  to: string;
}

const MenuItem: React.FC<Props> = ({ title, to }) => {
  return (
    <Link to={`/${to}/`} className={styles.link}>
      {title}
    </Link>
  );
};

export default MenuItem;
