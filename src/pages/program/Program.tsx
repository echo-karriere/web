import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import colors from "../../constants/colors";
import { Link } from "../../components/Link";
import comps from "../info/companies";
import { StandWrapper, StandMap } from "../for-companies/ForCompanies";

interface ProgramProps {}

const Timeplan = styled.div`
  padding: 0.5rem;
  font-size: 1.1rem;
`;

const TimeplanEntry = styled.div`
  padding: 0.5rem;
`;

const Time = styled.div`
  color: ${colors.echoLogoDarkBlue};
`;

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
  const companies = comps
    .filter(c => c.presentationOrder !== -1)
    .sort((c1, c2) => (c1.presentationOrder > c2.presentationOrder ? 1 : -1));

  return (
    <ContentWrapper>
      <PageTitle>Program</PageTitle>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <TimeplanEntry>
              <Time>13:15 - 14:15</Time>
              Lynpresentasjoner i store auditorium
            </TimeplanEntry>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CompanyList>
                {companies.map(comp => (
                  <Company>{comp.name}</Company>
                ))}
              </CompanyList>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <TimeplanEntry>
              <Time>14:15 - 18:00</Time>
              Stands i hovedfoajeen
            </TimeplanEntry>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <StandWrapper>
                <StandMap src="/misc/standkart-h19.png" alt="Standkart" />
              </StandWrapper>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ContentWrapper>
  );
};

export default Program;
