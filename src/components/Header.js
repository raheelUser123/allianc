// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '../images/main-logo.png'
const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="Casestudy">Case Study</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-success" className="ms-2">Get a Quote</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
