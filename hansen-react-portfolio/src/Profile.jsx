import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../src/assets/LayneColor.jpg";
import './Profile.css';

import htmlLogo from './assets/htmllogo.png';
import cssLogo from './assets/csslogo.png';
import jsLogo from './assets/jslogo.png';
import reactLogo from './assets/reactlogo.png';

function Profile() {
  return (
    <Container>
        {/* <h1>profile</h1> */}
      <Row className="row1-container">
        <Col md={1}></Col>
        <Col md={9} id="image-container">
          <Row>
            <Col>  
          <div>
          <img id="profile-image"
          src={profileImage} 
          width="450px" 
          alt="Layne Hansen portrait"
          />
          </div>
            </Col>
            <Col>
            <span id="name-header">Layne D. Hansen</span>
            <p class="profile-text">
              I am a full-stack developer who loves to bring eye-catching
              design and smooth functionality to the user's experience. I have 
              training in several technologies. On the front end I am most 
              proficient in HTML, CSS, Bootstrap, Javascript, and React. For 
              back end development I am most proficient in Node.js, Express.js, 
              and MongoDB. I prefer the MERN stack for full-stack applications. 
            </p>
            <p class="profile-text">
              My education lies mostly in social science, i.e., political
              science. I have received doctoral level training in quantitative
              and qualitative research, academic writing and editing, data 
              creation, manipulation, and analysis. Additionally, I hold 
              professional certificates in technical writing and full-stack 
              web development.
            </p>
            <p class="profile-text">
              My passions are my
              family, web development, movies and TV, reading and writing, 
              and history and politics. I am a United States Army veteran. 
              In design and other issues, I believe that the simplest, most 
              straightforward solution is the best.
            </p>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
      
      <Row className="row2-container">
      <Col md={1}></Col>
        <Col md={9} id="image-container">
            <img src={htmlLogo} width="50px"></img>
            <img src={cssLogo} width="78px"></img>
            <img src={jsLogo} width="50px"></img>
            <img src={reactLogo} width="75px"></img>
        </Col>
        <Col md={2}></Col>

      </Row>

    </Container>
  );
}

export default Profile;
