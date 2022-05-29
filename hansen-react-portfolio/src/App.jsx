import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Profile from './Profile'; 
import workDeskImage from '../src/assets/workDeskImage3.jpg'

function App() {
  return (
 <Router>
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
        <div id="background-image">
          <img src={workDeskImage} 
          width="1800"
          usemap="#deskmap"
          alt="Image of work desk with laptop, phone, and glasses." />
        </div>
        <map name="deskmap">
          <area shape="rect" coords="0,0,60,800" href="computer.htm" alt="computer" />
          <area shape="rect" coords="" href="phone.htm" alt="phone" />
          <area shape="rect" coords="" href="glasses.htm" alt="glasses" />
        </map>
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
