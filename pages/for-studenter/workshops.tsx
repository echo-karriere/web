import Link from "next/link";

import { Container, Content, Layout } from "@/components";

export default function Page(): JSX.Element {
  return (
    <Layout title="Workshops" description="Workshops under echo Karriere 2022">
      <Container>
        <Content title="Workshops">
          <p>
            På echo Karriere sine karrieredager skal vi arrangere workshops som det er mulig å delta på. Nedenfor kan du
            lese mer om de ulike workshopsene. Vær opppmerksom over at Appfarms SuperPowerHour krever påmelding.
          </p>
          <h2 id="bouvet">Workshop med Bouvet</h2>
          <ul>
            <li>Selskap: Bouvet AS</li>
            <li>Tema: Front-end</li>
            <li>Tid: 8. september 10:00 - 11:30</li>
          </ul>

          <h2 id="cgi">Workshop med CGI Norge</h2>
          <ul>
            <li>Selskap: CGI Norge AS</li>
            <li>Tema: Teamarbeid som konsulenter</li>
            <li>Tid: 8. september 11:45 - 13:15</li>
          </ul>
          <p>
            Hos oss vil dere få en praktisk case som dere skal få prøve dere på. Vi leker kunde og dere skal få prøve
            dere som konsulenter. Det innebærer blant annet kundemøte, leveranse og en kjapp salgspresentasjon. Ikke
            skummelt, snarere gøy(!) Dere får litt rask teori og tips før casen.
          </p>

          <h2 id="knowit">Workshop med Knowit</h2>
          <ul>
            <li>Selskap: Knowit</li>
            <li>Tema: Er dette fremtidens kunst?</li>
            <li>Tid: 8. september 13:30 - 15:00</li>
          </ul>
          <p>
            Med Johnny Bjånesøy (data scientist, Knowit) og Bjørn Melvold (Art Director, Knowit)
            <br />
            <br />
            Bildegeneratorer som DALL-E, Imagen og Midjourney har på sin korte levetid fascinert en hel verden. På denne
            workshopen får du vite hvordan de fungerer – om teknologien bak, de underliggende komponentene og hvordan en
            kan skape bildemodeller på en forståelig måte, der vi viser både muligheter og begrensninger. I workshopen
            tester vi også verktøyet Midjourney der du får prøve hvordan det fungerer.
            <br />
            <br />
            Workshopen passer for alle som har interesse for temaet. Ta med laptop med installert Discord-bruker.
          </p>

          <h2 id="stacc">Workshop med Stacc</h2>
          <ul>
            <li>Selskap: Stacc AS</li>
            <li>Tema: N/A</li>
            <li>Tid: 9. september 11:30 - 13:00</li>
          </ul>

          <h2 id="netcompany">Workshop med Netcompany</h2>
          <ul>
            <li>Selskap: Netcompany</li>
            <li>Tema: Løsning av realistisk Case</li>
            <li>Tid: 9. september 11:30 - 13:00</li>
          </ul>
          <p>
            I denne workshopen skal studentene løse en realistisk teknisk case. Vi deler studentene i mindre grupper,
            hvor de skal samarbeide med å komme opp med løsning. Til slutt diskuterer vi løsningene som har kommet, og
            snakker om samarbeidet, hvilke utfordringer de møtte underveis og hva de har lært.
            <br /> <br />
            Denne workshopen er god trening til tekniske intervjuer som studentene kan støte på igjennom
            jobbsøkingingsprosessen.
          </p>

          <h2 id="appfarm">SuperPowerHour</h2>
          <ul>
            <li>Selskap: Appfarm AS</li>
            <li>Tema: Apputvikling</li>
            <li>Tid: 9. september 13:30 - 15:00</li>
          </ul>
          <p>
            Har du lyst på superkrefter? Bli med på vår SuperPowerHour, et 60-minutters hackathon hvor du får bygge ekte
            applikasjoner i lysets hastighet – uten å skrive kode.
            <br /> <br />
            More information:
            <br />
            Vi er Appfarm, en norsk scale-up basert i Oslo, og vi har utviklet en no-code platform for lynrask,
            full-stack utvilkling av skreddersydde webapplikasjoner (PWA). Vi er i sterk vekst og søker flere som vil
            bli med oss i no-code-revolusjonen.
            <br /> <br />
            Vi mener at god software ikke krever manuell koding. Å starte fra scratch og skrive kodelinje på kodelinje
            for enhver applikasjon mener vi er bortkastet tid i mange tilfeller. I stedet bør utviklere bruke
            ferdigstilte – men likevel fullt konfigurerbare – komponenter i utviklingen, og etterlate manuell koding til
            spesielle anledninger.
            <br /> <br />
            Vi er ikke de eneste med dette synspunktet. Gartner estimerer at low/no-code-teknologi vil stå for 65 % av
            apputvikling innen 2024. Du vil møte mange systemer i fremtiden som er bygget på low/no-code. Hvem vet?
            Kanskje du vil være personen bak dem?
            <br /> <br />
            Er du nysgjerrig på den enorme kraften i no-code? Ta med deg laptopen din og bli med!
          </p>
          <Link href="https://pameldinger.no/e/lmrirj">
            <a>
              <p className="shadow cursor-pointer max-w-sm mb-1 flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-c5 hover:bg-c6  ">
                Gå til påmelding
              </p>
            </a>
          </Link>

          <h2 id="kantega">Workshop med Kantega</h2>
          <ul>
            <li>Selskap: Kantega</li>
            <li>Tema: Kunstig intelligens</li>
            <li>Tid: 9. september 13:30 - 15:00</li>
          </ul>
          <p>
            Ta med deg maskinen, og bli med på en reise gjennom en verden av kunstig intelligens. Hos oss vil dere få en
            oversikt over landskapet, og bli småskitten på hendene med low-code maskinlæring.
          </p>
        </Content>
      </Container>
    </Layout>
  );
}
