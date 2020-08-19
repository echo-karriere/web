import React from "react";
import styled from "styled-components";
import { math } from "polished";
import { StyledLink } from "../landing/hero";

interface Props {
  message: string;
  url: string;
}

const NotificationContainer = styled.div`
  min-height: 56px;
  background-color: ${({ theme }) => theme.brand.color1};
  padding: 0 ${({ theme }) => theme.size.spacing};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  margin: revert;
  margin-top: ${({ theme }) => math(`${theme.size.spacing} / 2`)};
`;

const Notification: React.FC<Props> = ({ message, url }) => {
  return (
    <NotificationContainer>
      <Wrapper>
        <Message>
          <StyledLink to={url}>{message} ➔</StyledLink>
        </Message>
      </Wrapper>
    </NotificationContainer>
  );
};

export default Notification;
