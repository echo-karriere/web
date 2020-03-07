import React from "react";
import styled from "styled-components";

import c from "../../styles/constants";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: ${c.size.contentWidth}px;
  padding: 0 ${c.size.spacingUnit / 2}px;
`;

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;
