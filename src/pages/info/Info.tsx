import React from "react";
import shuffle from "lodash/shuffle";
import comps from "./companies";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Company, CompanyWrapper, CompanyImage } from "./style";
import { PageTitle } from "../../components/PageWrapper/style";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  let companies = shuffle(comps);
  const companyList = companies.map(c => (
    <Company key={c.name}>
      {c.logo ? <CompanyImage src={c.logo} alt={c.name} /> : <h3>{c.name}</h3>}
    </Company>
  ));
  return (
    <ContentWrapper>
      <PageTitle>Bedrifter høst 2019</PageTitle>
      <CompanyWrapper>{companyList}</CompanyWrapper>
    </ContentWrapper>
  );
};

export default Info;
