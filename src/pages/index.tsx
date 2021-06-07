import { Layout } from "../components";
import { Intro } from "../components";
import { SEO } from "../components";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO />
      <Intro />
    </Layout>
  );
}
