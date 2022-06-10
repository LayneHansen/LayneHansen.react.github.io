import React from 'react';
import { Navbar, Container, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer, Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Layne Hansen</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Pages">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact Me</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;