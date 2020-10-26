import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";
// import printer from "../../assets/images/printer.gif"
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi'


function Contact() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <h1 className="header">Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <form id="ajax-contact" method="post" action="mailer.php">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
        </form>
        </Col>
        <Col size="md-3">
          <p className="cicon"><FiPhoneCall size={40} style= {{ fill: '#27364d', marginRight: 20}}/>908-334-3985</p>
          <p className="cicon"><a href="mailto:aholanda12@gmail.com"><AiOutlineMail size={40} style= {{ fill: '#27364d', marginRight: 20}}/>aholanda12@gmail.com</a></p>
          <p className="cicon"><a href="https://www.linkedin.com/in/ashley-holanda-0585671a4/"><SiLinkedin size={40} style= {{ fill: '#27364d', marginRight: 20}}/>LinkedIn</a></p>
          <p className="cicon"><a href="https://github.com/aholanda12"><SiGithub size={40} style= {{ fill: '#27364d', marginRight: 20}}/>Github: aholanda12</a></p>
          <p className="cicon"><a href="https://www.facebook.com/ashley.holanda"><FaFacebook size={40} style= {{ fill: '#27364d', marginRight: 20}}/>Facebook</a></p>
        </Col>
        <Col size="md-2">
          <img className="printer" src="/assets/images/printer.gif" alt="Resume Printer" />
        </Col>
      </Row>
    </Container >
  );
}

export default Contact;
