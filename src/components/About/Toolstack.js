import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  SiVisualstudiocode,
  SiAndroidstudio,
  SiPostman,
  SiIntellijidea,
  
  SiWebpack,
  SiNpm,
  SiBabel,
  //SiVercel,

  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h5>Android Studio</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Visual Studio Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h5>Intellij Idea</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <h5>WebPack</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <h5>NPM</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBabel />
        <h5>Babel</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
