import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";

interface ForCompaniesProps {}

const ForCompanies: React.FC<ForCompaniesProps> = () => {
  return (
    <ContentWrapper>
      <h1>Nyttig information</h1>
      <h2>Timeplan</h2>
      <ul>
        <li>
          10:15 - 13:00 - Rigging av lokaler. Vi er til stede for å hjelpe til
          og vi anbefaler dere å møte opp i god tid.
        </li>
        <li>13:15 - 14:15 - Lynpresentasjoner </li>
        <li>14:15 - 18:00 - Standområdet er åpent</li>
        <li>18:00 - 20:00 - Nedrigging av lokalet</li>
      </ul>
      <h2>Praktisk informasjon</h2>
      <p>
        Dere har et område på 4m^2 å bruke. Lokalet kommer til å være fullt, så
        det er ikke mulig å bruke mer plass enn det. Vi skaffer et bord og én
        strømpadde for dere. Det vil også bli enkel matservering i form av
        boller.
      </p>
      <h2>Kom dere frem</h2>
      <p>
        Adressen for arrangementet er: <br />
        Høyteknologisenteret <br />
        Thormøhlensgate 55 <br />
        5008 Bergen
      </p>
      <p>
        Se også universitetets egne guide for å finne frem{" "}
        <a href="https://www.uib.no/ii/54321/finn-fram-til-oss">her.</a>
      </p>
    </ContentWrapper>
  );
};

export default ForCompanies;
