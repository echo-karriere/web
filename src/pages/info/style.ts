import styled from "styled-components";

export const CompanyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
`;

export const Company = styled.div`
  margin: 1.25rem;
  max-width: 8rem;
  min-width: 8rem;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CompanyImage = styled.img`
  width: 8rem;
  height: 5rem;
  object-fit: contain;
`;
