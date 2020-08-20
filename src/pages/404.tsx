import React from "react";
import styled from "styled-components";
import { math } from "polished";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: ${({ theme }) => math(`${theme.size.spacing} / 2`)};
  width: 100vw;
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
