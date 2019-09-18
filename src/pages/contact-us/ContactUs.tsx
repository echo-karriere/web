import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import { Card } from "../../components/Card";
import { VolunteerWrapper } from "./style";
import volunteers from "./Volunteers";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Kontakt oss</PageTitle>
      <p>
        Du kan kontakte oss på vår epostadresse: kontakt (at) echokarriere.no.
      </p>
      <h5>Arrangører</h5>
      <p>echo karriere arrangeres av 6 frivillige informatikk studenter:</p>
      <VolunteerWrapper>
        {volunteers.map(vol => (
          <Card {...vol} />
        ))}
      </VolunteerWrapper>
    </ContentWrapper>
  );
};

export default ContactUs;
