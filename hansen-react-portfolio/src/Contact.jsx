import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import "./Contact.css";

import roundLILogo from "./assets/linkedinlogo.png";
import roundGHLogo from "./assets/githubwoodlogo.png";
import roundFBLogo from "./assets/facebooklogo.png";
import roundRSLogo from "./assets/resumelogo.png";

const renderTooltipLI = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    LinkedIn Profile
  </Tooltip>
);

const renderTooltipGH = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Github Profile
  </Tooltip>
);

const renderTooltipFB = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Facebook Dev Page
  </Tooltip>
);

const renderTooltipRS = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Resume
  </Tooltip>
);

function Contact() {
  return (
    <div className="App">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div id="contact-me-header-div">
            <h1 id="contact-me-header">Contact Me</h1>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div id="contact-container">
            <div>
              <h3 id="contact-name">Layne D. Hansen</h3>
            </div>
            <a href="mailto:laynehansen_dev@gmail.com">
            <div>
              <span class="contact-item">laynehansen_dev@gmail.com</span>
            </div>
            </a>
            <a href="mailto:layne.d.hansen@gmail.com">
            <div>
              <span class="contact-item">layne.d.hansen@gmail.com</span>
            </div>
            </a>
            <div>
              <span class="contact-item">(208) 757-1988</span>
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipLI}
            >
              <a
                href="https://www.linkedin.com/in/layne-hansen-620347103/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={roundLILogo}
                  width="140px"
                  alt="Clickable Logo that directs user to Layne's LinkedIn profile."
                  id="linkedin-logo"
                />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipGH}
            >
              <a
                href="https://github.com/LayneHansen"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={roundGHLogo}
                  width="190px"
                  alt="Clickable Logo that directs user to Layne's Github profile."
                  id="github-logo"
                />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipFB}
            >
              <a
                href="https://www.facebook.com/LayneHansenDev/?modal=admin_todo_tour"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={roundFBLogo}
                  width="190px"
                  alt="Clickable Logo that directs user to Layne's Facebook web developer page."
                  id="facebook-logo"
                />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipRS}
            >
              <a
                href="https://docs.google.com/document/d/1-wzPVRDTyK-xSYD-0B6uI9sNUzTjO7hPpH1mdn2LgS8/edit" 
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={roundRSLogo}
                  width="150px"
                  alt="Clickable Logo that downloads user to Layne's resume."
                  id="resume-logo"
                />
              </a>
            </OverlayTrigger>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default Contact;
