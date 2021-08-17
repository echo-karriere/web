import { Container, JobRegistrationForm, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Jobber" description="Send inn ledige stillinger som skal vises på nettsiden">
      <Container>
        <JobRegistrationForm />
      </Container>
    </Layout>
  );
}
