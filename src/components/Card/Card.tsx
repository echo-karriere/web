import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { VolunteersInterface } from "../../pages/about-us/Volunteers";

const StyledCard = styled(Card)`
  text-align: center;
`;

const StyledCardImage = styled(Card.Img)`
  max-width: 100%;
  margin: 0 auto;
`;

const CardWrapper: React.FC<VolunteersInterface> = ({
  name,
  picture,
  about
}) => {
  return (
    <>
      <StyledCard>
        <StyledCardImage variant="top" src={picture} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default CardWrapper;
