import React, { ReactNode } from "react";
import { Link } from "gatsby";

import styles from "./StyledLink.module.scss";

interface Props {
  to: string;
  children: ReactNode;
}

export function StyledLink({ to, children }: Props): JSX.Element {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
}
