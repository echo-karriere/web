import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Kontakt oss</PageTitle>
      <p>
        Du kan kontakte oss på vår epostadresse: kontakt (at) echokarriere.no.
      </p>
    </ContentWrapper>
  );
};

export default ContactUs;
