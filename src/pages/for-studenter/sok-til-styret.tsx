import { CommitteeApplication, Container, Layout, SEO } from "../../components";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Søk til styret"
        description="Send din søknad til styret her!"
      />
      <Container>
        <CommitteeApplication />
      </Container>
    </Layout>
  );
}
