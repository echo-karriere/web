import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import colors from "../../constants/colors";
import { Link } from "../../components/Link";

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

const Program: React.FC<ProgramProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Program</PageTitle>
      <Timeplan>
        <TimeplanEntry>
          <Time>13:15 - 14:15</Time>
          Lynpresentasjoner i store auditorium
        </TimeplanEntry>
        <TimeplanEntry>
          <Time>14:15 - 18:00</Time>
          Stands i hovedfoajeen (
          <Link href="/for-companies">klikk her for oversikt</Link>)
        </TimeplanEntry>
      </Timeplan>
    </ContentWrapper>
  );
};

export default Program;
