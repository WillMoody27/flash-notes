import React, { useState, useEffect } from "react";
import "../css/Main.css";
import Button from "./main-button/Button";
import SideDir from "./side-menu/SideDir";
import TextControls from "./text-controls/TextControls";
import Header from "./header/Header";
import DarkModeToggle from "./DarkModeToggle";

// Content Import From JS
import { centerBtns, notes } from "../js/contentExports";

const Main = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [leftContentWrapper, setLeftContentWrapper] = useState(false);

  const handleLeftContentWrapperClick = () => {
    setLeftContentWrapper(!leftContentWrapper);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // DARK MODE FEATURE
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode setting from local storage when the component mounts
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true"; // Convert the string value to boolean
  });

  // Save dark mode setting to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section className={`main-section ${darkMode ? "dk-md" : "lt-md"}`}>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <SideDir
          leftContentWrapper={leftContentWrapper}
          handleLeftContentWrapperClick={handleLeftContentWrapperClick}
        />
        <div className="right--content__wrapper">
          <Header />
          <div className="right--content__content">
            <div className="subheading--content">
              <h3 className="subheading">Your Notes</h3>
              <TextControls
                setIsEditing={setIsEditing}
                handleEditClick={handleEditClick}
                isEditing={isEditing}
              />
              <div className="text-container">
                <textarea
                  placeholder={
                    isEditing
                      ? "Start Typing Here..."
                      : `Click "Edit Text" to start typing`
                  }
                  className={`main-text-area ${isEditing ? "editing" : ""}`}
                  readOnly={!isEditing}
                ></textarea>
              </div>
            </div>
            {/* Main Button Container */}
            <div className="btn-container">
              {centerBtns.map(({ text, icon }, index) =>
                index < 3 ? (
                  <Button key={index} text={text} icon={icon} />
                ) : null
              )}
            </div>
            {/* Main Button Container */}
            <div className="output">
              <p className="subheading">Output</p>
              <div className="mock-data">
                <textarea
                  className="output-text-area"
                  value={notes.message}
                ></textarea>
              </div>
              <Button text={centerBtns[3].text} icon={centerBtns[3].icon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
