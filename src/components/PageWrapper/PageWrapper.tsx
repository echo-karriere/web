import React from "react";
import { Content, Footer, Wrapper } from "./style";
import { withRouter, RouteComponentProps, Switch, Route } from "react-router";

import { routes } from "../../routes";
import { NoMatch } from "../../pages/no-match";
import { NavBar } from "./components/Navbar";
import { BackgroundParticles } from "./components/Particles";

interface PageWrapperProps extends RouteComponentProps {}

function PageWrapper(props: PageWrapperProps) {
  return (
    <>
      <BackgroundParticles />
      <Wrapper>
        <NavBar />
        <Content>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Content>
        <Footer>echo - Fagutvalget for informatikk</Footer>
      </Wrapper>
    </>
  );
}

export default withRouter(PageWrapper);
