import React from "react";
import { Link } from "gatsby";

import { NavItem, useNavigationData } from "../../queries/useNavigationData";
import { Container } from "./Container";

import styles from "./Footer.module.scss";
import FacebookSquare from "../../assets/facebook-square.svg";
import GitHubSquare from "../../assets/github-square.svg";
import LinkedinSquare from "../../assets/linkedin-square.svg";
import Vercel from "../../assets/vercel-logo.svg";

export function Footer(): JSX.Element {
  const navigation = useNavigationData();

  return (
    <div className={styles.footer}>
      <Container wide style={styles.grid}>
        <div className={styles.links}>
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
        <div className={styles.poweredBy}>
          <h3>Powered by</h3>
          <a href="https://vercel.com?utm_source=echo-karriere-website&utm_campaign=oss">
            <img src={Vercel} alt="Vercel logo" className={styles.vercel} />
          </a>
        </div>
        <div className={styles.socials}>
          <h3>Sosiale medier</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                href="https://www.facebook.com/echokarriere/"
                className={styles.link}
              >
                <img
                  src={FacebookSquare}
                  alt="Facebook icon"
                  className={styles.social}
                />{" "}
                Facebook
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="https://github.com/echo-karriere"
                className={styles.link}
              >
                <img
                  src={GitHubSquare}
                  alt="GitHub icon"
                  className={styles.social}
                />{" "}
                Github
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="https://www.linkedin.com/company/echo-karriere"
                className={styles.link}
              >
                <img
                  src={LinkedinSquare}
                  alt="Linkedin icon"
                  className={styles.social}
                />{" "}
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
