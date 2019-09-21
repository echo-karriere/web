import React, { ReactNode } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import colors from "../../constants/colors";

const TimeplanEntry = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Time = styled.div`
  color: ${colors.echoLogoDarkBlue};
`;

const StyledIcon = styled(Icon)`
  float: right;
  align-self: center;
`;

interface ProgramCardInterface {
  eventKey: string;
  title: string;
  description: string;
  selected: string | undefined;
  setSelected(name: string | undefined): void;
  children: ReactNode;
}

const ProgramCard: React.FC<ProgramCardInterface> = ({
  eventKey,
  title,
  description,
  selected,
  setSelected,
  children
}) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={eventKey}
        onClick={() => {
          selected === eventKey
            ? setSelected(undefined)
            : setSelected(eventKey);
        }}
      >
        <TimeplanEntry>
          <div>
            <Time>{title}</Time>
            <span>{description}</span>
          </div>
          <StyledIcon
            path={selected === eventKey ? mdiChevronDown : mdiChevronRight}
            size="2rem"
          />
        </TimeplanEntry>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ProgramCard;
