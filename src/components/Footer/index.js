import React from "react";
import "./style.css";
import { FaRegFilePdf } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import ReactTooltip from "react-tooltip";


function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2020 Ashley Holanda
         <a href="https://drive.google.com/file/d/1UcIDieWJkrHuxgMpEzP7IzFO3G5cFcH2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ficon" >
          <div data-tip data-for="regfileTip" data-place="top" data-background-color="#bad9e8" data-text-color="#27364d">
            <FaRegFilePdf />
          </div>
          <ReactTooltip id="regfileTip" place="top" effect="solid" placement="top">
            Resume
            </ReactTooltip></a>
        <a href="https://www.facebook.com/ashley.holanda" target="_blank" rel="noopener noreferrer" className="ficon">
          <div data-tip data-for="regFacebook" data-place="top" data-background-color="#bad9e8" data-text-color="#27364d">
            <FaFacebook />
          </div>
          <ReactTooltip id="regFacebook" place="top" effect="solid" placement="top">
            Facebook
             </ReactTooltip></a>
        <a href="https://github.com/aholanda12" target="_blank" rel="noopener noreferrer" className="ficon">
          <div data-tip data-for="regGithub" data-place="top" data-background-color="#bad9e8" data-text-color="#27364d">
            <SiGithub />
          </div>
          <ReactTooltip id="regGithub" place="top" effect="solid" placement="top">
            Github
             </ReactTooltip></a>
        <a href="https://www.linkedin.com/in/ashley-holanda-0585671a4/" target="_blank" rel="noopener noreferrer" className="ficon">
          <div data-tip data-for="regLinkedin" data-place="top" data-background-color="#bad9e8" data-text-color="#27364d">
            <SiLinkedin />
          </div>
          <ReactTooltip id="regLinkedin" place="top" effect="solid" placement="top">
            LinkedIn
             </ReactTooltip></a>
        <a href="mailto:aholanda12@gmail.com" className="ficon">
          <div data-tip data-for="regemail" data-place="top" data-background-color="#bad9e8" data-text-color="#27364d">
            <AiOutlineMail />
          </div>
          <ReactTooltip id="regemail" place="top" effect="solid" placement="top">
            Email
             </ReactTooltip></a>
      </span>
    </footer>
  );
}

export default Footer;
