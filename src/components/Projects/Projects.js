import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import TourAndTravels from "../../Assets/Projects/TourAndTravels.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import CreditManagementApp from "../../Assets/Projects/CreditManagementApp.png";
import RestaurentBillingApp from "../../Assets/Projects/RestaurentBillingApp.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={CreditManagementApp}
              title="CreditManagement"
              description="This is a CreditManagment application where user can see get the credit amount, use it and also see the updated amount. It is built on React.js + MUI by following Atomic design pattern in Typescript."
              ghLink="https://github.com/arya4868/Credit-Management-Application"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode. click demo to view more."
              ghLink=""
              demoLink="https://arya4868.github.io/MyPortfolio/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TourAndTravels}
              title="TourAndTravels"
              description="This a tour and travels website , that provides user to access large inventory of Hotels,Rooms,Rental cars, Flight tickets, Tour and packages, etc. Click demo to view more"
              //ghLink="https://github.com/arya4868/Tour-and-Travel-website"
              demoLink= "https://arya4868.github.io/Tour-and-Travel-website/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={RestaurentBillingApp}
              title="Restaurant Billing Website"
              description="This is a bill generating website that takes order from menus from each table and then generate bill according to the order given . It also update the bill amount in case of deleting and adding the order later. Click demo to view more. "
              //ghLink="https://github.com/arya4868/RestaurentBillingWebsite"
              demoLink="https://arya4868.github.io/RestaurentBillingWebsite/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
