import React from "react";
import shuffle from "lodash/shuffle";
import comps from "./companies";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Company, CompanyWrapper, Thanks, CompanyImage } from "./style";

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
      <Thanks>Her er bedriftene som kommer:</Thanks>
      <CompanyWrapper>{companyList}</CompanyWrapper>
    </ContentWrapper>
  );
};

export default Info;
