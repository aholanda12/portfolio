import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <div>
        <button type={props.type} className="variant">{props.children}</button>
    </div>
  );
}

export default CardBtn;
