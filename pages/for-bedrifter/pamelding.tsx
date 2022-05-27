import Link from "next/link";

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
                Vi har nå stengt påmeldingen. Ønsker dere å delta kan det være at vi vil ha mulighet til å motta noen
                bedrifter kun torsdag 8. september. Ta kontakt med oss på mail{" "}
                <a className="underline" href="mailto:kontakt@echokarriere.no">
                  kontakt@echokarriere.no
                </a>
                , så kan vi se hva vi kan få til. Dere finner invitasjonen{" "}
                <Link href="/files/invitation.pdf">
                  <a target="_blank" className="underline">
                    her
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
