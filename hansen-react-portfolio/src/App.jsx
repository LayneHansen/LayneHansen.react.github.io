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
            id="computer-image"
            shape="poly"
            coords="0,0,315,0,685,725,685,755,680,770,670,780,0,1120"
            href="computer.htm"
            alt="computer"
          />
          <area 
          id="phone-image"
          shape="poly" 
          coords="620,210,850,155,870,160,890,180,1030,715,1013,743,990,770,770,805,760,810,730,775,605,270,615,215" 
          href="phone.htm" 
          alt="phone" />
          <area 
          shape="poly" 
          coords="1055,305,1235,270,1275,865,1100,850" 
          href="glasses.htm" 
          alt="glasses" />
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
