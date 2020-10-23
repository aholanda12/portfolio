import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <div>
        <button type="button" className="variant">{props.children}</button>
    </div>
  );
}

export default CardBtn;
