import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../main-button/Button.css";

const Button = ({ text, icon }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        console.log(`Text Prompt ${text} This Text: ${text}`);
      }}
    >
      {text} {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
