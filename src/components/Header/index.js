import React from "react";
import "./style.css";

function Header(props) {
  return  <div class="sky">
  <div class="clouds"></div>
  <h1 className="title">{props.children}</h1>
</div>;
}

export default Header;