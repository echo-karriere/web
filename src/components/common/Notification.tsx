import React from "react";
import { StyledLink } from "../landing/hero";

import styles from "./Notification.module.scss";

interface Props {
  message: string;
  url: string;
}

const Notification: React.FC<Props> = ({ message, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <StyledLink to={url}>{message} ➔</StyledLink>
        </div>
      </div>
    </div>
  );
};

export default Notification;
