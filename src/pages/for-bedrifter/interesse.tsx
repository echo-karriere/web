import { Container, InterestForm, Layout, SEO } from "../../components";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Kontakt oss"
        description="Trenger du å nå ut til styret i echo karriere? Send oss en epost her."
      />
      <Container>
        <InterestForm />
      </Container>
    </Layout>
  );
}
