import styled from "styled-components";
import Container from "react-bootstrap/Container";
import c from "../../constants/colors";

export const Wrapper = styled(Container)`
  height: 100%;
`;

export const Content = styled.div`
  border-radius: 20px;
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
  background: ${c.bootstrapGray};
  padding: 2rem;
`;
