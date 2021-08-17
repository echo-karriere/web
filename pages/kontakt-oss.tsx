import { ContactUs, Container, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout title="Kontakt oss" description="Trenger du å nå ut til styret i echo karriere? Send oss en epost her.">
      <Container>
        <ContactUs />
      </Container>
    </Layout>
  );
}
