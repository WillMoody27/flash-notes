import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/Main.css";

const Main = () => {
  // Mock payload
  const notes = {
    userId: 13579,
    message:
      "Weekly Inspiration:\n- Quote: 'The only way to do great work is to love what you do.' - Steve Jobs\n- Action Items:\n  • Reflect on your passions\n  • Set one personal goal for the week\n- Image Inspiration:\n  • URL: 'https://example.com/weekly-inspiration.jpg'\n\nLet this image and quote inspire your week!",
    image: {
      description: "A serene landscape to inspire creativity and peace.",
      url: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/1280px-Cat_poster_1.jpg`,
    },
  };

  // Extract from buttons
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  const handletextareaChange = (e) => {
    setText(e.target.value);
  };

  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  }, [toast]);

  const [leftContentWrapper, setLeftContentWrapper] = useState(false);

  const handleLeftContentWrapperClick = () => {
    setLeftContentWrapper(!leftContentWrapper);
  };

  return (
    <div className="main-section">
      <aside
        className={`left--content__wrapper ${
          leftContentWrapper ? "left--content__wrapper--active" : ""
        }`}
        onClick={(e) => handleLeftContentWrapperClick(e)}
      >
        <nav className="sidebar--menu">
          <div className="arrow--wrapper">
            <span className="back--arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </div>
        </nav>
      </aside>
      <div className="right--content__wrapper">
        <div className="heading--content">
          <input
            type="text"
            placeholder="Enter the heading here"
            className="heading--main"
            value={"Document Title"}
          />
          <h1 className="logo--fn">
            Flash <span className="heading--main__bolt">⚡️</span> Notes
          </h1>
        </div>
        <div className="right--content__content">
          <div className="subheading--content">
            <h3 className="subheading">Your Notes</h3>
            <div className="controls--wrapper ">
              <div className="controls">
                <div className="controls__center">
                  <div className="center__control">
                    <FontAwesomeIcon icon={faAlignCenter} />
                  </div>
                </div>
                {/* Divider */}
                <div className="divider">&#124;</div>
                <div className="controls__font-size">18pt</div>
              </div>
              <button className="et__btn">Edit Text</button>
            </div>
            <div className="text-container">
              <textarea
                placeholder="Enter your message here"
                className="main-text-area"
              ></textarea>
            </div>
          </div>

          <div className="btn-container">
            <button
              className="btn-main"
              onClick={() => {
                console.log(`Text Prompt Summarize This Text: ${text}`);
                setToast(true);
              }}
            >
              Summary
            </button>
            <button
              className="btn-main"
              onClick={() => {
                console.log(`Text Prompt Summarize This Text: ${text}`);
                setToast(true);
              }}
            >
              Organize
            </button>
            <button
              className="btn-main"
              onClick={() => {
                console.log(`Text Prompt Summarize This Text: ${text}`);
                setToast(true);
              }}
            >
              Translate (Klingon)
            </button>
          </div>
          {/* Output */}
          <div className="output">
            <p>Output</p>
            {/* <textarea
            className="output-text-area"
            placeholder="Output will be displayed here"
            value={notes}
          ></textarea> */}
            {/* <div className="mock-note">
              <div>
                <h1>Theory of Computation</h1>

                <h2>1. Introduction</h2>
                <ul>
                  <li>Definition of Theory of Computation</li>
                  <li>Importance in Computer Science</li>
                  <li>Historical Background</li>
                </ul>

                <h2>2. Automata Theory</h2>
                <ul>
                  <li>Finite Automata (FA)</li>
                  <li>Deterministic Finite Automata (DFA)</li>
                  <li>Non-deterministic Finite Automata (NFA)</li>
                  <li>Regular Expressions</li>
                  <li>Properties of Regular Languages</li>
                </ul>

                <h2>3. Context-Free Grammars (CFG)</h2>
                <ul>
                  <li>Definition and Examples</li>
                  <li>Derivations and Parse Trees</li>
                  <li>Chomsky Hierarchy</li>
                  <li>Properties of Context-Free Languages</li>
                </ul>

                <h2>4. Turing Machines (TM)</h2>
                <ul>
                  <li>Definition and Components</li>
                  <li>Types of Turing Machines</li>
                  <li>Universal Turing Machine</li>
                  <li>Halting Problem</li>
                  <li>Church-Turing Thesis</li>
                </ul>

                <h2>5. Computability Theory</h2>
                <ul>
                  <li>Decidability and Undecidability</li>
                  <li>Halting Problem and Rice's Theorem</li>
                  <li>Reduction Techniques</li>
                  <li>Recursive and Recursively Enumerable Languages</li>
                </ul>

                <h2>6. Complexity Theory</h2>
                <ul>
                  <li>Time and Space Complexity</li>
                  <li>P vs NP Problem</li>
                  <li>NP-Completeness</li>
                  <li>Polynomial-Time Reductions</li>
                  <li>Approximation Algorithms</li>
                </ul>
              </div>
            </div> */}
            <div className="mock-data">
              <textarea
                className="output-text-area"
                value={notes.message}
              ></textarea>
            </div>
            <button
              className="export-btn"
              onClick={() => {
                console.log(`Text Prompt Summarize This Text: ${text}`);
                setToast(true);
              }}
            >
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
