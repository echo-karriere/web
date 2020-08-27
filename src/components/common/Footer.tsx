import React from "react";
import { Link } from "gatsby";

import { Container } from "./Container";
import { useNavigationData, NavItem } from "../../queries/useNavigationData";

import styles from "./Footer.module.scss";

export function Footer(): JSX.Element {
  const navigation = useNavigationData();

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
          <h3>Lenker</h3>
          <ul className={styles.ul}>
            {navigation.map((nav: NavItem) => (
              <li className={styles.li} key={nav.url}>
                <Link to={`/${nav.url}/`} className={styles.link}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
