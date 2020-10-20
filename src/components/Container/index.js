import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container" style={props.style}>
    <div className="height">
    {props.children}
    </div></div>;
}

export default Container;
