import React from 'react'

import logo from "../../../../assets/logo-white.png"

import {MenuStyle, Img} from "./style";
import NavigationButton from "./NavigationButton";
import { routes } from '../../../../routes';
import { withRouter, RouteComponentProps } from 'react-router';

interface NavigationMenuProps extends RouteComponentProps {

}

function NavigationMenu({history}: NavigationMenuProps) {

  const navigateToHome = () => history.push("/")

  return (
    <MenuStyle>
      <Img src={logo} onClick={navigateToHome}/>
      {
        routes.map((route) => (
          <NavigationButton key={route.path} route={route} />
        ))
      }
    </MenuStyle>
  )
}

export default withRouter(NavigationMenu)