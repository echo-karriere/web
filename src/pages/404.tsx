import React from "react";
import { Content } from "../components/common/Content";

import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";

export default function FourOhFour(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="404: Ikke funnet"
        description="Vi kunne dessverre ikke finne det du var på jakt etter."
      />
      <main className="flex items-center flex-col justify-center h-96 p-4">
        <Content title="404: Vi finner ikke siden din :(">
          <p>Gå tilbake eller prøvd på nytt.</p>
        </Content>
      </main>
    </Layout>
  );
}
