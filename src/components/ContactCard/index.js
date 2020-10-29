import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";
import CardBtn from "../CardBtn";
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi'
import ReactTooltip from "react-tooltip";
import printerPic from "../../assets/images/printer.gif"


function Contact() {
  return (
    <Container>
      <div className="contact-container">
        <Row>
          <Col size="md-6">
            <form id="ajax-contact" method="post" action="mailto:aholanda12@gmail.com" enctype="text/plain">
              <p><label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input></p>
              <p><label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input></p>
              <p><label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea></p>
              <CardBtn type="submit">Submit</CardBtn>
            </form>
          </Col>
          <Col size="md-3">
            <p className="cicon"><FiPhoneCall size={40} style={{ fill: '#27364d', marginRight: 20 }} />908-334-3985</p>
            <p className="cicon"><a href="mailto:aholanda12@gmail.com"><AiOutlineMail size={40} style={{ fill: '#27364d', marginRight: 20 }} />aholanda12@gmail.com</a></p>
            <p className="cicon"><a href="https://www.linkedin.com/in/ashley-holanda-0585671a4/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={40} style={{ fill: '#27364d', marginRight: 20 }} />LinkedIn</a></p>
            <p className="cicon"><a href="https://github.com/aholanda12" target="_blank" rel="noopener noreferrer"><SiGithub size={40} style={{ fill: '#27364d', marginRight: 20 }} />Github: aholanda12</a></p>
            <p className="cicon"><a href="https://www.facebook.com/ashley.holanda" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} style={{ fill: '#27364d', marginRight: 20 }} />Facebook</a></p>
          </Col>
          <Col size="md-2">
            <a href="https://drive.google.com/file/d/1VbnpVXiUPgEj7J-PVq9O7FMyodMDoAdH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="printer-container">
              <img className="printer" src={printerPic} alt="Resume Printer" data-tip data-for="printerTip" data-place="bottom" data-background-color="#27364d" />
            </div>
            <ReactTooltip id="printerTip" place="top" effect="solid" placement="top">
              Resume View
            </ReactTooltip>
            </a>
          </Col>
        </Row>
      </div>
    </Container >
  );
}

export default Contact;
