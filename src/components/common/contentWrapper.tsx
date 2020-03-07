import React from "react";
import styled from "styled-components";

import c from "../../styles/constants";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.main`
  margin: 0 auto;
  width: ${c.size.contentWidth}px;
`;

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;
