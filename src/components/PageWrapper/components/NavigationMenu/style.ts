import styled from "styled-components";
import { darkblue, darkerblue, lightblue } from "../../../../constants/colors";

export const MenuStyle = styled.div`
  align-self: center;
  display: flex;
  padding: 1rem;
`
export const Img = styled.img`
  height: 4rem;
  margin: .5rem 5rem .5rem 0;
`

export const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.15rem;
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
  }
`