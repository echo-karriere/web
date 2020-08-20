import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import classNames from "classnames/bind";

import { Container } from "../common/Container";
import Hero from "./Hero";
import aboutUrl from "../../assets/about.svg";
import hiringUrl from "../../assets/hiring.svg";
import studentsUrl from "../../assets/students.svg";
import Notification from "../common/Notification";

import styles from "./Intro.module.scss";

const cx = classNames.bind(styles);

const Intro: React.FC = () => {
  const { apiLanding: data } = useStaticQuery(graphql`
    query IntroPage {
      apiLanding {
        notification
        notification_url
        about
        for_companies
        for_students
      }
    }
  `);

  return (
    <>
      {data.notification && (
        <Notification message={data.notification} url={data.notification_url} />
      )}
      <Hero />
      <Container wide>
        <div className={styles.grid}>
          <div>
            <h2>Om echo karriere</h2>
            <div dangerouslySetInnerHTML={{ __html: data.about }} />
          </div>
          <figure className={styles.art}>
            <img
              src={aboutUrl}
              alt="Four persons standing around with a small dog in front."
            />
          </figure>
        </div>
        <div className={cx("grid", "grid-inverse")}>
          <figure className={styles.art}>
            <img
              src={hiringUrl}
              alt="Art showing a person looking at online resumes."
            />
          </figure>
          <div>
            <h2>For bedrifter</h2>
            <div dangerouslySetInnerHTML={{ __html: data.for_companies }} />
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <h2>For studenter</h2>
            <div dangerouslySetInnerHTML={{ __html: data.for_students }} />
          </div>
          <figure className={styles.art}>
            <img src={studentsUrl} alt="A graduation cap." />
          </figure>
        </div>
      </Container>
    </>
  );
};

export default Intro;
