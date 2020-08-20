import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Container } from "./Container";
import Navbar from "../navbar";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const query = useStaticQuery(graphql`
    query LogoQuery {
      logoImage: file(name: { eq: "echo-karriere" }) {
        childImageSharp {
          fixed(width: 160, height: 70) {
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <Container wide style={styles.container}>
        <Link to="/" className={styles.title}>
          <img
            src={query.logoImage.childImageSharp.fixed.base64}
            srcSet={query.logoImage.childImageSharp.fixed.srcSet}
            alt="echo karriere logo"
            className={styles.logo}
          />
        </Link>
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
