import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import { Card } from "../../components/Card";
import { VolunteerWrapper } from "./style";
import volunteers from "./Volunteers";

interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Om oss</PageTitle>
      <p>
        echo karriere er en karrieredag for IT-studenter i bergensområdet og
        arrangeres for første gang 24. september 2019. Ca. 30 bedrifter fra hele
        landet kommer på besøk.
      </p>
      <PageTitle>Om echo karriere</PageTitle>
      <h5>Lynpresentasjon</h5>
      <p>
        Under karrieredagen vil bedriftene få muligheten til å holde en
        lypresentasjon på starten av dagen. Her får studentene en god mulighet
        til å bli bedre kjent med bedriftene.
      </p>
      <h5>Stand</h5>
      <p>
        Under karrieredagen vil bedriftene stå på stand, og du som student vil
        få gode muligheter til å bli kjent med bedriftene, høre hvordan det er å
        jobbe for dem og snakke om sommerjobb og faste stillinger.
      </p>
      <h5>Lynintervju</h5>
      <p>
        Bedriftene har fått mulighet til å låne et rom hvor de kan holde
        lynintervjuer av studenter de ønsker å blir bedre kjent med.
      </p>
      <PageTitle>Styret</PageTitle>
      <VolunteerWrapper>
        {volunteers.map(vol => (
          <Card {...vol} />
        ))}
      </VolunteerWrapper>
      <PageTitle>Kontakt oss</PageTitle>
      <p>
        Du kan kontakte oss på vår epostadresse: kontakt (at) echokarriere.no.
      </p>
    </ContentWrapper>
  );
};

export default AboutUs;
