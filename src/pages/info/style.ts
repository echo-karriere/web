import styled from "styled-components";

export const CompanyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
`;

export const Company = styled.div`
  margin: 20px;
  max-width: 128px;
  min-width: 128px;
  min-height: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Thanks = styled.h2`
  font-size: 22px;
`;

export const CompanyImage = styled.img`
  width: 128px;
  height: 80px;
`;
