import { Container, Layout } from "@/components";

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

      <Container>
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2022</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Påmeldingen for echo Karriere 2022 er nå stengt. Ved eventuelle spørsmål, send e-post til
                <a className="underline" href="mailto:kontakt@echokarriere.no">
                  kontakt@echokarriere.no
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
