import { Container, Layout, SEO } from "../../components";
import { JobRegistrationForm } from "../../components/forms";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Jobber"
        description="Send inn ledige stillinger som skal vises på nettsiden"
      />
      <Container>
        <JobRegistrationForm />
      </Container>
    </Layout>
  );
}
