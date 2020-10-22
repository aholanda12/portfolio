import React from "react";
import "./style.css";

function Container(props) {
  return <div className="nightsky">
    <div class="stars">
<div class="twinkling">
<div class="nightclouds">
    <div className="container" style={props.style}>
    {props.children}
    </div></div></div></div></div>;
}

export default Container;
