import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Wrapper,
  BigText,
  InfoText,
  TimeToEventStyle,
  TimeBlockStyle,
  TimeBlockTime
} from "./style";
import config from "../../../../config";
import calcDateDiff, { DaysDateDiff } from "../../../../utils/dateDiff";

interface TimeBlockProps {
  time: number;
  unit: string;
}

function TimeBlock({ time, unit }: TimeBlockProps) {
  return (
    <TimeBlockStyle>
      <TimeBlockTime>{time}</TimeBlockTime>
      {unit}
    </TimeBlockStyle>
  );
}

interface TimeToEventProps {
  timeToEvent: DaysDateDiff;
}

function TimeToEvent({ timeToEvent }: TimeToEventProps) {
  return (
    <TimeToEventStyle>
      <TimeBlock time={timeToEvent.days} unit="Dager" />
      <TimeBlock time={timeToEvent.hours} unit="Timer" />
      <TimeBlock time={timeToEvent.minutes} unit="Minutter" />
      <TimeBlock time={timeToEvent.seconds} unit="Sekunder" />
    </TimeToEventStyle>
  );
}

interface CountdownProps {}

function Countdown(props: CountdownProps) {
  const [timeToEvent, setTimeToEvent] = useState<DaysDateDiff>();

  useEffect(() => {
    setInterval(() => {
      setTimeToEvent(calcDateDiff(config.eventDate));
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Row>
        <Col sm>
          <BigText>echo karriere</BigText>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <InfoText>24. september 2019</InfoText>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <InfoText>Høyteknologisenteret @ UiB</InfoText>
        </Col>
      </Row>
      <Row>
        {timeToEvent && (
          <Col sm>
            <TimeToEvent timeToEvent={timeToEvent} />
          </Col>
        )}
      </Row>
    </Wrapper>
  );
}

export default Countdown;
