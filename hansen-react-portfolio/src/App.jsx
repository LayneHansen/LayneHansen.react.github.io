import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopNav from "../src/components/TopNav";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Profile from "./Profile";
import workDeskImage from "../src/assets/workDeskImage4.jpg";

function App() {
  return (
    <Router>
      <TopNav />
      <Container>
        <div id="background-image">
          <img
            src={workDeskImage}
            width="1730"
            usemap="#deskmap"
            alt="Work desk with laptop, phone, and glasses."
          />
        </div>
        <map name="deskmap">
          <area
            shape="poly"
            coords="0,0,60,300"
            href="computer.htm"
            alt="computer"
          />
          <area shape="rect" coords="" href="phone.htm" alt="phone" />
          <area shape="rect" coords="" href="glasses.htm" alt="glasses" />
        </map>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
