import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../side-menu/SideDir.css";

const SideDir = ({ leftContentWrapper, handleLeftContentWrapperClick }) => {
  return (
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
  );
};

export default SideDir;
