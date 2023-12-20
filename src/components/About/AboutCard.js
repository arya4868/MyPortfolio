import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Sourav Arya</span> from Jamui, Bihar, India. I am a computer science graduate and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Travelling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Creating social media content
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing guitor
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Following Trend
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
