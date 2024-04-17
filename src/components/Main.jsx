import React, { useState, useEffect } from "react";
import "../css/Main.css";
import Button from "./main-button/Button";
import SideDir from "./side-menu/SideDir";
import TextControls from "./text-controls/TextControls";
import Header from "./header/Header";
import DarkModeToggle from "./DarkModeToggle";
import DOMPurify from "dompurify"; // Import DOMPurify - to sanitize HTML content

// Content Import From JS
import { centerBtns, notes } from "../js/contentExports";

const Main = () => {
  // Halting Problem and Rice's Theorem Types of Turing Machines, and TM components - different kinds, you know Universal Turing Machine. For CFG, you got derivations, and parse trees, with properties too... Oh, Regular Languages? Check the Regular Expressions; they fit in Finite Automata. DFA & NFA's in Automata Theory. Let’s not forget about Time and Space Complexity for Complexity Theory, P vs NP, NP-Completeness & Approximation Algorithms... Recursive and Recursively Enumerable Languages in Computability Theory. Reduction Techniques! Then there's the Intro part, don't overlook the Definition of Theory of Computation and its importance in Computer Science & Historical Background. Also, CFGs? Chomsky Hierarchy defines it!

  let api = process.env.REACT_APP_API_KEY;

  const [isEditing, setIsEditing] = useState(false);
  const [leftContentWrapper, setLeftContentWrapper] = useState(false);
  const [organizedNotes, setOrganizedNotes] = useState("");
  const [textInput, setTextInput] = useState("");
  const [prompt, setPrompt] = useState("");

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

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value); // Update text input state
  };

  const handleAutoResize = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to allow shrinkage
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scroll height
  };

  const handleSubmit = async () => {
    const url = "https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": api,
        "X-RapidAPI-Host": "chatgpt-best-price.p.rapidapi.com",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 150,
      }),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // setOutputResponse(result.choices[0].message.content);
      if (result.choices[0] && result.choices[0].message.content) {
        const sanitizedOutput = DOMPurify.sanitize(
          result.choices[0].message.content
        );
        console.log(api);

        setOrganizedNotes(sanitizedOutput);
        console.log("Organized Notes:", sanitizedOutput);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
                  value={textInput} // Bind textarea value to state
                  onChange={(e) => {
                    console.log("Text Input:", textInput);
                    handleAutoResize(e);
                    handleTextInputChange(e);
                  }} // Add event handler for input change
                  placeholder={
                    isEditing
                      ? "Start Typing Here..."
                      : 'Click "Edit Text" to start typing'
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
                  <Button
                    key={index}
                    textInput={textInput}
                    setPrompt={setPrompt}
                    text={text}
                    icon={icon}
                    handleSubmit={handleSubmit}
                  />
                ) : null
              )}
            </div>
            {/* Main Button Container */}
            <div className="output">
              <p className="subheading">Output</p>
              <div className="mock-data">
                <textarea
                  className="output-text-area"
                  value={organizedNotes}
                  onChange={(e) => handleAutoResize(e)}
                  // value={`
                  // **1. Introduction to Theory of Computation**

                  // - Definition of Theory of Computation
                  // - Importance in Computer Science
                  // - Historical Background

                  // **2. Turing Machines**

                  // - Types of Turing Machines
                  // - TM components
                  // - Universal Turing Machine

                  // **3. Context-Free Grammars**

                  // - Derivations and parse trees
                  // - Properties
                  // - Chomsky Hierarchy

                  // **4. Regular Languages**

                  // - Regular Expressions
                  // - Finite Automata
                  // - DFA & NFA`}
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
