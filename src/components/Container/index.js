import React from "react";
import "./style.css";

function Container(props) {
  return <div className="nightsky"><div className="container" style={props.style}>
    {props.children}
    </div></div>;
}

export default Container;
