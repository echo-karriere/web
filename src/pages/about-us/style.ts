import styled from "styled-components";

export const VolunteerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
