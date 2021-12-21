import Link from "next/link";

import { Attendees, Container, Content, Layout } from "@/components";

import { Notification } from "../../components/common/NotificationNoLink";

export default function Page(): JSX.Element {
  return (
    <Layout title="echo karriere 2021" description="Hva skjer på echo karriere høsten 2021?">
      <Notification message="Informasjonen på denne siden gjelder for karrieredagen 2021!" url="#" />
      <Container>
        <Content title="echo karriere 2021">
          <p>
            Grunnet smittesituasjonen blir echo karriere 2021 et digital arrangement, 17. september. Karrieredagen vil
            gå på plattformen <a href="https://www.gather.town/">Gather</a>, hvor det vil bli holdt lynforedrag,
            workshopper, foredrag og en full digital karrieredag med stands og kaffe. Se også oversikten over ledige og
            utlyste stillinger <Link href="/for-studenter/jobb/">her</Link> samt{" "}
            <Link href="/for-studenter/timeplan">timeplanen</Link>.
          </p>
        </Content>
        <Attendees />
      </Container>
    </Layout>
  );
}
