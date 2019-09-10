import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";

interface NoMatchProps {}

const NoMatch: React.FC<NoMatchProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Fant ikke siden du lette etter :-(</PageTitle>
    </ContentWrapper>
  );
};

export default NoMatch;
