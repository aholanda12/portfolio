import React from "react";
import "./style.css";

function Header(props) {
  return  <div className="sky">
  <div className="clouds"></div>
  <h1 className="title">{props.children}</h1>
  <h2 className="subtitle">Full Stack Developer</h2>
</div>;
}

export default Header;