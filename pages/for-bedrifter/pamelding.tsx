import { Container, Layout, RegistrationForm } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Påmelding 2022" description="Påmelding for echo karriere 2022">
      <Container>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}
