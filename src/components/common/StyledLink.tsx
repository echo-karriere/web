import React, { ReactNode } from "react";
import { Link } from "gatsby";

import styles from "./StyledLink.module.scss";

interface Props {
  to: string;
  children: ReactNode;
}

const StyledLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default StyledLink;
