import Link from "next/link";

import { Attendees, Container, Content, Layout } from "@/components";

export default function Page(): JSX.Element {
  return (
    <Layout title="echo karriere 2022" description="Hva skjer på echo karriere høsten 2022?">
      <Container>
        <Content title="echo Karriere 2022">
          <p>
            Velkommen til echo Karriere 2022, en karrieredag for IT studenter i Bergensområdet. I år arrangeres
            karrieredagene 8. og 9. september ved Forum Scene like ved Danmarksplass. Det vil avholdes lynpresentasjoner
            av bedrifter, workshops og en karrieremesse hvor studenter kan treffe bedrifter på stands. Enkelte av
            bedriftene har også mulighet til å invitere noen av dere med på en bankett, som avholdes fredagen. Vi åpner
            dørene litt før klokken 09:00 den 8. september, og håper vi ser deg der. <br />
            <br />
            Under vil du finne lenker til mer informasjon om karrieredagene 2022, samt en oversikt over bedrifter som
            deltar.
          </p>

          <div className="sm:grid sm:grid-cols-3 gap-1">
            <Link href="/for-studenter/timeplan/">
              <a
                className="shadow cursor-pointer max-w-sm mb-1 flex items-center justify-center px-2 py-3 border border-transparent text-base rounded-md bg-c5 hover:bg-c6"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {" "}
                Timeplan og oversikt
              </a>
            </Link>

            <Link href="/for-studenter/workshops/">
              <a
                className="shadow cursor-pointer max-w-sm mb-1 flex items-center justify-center px-2 py-3 border border-transparent text-base rounded-md bg-c5 hover:bg-c6"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Workshops
              </a>
            </Link>

            <Link href="/for-studenter/jobb/">
              <a
                className="shadow cursor-pointer max-w-sm mb-1 flex items-center justify-center px-2 py-3 border border-transparent text-base rounded-md bg-c5 hover:bg-c6"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Stillingsannonser
              </a>
            </Link>
          </div>
        </Content>
        <Attendees />
      </Container>
    </Layout>
  );
}
