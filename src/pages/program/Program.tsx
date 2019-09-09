import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";

interface ProgramProps {}

const Program: React.FC<ProgramProps> = () => {
  return (
    <ContentWrapper>
      <h1>Program</h1>
      <h2>13:15 - 14:15</h2>
      <p>Lynpresentasjoner i store auditorium</p>
      <h2>14:14 - 18:00</h2>
      <p>Stands i hovedfoajeen (oversikt kommer)</p>
    </ContentWrapper>
  );
};

export default Program;
