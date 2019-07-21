import React from 'react'
import {MenuStyle, Img} from "./style";
import NavigationButton from "./NavigationButton";
import logo from "../../../../assets/logo-white.png"

interface NavigationMenuProps {

}

export interface NavigationRoute {
  text: string
  path: string
}

const routes: NavigationRoute[] = [
  {
    text: 'Hjem',
    path: '/home',
  },
  {
    text: 'Info',
    path: '/info',
  },
  {
    text: 'Program',
    path: '/program',
  },
  {
    text: 'For bedrifter',
    path: '/for-companies',
  },
  {
    text: 'Kontakt oss',
    path: '/contact-us',
  },
]

function NavigationMenu(props: NavigationMenuProps) {
  return (
    <MenuStyle>
      <Img src={logo} />
      {
        routes.map((route, i) => (
          <NavigationButton key={i} route={route} />
        ))
      }
    </MenuStyle>
  )
}

export default NavigationMenu