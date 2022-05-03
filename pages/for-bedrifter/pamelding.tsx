import { Container, Layout, RegistrationForm } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Påmelding 2022" description="Påmeldingen for echo karriere 2022 er nå åpen.">
      <Container>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}
