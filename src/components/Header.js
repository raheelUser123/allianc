// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import Logo from '../images/main-logo.png'
const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand data-aos="fade-up" href="#home"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" data-aos="fade-up">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/iosdevelopmentpage">
              iOS App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/androiddevelopmentpage">Android App Development</NavDropdown.Item>
              <NavDropdown.Item href="/flutterdevelopmentpage">
              Flutter App Development
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/casestudy">Case Study</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-success" className="ms-2" data-aos="fade-up">Get a Quote</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
