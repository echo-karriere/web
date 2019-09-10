import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Link } from "../../components/Link";
import { PageTitle } from "../../components/PageWrapper/style";

interface ForCompaniesProps {}

const ForCompanies: React.FC<ForCompaniesProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>For bedrifter</PageTitle>
      <h5>Timeplan</h5>
      <ul>
        <li>
          10:15 - 13:00 - Rigging av lokaler. Vi er til stede for å hjelpe til
          og vi anbefaler dere å møte opp i god tid.
        </li>
        <li>13:15 - 14:15 - Lynpresentasjoner </li>
        <li>14:15 - 18:00 - Standområdet er åpent</li>
        <li>18:00 - 20:00 - Nedrigging av lokalet</li>
      </ul>
      <h5>Praktisk informasjon</h5>
      <p>
        Dere har et område på 4m^2 å bruke. Lokalet kommer til å være fullt, så
        det er ikke mulig å bruke mer plass enn det. Vi skaffer et bord og én
        strømpadde for dere. Det vil også bli enkel matservering i form av
        boller.
      </p>
      <h5>Kom dere frem</h5>
      <p>
        Adressen for arrangementet er: <br />
        Høyteknologisenteret <br />
        Thormøhlensgate 55 <br />
        5008 Bergen
      </p>
      <p>
        Se også universitetets egen guide for å finne frem{" "}
        <Link
          href="https://www.uib.no/ii/54321/finn-fram-til-oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          ved å klikke her.
        </Link>
      </p>
    </ContentWrapper>
  );
};

export default ForCompanies;
