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
          <h1>About Page</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <img class="headshot" src="https://github.com/aholanda12/responsive-portfolio/blob/master/assets/images/headshot.png?raw=true" alt="Ashley Holanda"/>
        </Col>
        <Col size="md-8">
          <p>Hello and welcome to my webpage! My name is Ashley Holanda and I am currently an accounts payable coordinator aspiring to be a web developer. My journey in web design began when I was in the 3rd grade, creating HTML web pages for my Neopets. I continued to learn the basics through customizing my social media pages and through rudimentary courses in high school and college. Now I am ready to delve into deeper depths by taking the Rutgers Coding Boot Camp.</p>
          <p>When it comes to the concept of "left brain" and "right brain", I have been told that I am equally both. My best subjects in school were math and science, however, my passions lie in the arts with hobbies like drawing and writing. My desire is to combine the logical and the aesthetic through coding and hopefully you will see as much in this and all other pages I create.</p>
        </Col>
      </Row>
    </Container >
  );
}

export default About;
