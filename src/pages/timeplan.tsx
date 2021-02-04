import React from "react";
import { Link } from "gatsby";
import { Layout, SEO, Container, Content, Schedule } from "../components";

export default function FourOhFour(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Timeplan digital karrieredag 2021"
        description="Hva er planen for karrieredagen 2021?"
      />
      <Container>
        <Content title="Timeplan digital karrieredag 2021">
          <p>
            Vil du vite hva som skjer hvor og når? Se en oversikt over
            timeplanen her, og klikk deg inn på det som skjer! Husk også å se på{" "}
            <Link to="/jobb/">jobbene</Link> og{" "}
            <Link to="/karrieredagen-2021">bedriftene som deltar.</Link>
          </p>
        </Content>
        <div className="relative py-4 bg-white overflow-hidden">
          <div className="relative md:px-4 sm:px-6 lg:px-8">
            <Schedule />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
