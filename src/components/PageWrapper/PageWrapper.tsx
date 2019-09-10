import React from "react";
import { Content, Footer, Wrapper } from "./style";
import { withRouter, RouteComponentProps, Switch, Route } from "react-router";

import { routes } from "../../routes";
import { NoMatch } from "../../pages/no-match";
import { NavBar } from "../Navbar";
import { Link } from "../Link";

interface PageWrapperProps extends RouteComponentProps {}

function PageWrapper(props: PageWrapperProps) {
  return (
    <>
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
        <Footer>
          <Link
            isWhite={true}
            underlineOnHover={true}
            href="https://echo.uib.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            echo - Fagutvalget for informatikk
          </Link>
        </Footer>
      </Wrapper>
    </>
  );
}

export default withRouter(PageWrapper);
