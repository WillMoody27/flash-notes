import React, { useState, useEffect } from "react";
import "../css/Main.css";
import Button from "./main-button/Button";
import SideDir from "./side-menu/SideDir";
import TextControls from "./text-controls/TextControls";
import Header from "./header/Header";
import DarkModeToggle from "./DarkModeToggle";
import DOMPurify from "dompurify"; // Import DOMPurify - to sanitize HTML content
// import { exportAsPDF } from "../export-content/text-export";
import jsPDF from "jspdf";

// Content Import From JS
import { centerBtns } from "../js/contentExports";

const Main = () => {
  let api = process.env.REACT_APP_API_KEY;
  const [isEditing, setIsEditing] = useState(false);
  const [leftContentWrapper, setLeftContentWrapper] = useState(false);
  const [organizedNotes, setOrganizedNotes] = useState("");
  const [textInput, setTextInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [docTitle, setDocTitle] = useState("Document Title");

  const handleLeftContentWrapperClick = () => {
    setLeftContentWrapper(!leftContentWrapper);
  };

  // Create a function to export the organizedNotes as a PDF

  const exportAsPDF = () => {
    const margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    };

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      margins: margin,
    });

    const headerText = docTitle;
    const textContent = organizedNotes;

    doc.setFontSize(12);

    // Add header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(margin.left, margin.top + 16, headerText);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Calculate available height for content
    const availableHeight =
      doc.internal.pageSize.height - margin.top - margin.bottom;

    // Split text into lines to fit within the available height
    const lines = doc.splitTextToSize(
      textContent,
      doc.internal.pageSize.width - margin.left - margin.right
    );

    let y = margin.top + 30;

    lines.forEach((line) => {
      if (y + doc.getTextDimensions(line).h > availableHeight) {
        doc.addPage();
        y = margin.top;
      }
      doc.text(margin.left, y, line);
      y += doc.getTextDimensions(line).h + 5;
    });

    // Footer
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(
        doc.internal.pageSize.width - margin.right - 10,
        doc.internal.pageSize.height - margin.bottom + 10,
        `Page ${i} of ${totalPages}`
      );
    }

    // Save the PDF
    doc.save("Organized Notes.pdf");
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
          <Header setDocTitle={setDocTitle} />
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
                ></textarea>
              </div>
              <button
                className="btn export-btn"
                text={"Export PDF"}
                icon={centerBtns[3].icon}
                onClick={() => {
                  exportAsPDF();
                }}
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
