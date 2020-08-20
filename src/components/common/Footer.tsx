import React from "react";
import { Link } from "gatsby";

import { Container } from "./Container";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
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
              <li className={styles.li} key={nav.link}>
                <Link to={nav.link} key={nav.link} className={styles.link}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
