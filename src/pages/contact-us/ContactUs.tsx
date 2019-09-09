import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <ContentWrapper>
      <h1>Kontakt oss</h1>
      <p>
        Du kan kontakte oss på vår epostadresse: kontakt (at) echokarriere.no.
      </p>
    </ContentWrapper>
  );
};

export default ContactUs;
