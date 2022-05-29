import { Navbar, Nav, Container } from "react-bootstrap";
import './TopNav.css';

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Layne Hansen</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/projects">Projects</Nav.Link>
          <Nav.Link to="/profile">Profile</Nav.Link>
          <Nav.Link to="/contact">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;