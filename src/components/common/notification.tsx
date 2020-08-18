import React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const NotificationContainer = styled.div`
  height: 56px;
  background-color: ${({ theme }) => theme.brand.color1};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  margin: revert;
`;

const Notification: React.FC<Props> = ({ message }) => {
  return (
    <NotificationContainer>
      <Wrapper>
        <Message>{message}</Message>
      </Wrapper>
    </NotificationContainer>
  );
};

export default Notification;
