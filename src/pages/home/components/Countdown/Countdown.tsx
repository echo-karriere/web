import React, { useEffect, useState } from 'react'

import {CountdownStyle, BigText, InfoText, TimeToEventStyle, TimeBlockStyle, TimeBlockTime, FadedOverlay} from './style'
import config from '../../../../config';
import calcDateDiff, { DaysDateDiff } from '../../../../utils/dateDiff';

interface TimeBlockProps {
    time: number;
    unit: string;
}

function TimeBlock({time, unit}: TimeBlockProps) {
    return (
        <TimeBlockStyle>
            <TimeBlockTime>{time}</TimeBlockTime>
            {unit}
        </TimeBlockStyle>
    )
}

interface TimeToEventProps {
    timeToEvent: DaysDateDiff
}

function TimeToEvent({timeToEvent}: TimeToEventProps) {
    return (
        <TimeToEventStyle>
            <TimeBlock time={timeToEvent.days} unit="Dager"/>
            <TimeBlock time={timeToEvent.hours} unit="Timer"/>
            <TimeBlock time={timeToEvent.minutes} unit="Minutter"/>
            <TimeBlock time={timeToEvent.seconds} unit="Sekunder"/>
        </TimeToEventStyle>
    )
}

interface CountdownProps {

}

function Countdown(props: CountdownProps) {

    const [timeToEvent, setTimeToEvent] = useState<DaysDateDiff>()

    useEffect(() => {
        setInterval(() => {
            setTimeToEvent(calcDateDiff(config.eventDate))
        }, 1000)
    }, [])

    return (
        <CountdownStyle>
            <FadedOverlay />
            <BigText>echo karriere</BigText>
            <InfoText>
                24. september 2019 <br />
                Høyteknologisenteret @ UiB
            </InfoText>
            { timeToEvent && <TimeToEvent timeToEvent={timeToEvent}/> }
        </CountdownStyle>
    )
}

export default Countdown