import React from "react";
import { Container } from "react-bootstrap";
// import { useState } from "react";
import workDeskImage from "../src/assets/workDeskImage4.jpg";

function Home() {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <Container>
      <div className="background-image">
        <img
          src={workDeskImage}
          width="1730"
          usemap="#deskmap"
          alt="Work desk with laptop, phone, and glasses."
        />
      </div>
      <map name="deskmap">
        <div id="computer-area">
          <area
            id="computer-image"
            shape="poly"
            coords="0,0,315,0,685,725,685,755,680,770,670,780,0,1120"
            href="/projects"
            alt="computer"
            data-hover="projects"
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
        </div>
        {/* {isHovering && <h2>Hello world</h2>} */}
        <div id="phone-area">
          <area
            id="phone-image"
            shape="poly"
            coords="620,210,850,155,870,160,890,180,1030,715,1013,743,990,770,770,805,760,810,730,775,605,270,615,215"
            href="/contact"
            alt="phone"
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
        </div>
        <div id="glasses-area">
          <area
            id="glasses-image"
            shape="poly"
            coords="1055,305,1235,270,1275,865,1100,850"
            href="/profile"
            alt="glasses"
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
        </div>
        <div id="text-area">
          <area
            shape="rect"
            coords="600,25,850,100"
            href="text.htm"
            alt="text"
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
        </div>
      </map>
      <h1 id="project-text">Projects</h1>
      <h1 id="contact-text">Contact Me</h1>
      <h1 id="profile-text">Profile</h1>
    </Container>
  );
}

export default Home;
