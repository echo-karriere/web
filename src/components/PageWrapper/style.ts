import styled from "styled-components";
import Container from "react-bootstrap/Container";
import c from "../../constants/colors";

export const Wrapper = styled(Container)`
  height: 100%;
`;

export const Content = styled.div`
  border-radius: 0.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  max-height: 900px;

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
