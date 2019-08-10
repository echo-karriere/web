import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';

import {ButtonStyle} from "./style";
import { NavigationRoute } from '../../../../routes';

interface NavigationButtonProps extends RouteComponentProps {
  route: NavigationRoute
}

const NavigationButton: React.FC<NavigationButtonProps> = ({route, history}) => {

  const navBtnClick = () => history.push(route.path)

  return (
    <ButtonStyle onClick={navBtnClick}>
      {route.text}
    </ButtonStyle>
  )
}

export default withRouter(NavigationButton)