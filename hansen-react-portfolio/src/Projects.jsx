import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import sureVoteLogo from "../src/assets/Sure Vote Logo 2.png";

function Projects() {
  return (
    <div className="App">
      <h1>projects</h1>

      <Row>
        <Col md={2}></Col>

        <Col md={1}></Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <a href="https://young-journey-30565.herokuapp.com/"
            target="_blank"
            >
              <Card.Img variant="top" src={sureVoteLogo} />
            </a>
            <Card.Body>
              <Card.Title>Sure Vote</Card.Title>
              <Card.Text>
                Sure Vote is a responsive full-stack application that utilizes
                facial recognition technology for secure voting. Sure Vote was
                built using the MERN paradigm.
              </Card.Text>
              <Button variant="primary">Live Website</Button>
              <Button variant="primary">Github Repo</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Live Website</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={1}></Col>

        <Col md={2}></Col>
      </Row>

      <br />

      <Row>
        <Col md={2}></Col>

        <Col md={1}></Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={1}></Col>

        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export default Projects;
