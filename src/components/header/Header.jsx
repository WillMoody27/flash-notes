import React from "react";
import "../header/Header.css";

const Header = () => {
  return (
    <div className="heading--content">
      <input
        // value={"Theory of Computation"}
        type="text"
        placeholder="Document Title"
        className="heading--main"
      />
      <h1 className="logo--fn">
        Flash <span className="heading--main__bolt">⚡️</span> Notes
      </h1>
    </div>
  );
};

export default Header;
