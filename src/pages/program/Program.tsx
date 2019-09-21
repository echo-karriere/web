import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import comps from "../info/companies";
import { StandWrapper, StandMap } from "../for-companies/ForCompanies";
import ProgramCard from "./ProgramCard";

interface ProgramProps {}

const CompanyList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

const Company = styled.li`
  margin-right: 48px;
  min-width: 140px;
`;

const Program: React.FC<ProgramProps> = () => {
  const [selected, setSelected] = useState<string | undefined>("presentation");
  const companies = comps
    .filter(c => c.presentationOrder !== -1)
    .sort((c1, c2) => (c1.presentationOrder > c2.presentationOrder ? 1 : -1));

  return (
    <ContentWrapper>
      <PageTitle>Program</PageTitle>
      <Accordion defaultActiveKey={selected}>
        <ProgramCard
          eventKey="presentation"
          title="13:15 - 14:15"
          description="Lynpresentasjoner i store auditorium"
          selected={selected}
          setSelected={setSelected}
        >
          <CompanyList>
            {companies.map(comp => (
              <Company>{comp.name}</Company>
            ))}
          </CompanyList>
        </ProgramCard>
        <ProgramCard
          eventKey="stands"
          title="14:15 - 18:00"
          description="Stands i hovedfoajeen"
          selected={selected}
          setSelected={setSelected}
        >
          <StandWrapper>
            <StandMap src="/misc/standkart-h19.png" alt="Standkart" />
          </StandWrapper>
        </ProgramCard>
      </Accordion>
    </ContentWrapper>
  );
};

export default Program;
