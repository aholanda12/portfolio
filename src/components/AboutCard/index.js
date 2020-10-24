import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function About() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <h1 className="header">About Page</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <img className="headshot" src="https://github.com/aholanda12/responsive-portfolio/blob/master/assets/images/headshot.png?raw=true" alt="Ashley Holanda" />
        </Col>
        <Col size="md-8">
          <p>Ashley Holanda. </p>
          <p>Full Stack Developer. </p>
          <p>My journey in web development began with HTML Neopets pages in 2003. </p>
          <p>Since then, I branched out into a variety of languages and improvements within the last two decades.</p>
          <p>And I only plan to expand from there. </p>
          <p>I am a very hard working and curious individual, always ready to solve a problem and learn something new.</p> 
          <p>When it comes to how far I'm willing to go, the sky's the limit!</p>
  
        </Col>
      </Row>
    </Container >
  );
}

export default About;
