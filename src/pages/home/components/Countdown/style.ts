import styled from "styled-components";
import bergenAtNight from '../../../../assets/bergen-at-night.jpg'
import { darkblue } from "../../../../constants/colors";

export const CountdownStyle = styled.div`
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(${ bergenAtNight});
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FadedOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(33, 37, 44, .6);
    z-index: 2;
`

export const BigText = styled.div`
    font-size: 3rem;
    text-align: center;
    z-index: 3;
`

export const InfoText = styled.div`
    font-size: 1.5rem;
    text-align: center;
    z-index: 3;
`

export const TimeToEventStyle = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;

    background: linear-gradient(to right, transparent 0%, ${darkblue} 25%, ${darkblue} 75%, transparent 100%);
    border-radius: 2.5rem;
    box-shadow: 0 0 2rem 0px #21252c;
    width: 75%;
    z-index: 3;
`

export const TimeBlockStyle = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const TimeBlockTime = styled.div`
    font-size: 3rem;
    z-index: 3;
`