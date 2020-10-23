import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="projectCard">
    <h3>{props.title}</h3>
    <img alt={props.name} src={props.image} className="screenshot"/>
  <div className="content">
      <p>{props.description}</p>
      <p>{props.github}</p>
      <p>{props.deployed}</p>
  </div>
  </div>
  );
}

export default Project;
