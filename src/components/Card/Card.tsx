import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { VolunteersInterface as VolunteerInterface } from "../../pages/contact-us/Volunteers";

const StyledCard = styled(Card)`
  text-align: center;
`;

const CardWrapper: React.FC<VolunteerInterface> = ({
  name,
  picture,
  about
}) => {
  return (
    <>
      <StyledCard>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default CardWrapper;
