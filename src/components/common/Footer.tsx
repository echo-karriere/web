import React from "react";

import { Container } from "./Container";

import styles from "./Footer.module.scss";
import FacebookSquare from "../../assets/facebook-square.svg";

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <Container wide style={styles.flex}>
        <div className={styles.element}>
          <h3>echo karriere</h3>
          <p>
            echo karriere er en karrieredag for IT-studenter i Bergensområdet
            som arrangeres 12. februar 2021.
          </p>
        </div>
        <div className={styles.element}>
          <h3>Sosiale medier</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                href="https://www.facebook.com/echokarriere/"
                className={styles.link}
              >
                <img
                  src={FacebookSquare}
                  alt="Indicator of link"
                  className={styles.social}
                />{" "}
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
