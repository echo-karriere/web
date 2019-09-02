import React from 'react'
import {Content, Footer, Wrapper} from './style'
import {NavigationMenu} from "./components/NavigationMenu";
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router';

import { routes } from '../../routes';
import { NoMatch } from '../../pages/no-match';

interface PageWrapperProps extends RouteComponentProps {}

function PageWrapper(props: PageWrapperProps) {
  
  return (
    <Wrapper>
      <NavigationMenu/>
      <Content>
        <Switch>
          {
            routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))
          }
          <Route component={NoMatch}/>
        </Switch>
      </Content>
      <Footer>
        echo - Fagutvalget for informatikk
      </Footer>
    </Wrapper>
  )
}

export default withRouter(PageWrapper)