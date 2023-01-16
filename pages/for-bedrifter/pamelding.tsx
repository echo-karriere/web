import { Container, Layout } from "@/components";

export default function Index(): JSX.Element {
  return (
    <Layout
      title="Påmelding 2023"
      description="Ønsker du og din bedrift å delta på echo karriere i september? Påmeldingen er nå åpen! En fantastisk mulighet til å vise frem bedriften for IT-studenter i Bergensområdet."
    >
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/echo-karriere/echo-karriere-static/main/meta_thumbnails/echo_pamelding.png"
      />

      <Container>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2023</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Ønsker du og din bedrift å delta på echo karriere i september? Påmeldingen er nå åpen! Du kan lese mer
                om arrangementet i{" "}
                <a
                  href="/files/invitation.pdf"
                  className="
                text-blue-600 hover:text-blue-900 underline
                "
                >
                  invitasjonen her
                </a>
                .<br />
                <br />
                <br />
                <br />
                <a
                  href="https://forms.echokarriere.no/karrieredagene2023"
                  className="bg-blue-400 hover:bg-blue-600 text-white p-4  rounded"
                >
                  {" "}
                  Her kan du melde deg på
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
