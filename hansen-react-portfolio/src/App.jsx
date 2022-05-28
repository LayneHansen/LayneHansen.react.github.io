import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Profile from './Profile'; 

function App() {
  return (
 <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact Me</Link>
      </nav> */}
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ldh</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/projects">Projects</Nav.Link>
          <Nav.Link to="/profile">Profile</Nav.Link>
          <Nav.Link to="/contact">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/profile" element={< Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
