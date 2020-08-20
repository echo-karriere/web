import styled from "styled-components";
import { math } from "polished";

export const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.xl};
  padding: 0 ${({ theme }) => theme.size.spacing};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    max-width: ${({ theme }) => theme.size.sm};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: ${({ theme }) => theme.size.md};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    max-width: ${({ theme }) => theme.size.lg};
  }
`;

export const WideContainer = styled(Container)`
  @media screen and (min-width: ${({ theme }) => theme.screen.xl}) {
    max-width: ${({ theme }) => theme.size.xl};
  }
`;

export const Section = styled.section`
  overflow: hidden;
  padding: ${({ theme }) => math(`${theme.size.spacing} * 5`)} 0;

  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    padding: ${({ theme }) => math(`${theme.size.spacing} * 4`)} 0;
  }
`;
