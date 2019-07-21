import React from 'react'
import {ButtonStyle} from "./style";
import {NavigationRoute} from "./NavigationMenu";

interface NavigationButtonProps {
  route: NavigationRoute
}

const NavigationButton: React.FC<NavigationButtonProps> = ({route}) => {

  return (
    <ButtonStyle>
      <a href={route.path}>{route.text}</a>
    </ButtonStyle>
  )
}

export default NavigationButton