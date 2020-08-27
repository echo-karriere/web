import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Layout } from "../../components/common/Layout";
import { SEO } from "../../components/common/Seo";
import { Container } from "../../components/common/Container";
import styles from "./styret.module.scss";

interface User {
  first_name: string;
  last_name: string;
  title: string;
  email: string;
}

interface Node {
  node: {
    user: User;
  };
}

interface Response {
  allApiCommittee: {
    edges: Node[];
  };
}

export default function Committee(): JSX.Element {
  const response = useStaticQuery<Response>(graphql`
    query MyQuery {
      allApiCommittee {
        edges {
          node {
            user {
              first_name
              last_name
              title
              email
              avatar
            }
          }
        }
      }
    }
  `);

  const {
    allApiCommittee: { edges: members },
  } = response;

  return (
    <Layout>
      <SEO title="Styret" />
      <Container>
        <h1>Styret</h1>
        <div className={styles.members}>
          {members.map(({ node: { user: member } }) => (
            <div className={styles.card} key={member.last_name}>
              <h2 className={styles.name}>{member.first_name}</h2>
              <h2 className={styles.name}>{member.last_name}</h2>
              <h4 className={styles.title}>{member.title}</h4>
              <p className={styles.email}>{member.email}</p>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
