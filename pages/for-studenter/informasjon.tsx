import { Attendees, Container, Content, Layout } from "@/components";

export default function Page(): JSX.Element {
  return (
    <Layout title="echo karriere 2022" description="Hva skjer på echo karriere høsten 2022?">
      <Container>
        <Content title="echo karriere 2022">
          <p>
            echo karriere er en karrieredag for IT-studenter i Bergensområdet. Karrieredagen arrangeres på Forum Scene
            den 8. og 9. september. Det vil også avholdes{" "}
            <a href="https://echokarriere.pameldinger.no" className="text-blue-500">
              workshops
            </a>{" "}
            disse dagene.
          </p>
        </Content>
        <Attendees />
      </Container>
    </Layout>
  );
}
