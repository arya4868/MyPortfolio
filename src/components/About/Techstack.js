import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  // DiMongodb,
  DiGit,
DiGithub,
 DiJava,
// DiHtml5,
// DiCss3,
DiAndroid,


  
} from "react-icons/di";
import {
  SiFirebase,
  SiTypescript,
  // SiNextdotjs,
  // SiTailwindcss,
  SiRedux,
  SiMui,
  // SiReacthookform,
  
} from "react-icons/si";
//import Github from "./Github";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>TypeScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <h5>Android</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMui/>
        <h5>Material UI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      
    </Row>
  );
}

export default Techstack;
