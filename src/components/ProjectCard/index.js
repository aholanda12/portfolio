import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="projectCard">
    <h3>{props.title}</h3>
    <div className="img-container">
    <img alt={props.name} src={props.image} />
  </div>
  <div className="content">
      <p>{props.description}</p>
      <p>{props.github}</p>
      <p>{props.deployed}</p>
  </div>
  </div>
  );
}

export default Project;
