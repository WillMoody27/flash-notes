import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../main-button/Button.css";

const Button = ({ textInput, setPrompt, text, icon, handleSubmit }) => {
  const prompt = `Please ${text} the following lecture notes with headings and bullet points:\n\n${textInput}`;

  return (
    <button
      className="btn"
      onClick={() => {
        console.log(`${text} This Text: ${textInput}`);
        // handleSubmit(`${textInput}`);
        setPrompt(prompt);
        console.log("Prompt:", prompt);
        // handleSubmit();
      }}
    >
      {text} {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
