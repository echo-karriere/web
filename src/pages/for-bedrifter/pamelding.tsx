import { Container, Layout, SEO } from "../../components";
import { RegistrationForm } from "../../components/forms";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Påmelding"
        description="Meld bedriften din på echo karriere 2021."
      />
      <Container>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}
