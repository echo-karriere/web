import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";

interface NoMatchProps {}

const NoMatch: React.FC<NoMatchProps> = () => {
  return <ContentWrapper>Fant ikke siden du lette etter :-(</ContentWrapper>;
};

export default NoMatch;
