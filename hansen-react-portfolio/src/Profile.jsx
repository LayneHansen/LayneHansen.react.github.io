import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../src/assets/LayneHorBW.jpg";

function Profile() {
  return (
    <Container>
      <div className="App">
        <h1>profile</h1>
      </div>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div>
          <img src={profileImage} 
          width="800px" />
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>

    </Container>
  );
}

export default Profile;
