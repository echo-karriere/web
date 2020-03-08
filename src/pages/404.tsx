import React from "react";
import styled from "styled-components";
import { math } from "polished";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => math(`${theme.size.spacing} / 2`)};
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
