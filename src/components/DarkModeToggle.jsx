import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/DarkMode.css";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="drk-mode-toggle">
      <FontAwesomeIcon
        icon={faMoon}
        onClick={toggleDarkMode}
        className={`${darkMode ? "dark-mode hidden" : "light-mode"}`}
      />

      <FontAwesomeIcon
        icon={faSun}
        onClick={toggleDarkMode}
        className={`${darkMode ? "light-mode" : "dark-mode hidden"}`}
      />
    </div>
  );
};

export default DarkModeToggle;
