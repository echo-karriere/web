import React from "react";
import styled from "styled-components";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import c from "../styles/constants";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: ${c.size.spacingUnit / 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FourOhFour: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Ikke funnet" />
      <Wrapper>
        <h1>404: Vi finner ikke siden din :(</h1>
        <p>Gå tilbake eller prøvd på nytt.</p>
      </Wrapper>
    </Layout>
  );
};

export default FourOhFour;
