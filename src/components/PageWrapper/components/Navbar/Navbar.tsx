import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { routes } from "../../../../routes";

import logo from "../../../../assets/logo-white.png";

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={Link} href="/" to="/">
          <img
            src={logo}
            width="180"
            className="d-inline-block align-top"
            alt="echo karriere logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {routes.map(nav => (
              <Nav.Link as={Link} href={nav.path} to={nav.path}>
                {nav.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
