import styled from 'styled-components'
import { darkerblue, bluegray, grayborder, darkblue } from "../../constants/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  min-height: calc(100% - 7rem); // Total banner height
`

export const Footer = styled.div`
  text-align: center;
  color: white;
  background: ${darkblue};
  padding: 1rem 1rem 4rem 1rem;
`