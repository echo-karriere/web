import { CommitteeApplication, Container, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Søk til styret" description="Send din søknad til styret her!">
      <Container>
        <CommitteeApplication />
      </Container>
    </Layout>
  );
}
