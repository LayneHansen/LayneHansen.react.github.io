import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../src/assets/LayneColor.jpg";
import './Profile.css';

function Profile() {
  return (
    <Container>
        <h1>profile</h1>
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
            <h1 id="name-header">Layne D. Hansen</h1>
            <p class="profile-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Architecto ea aperiam modi eum repellat voluptatem quasi, 
              sed minus repellendus voluptas maxime minima commodi laborum 
              rerum omnis illo aspernatur totam? Dignissimos.
            </p>
            <p class="profile-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Architecto ea aperiam modi eum repellat voluptatem quasi, 
              sed minus repellendus voluptas maxime minima commodi laborum 
              rerum omnis illo aspernatur totam? Dignissimos.
            </p>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>

    </Container>
  );
}

export default Profile;
