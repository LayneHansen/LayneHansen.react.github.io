import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer, Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Layne Hansen</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;