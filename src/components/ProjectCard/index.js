import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Project(props) {
  return (
    <div className="projectCard">
      <h3>{props.title}</h3>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        <div className="overlay">
          <p className="description">{props.description}</p>
        </div>
      </div>
      <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="projectbtn"><CardBtn>Visit</CardBtn></a>
      <a href={props.github} target="_blank" rel="noopener noreferrer" className="projectbtn"><CardBtn>Github</CardBtn></a>
    </div>
  );
}

export default Project;
