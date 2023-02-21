import React from "react";
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">VS Studios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><icon className="fas fa-shopping-cart"></icon>Cart</Nav.Link>
              <Nav.Link href="/login"><icon className="fas fa-user"></icon>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
