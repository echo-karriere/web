import { Container, Layout, RegistrationForm } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout
      title="Påmelding 2022"
      description="Ønsker du og din bedrift å delta på echo karriere i september? Påmeldingen er nå åpen! En fantastisk mulighet til å vise frem bedriften for IT-studenter i Bergensområdet."
    >
      <meta property="og:image" content="https://i.ibb.co/C9nr7wk/cover.png" />
      <Container>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}
