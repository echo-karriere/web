import Link from "next/link";

import { Attendees, Container, Content, Layout } from "@/components";

export default function Page(): JSX.Element {
  return (
    <Layout title="echo karriere 2022" description="Hva skjer på echo karriere høsten 2022?">
      <Container>
        <Content title="echo Karriere 2022">
          <p>
            Velkommen til echo Karriere 2022, en karrieredag for IT studenter i Bergensområdet. I år arrangeres
            karrieredagene 8. og 9. september. Karrieredagene blir avholdt på Forum Scene i{" "}
            <Link href="https://goo.gl/maps/MTwjyphYCp6pyYvm8">Fjøsangerveien 28, 5054 Bergen</Link>, rett ved
            Danmarksplass. <br />
            <br />
            Under vil du finne lenker til mer informasjon om karrieredagene 2022, samt en oversikt over bedrifter som
            deltar. Vi har også samlet noen spørsmål og svar som vi har mottat.{" "}
            <Link href="/nyheter/2022/faq-2022/">
              <a>Klikk her for å gå til FAQ.</a>
            </Link>
            .
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
