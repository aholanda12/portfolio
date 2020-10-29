import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";
import headshotPic from "../../assets/images/headshot.png"

function About() {
  return (
    <Container>
      <Row>
      <Col size="md-4">
          <img className="headshot" src={headshotPic} alt="Ashley Holanda" />
        </Col>
        {/* <Col size="md-3">
          <h1 className="header">About Page</h1>
        </Col> */}
        <Col size="md-8">
          <div className="content">
          <p>Ashley Holanda. </p>
          <p>Full Stack Developer. </p>
          <p>My journey in web development began with HTML Neopets pages in 2003. </p>
          <p>Since then, I branched out into a variety of languages within the last two decades.</p>
          <p>And I only plan to expand from there! </p>
          <p>I am a hard working individual, always ready to solve a problem and learn something new.</p> 
          <p>When it comes to how far I'm willing to go, the sky's the limit!</p>
          </div>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container >
  );
}

export default About;
