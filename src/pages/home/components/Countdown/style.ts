import styled from "styled-components";
import Container from "react-bootstrap/Container";
import bergenAtNight from "../../../../assets/bergen-at-night.jpg";

export const Wrapper = styled(Container)`
  background-size: cover;
  background-position: center;
  background-image: url(${bergenAtNight});
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BigText = styled.div`
  font-size: 3rem;
`;

export const InfoText = styled.div`
  font-size: 1.5rem;
`;

export const TimeToEventStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  height: 350px;
  width: 300px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 500px;
  }
`;

export const TimeBlockStyle = styled.div`
  height: 150px;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 50%;
`;

export const TimeBlockTime = styled.div`
  font-size: 3rem;
`;
