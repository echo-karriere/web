import styled from "styled-components";
import { math } from "polished";

export const Container = styled.div`
  max-width: ${props => props.theme.size.xl};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${props => props.theme.size.spacing};

  @media screen and (min-width: ${props => props.theme.screen.sm}) {
    max-width: ${props => props.theme.size.sm};
  }

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    max-width: ${props => props.theme.size.md};
  }

  @media screen and (min-width: ${props => props.theme.screen.lg}) {
    max-width: ${props => props.theme.size.lg};
  }

  @media screen and (min-width: ${props => props.theme.screen.xl}) {
    max-width: ${props => props.theme.size.xl};
  }
`;

export const Section = styled.section`
  padding: ${props => math(`${props.theme.size.spacing} * 5`)} 0;
  overflow: hidden;

  @media screen and (max-width: ${props => props.theme.screen.md}) {
    padding: ${props => math(`${props.theme.size.spacing} * 4`)} 0;
  }
`;
