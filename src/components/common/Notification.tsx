import React from "react";

import { StyledLink } from "./StyledLink";
import styles from "./Notification.module.scss";

interface Props {
  message: string;
  url: string;
}

export function Notification({ message, url }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <span className={styles.link}>
            <StyledLink to={url}>{message} ➔</StyledLink>
          </span>
        </div>
      </div>
    </div>
  );
}
