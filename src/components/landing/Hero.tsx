import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { StyledLink } from "../common/StyledLink";
import { Container } from "../common/Container";

import mountains from "../../assets/mountains.svg";
import styles from "./Hero.module.scss";

export function Hero(): JSX.Element {
  const { apiLanding: data } = useStaticQuery(graphql`
    query HeroPage {
      apiLanding {
        title
        subtitle
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <Container wide>
        <div className={styles.grid}>
          <figure className={styles.hero}>
            <img
              src={mountains}
              alt="A mountain range with people walking in front of it."
            />
          </figure>
          <div className={styles.hello}>
            <h1 className={styles.title}>{data.title}</h1>
            <h2 className={styles.subtitle}>{data.subtitle}</h2>
            <p>
              <StyledLink to="/utsatt-til-2021/">Utsatt til 2021 ➔</StyledLink>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
