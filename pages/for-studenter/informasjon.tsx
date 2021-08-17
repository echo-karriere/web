import Link from "next/link";

import { Attendees, Container, Content, Layout } from "@/components";

export default function Page(): JSX.Element {
  return (
    <Layout title="echo karriere 2021" description="Hva skjer på echo karriere høsten 2021?">
      <Container>
        <Content title="echo karriere 2021">
          <p>
            Høstens arrangement blir forhåpentligvis fysisk på Høyteknologisenteret, 16-17. september. Her vil det komme
            mer informasjon om deltakere, timeplan, stillinger og alt du trenger å vite for å delta. Se også oversikten
            over ledige og utlyste stillinger <Link href="/jobb/">her</Link> samt{" "}
            <Link href="/for-studenter/timeplan">timeplanen</Link>.
          </p>
        </Content>
        <Attendees />
      </Container>
    </Layout>
  );
}
