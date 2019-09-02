import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { darkblue } from "../../constants/colors";

export const Wrapper = styled(Container)`
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  min-height: calc(100% - 7rem); // Total banner height

  > div {
    flex: 1;
  }
`;

export const Footer = styled.div`
  text-align: center;
  color: white;
  background: #343a40;
  padding: 2rem;
`;
