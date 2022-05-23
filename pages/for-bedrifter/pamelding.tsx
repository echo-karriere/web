import { Notification } from "components/common/NotificationNoLink";

import { Container, Layout, RegistrationForm } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout
      title="Påmelding 2022"
      description="Ønsker du og din bedrift å delta på echo karriere i september? Påmeldingen er nå åpen! En fantastisk mulighet til å vise frem bedriften for IT-studenter i Bergensområdet."
    >
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/echo-karriere/echo-karriere-static/main/meta_thumbnails/echo_pamelding.png"
      />
      <Notification
        message="Vi har fortsatt noen ledige plasser, så vi utvider fristen som står nevnt i invitasjonen. Det er bare å melde seg på!"
        url="#"
      />
      <Container>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}
