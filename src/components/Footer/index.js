import React from "react";
import "./style.css";
import { FaRegFilePdf } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2020 Ashley Holanda
         <a href="/" className="icon"><FaRegFilePdf /></a>
         <a href="https://www.linkedin.com/in/ashley-holanda-0585671a4/" className="icon"><SiLinkedin /></a>
         <a href="https://github.com/aholanda12" className="icon"><SiGithub /></a>
         <a href="https://www.facebook.com/ashley.holanda" className="icon"><FaFacebook /></a>
         <a href="mailto:aholanda12@gmail.com" className="icon"><AiOutlineMail /></a>
        </span>
    </footer>
  );
}

export default Footer;
