import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import "../text-controls/TextControls.css";

const TextControls = ({ setIsEditing, handleEditClick, isEditing }) => {
  return (
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
      <button
        className={`et__btn ${isEditing ? "editing" : ""}`}
        onClick={handleEditClick}
      >
        {isEditing ? "Save Text" : "Edit Text"}
      </button>
    </div>
  );
};

export default TextControls;
