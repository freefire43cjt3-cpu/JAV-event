import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="form-header">
      <div className="header-container">

        <div className="brand">
          <div className="brand-mark">JAV</div>

          <div className="brand-text">
            <h2>JAV EVENTS</h2>
            <span>& SERVICES</span>
          </div>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          Project Questionnaire
        </div>

      </div>
    </header>
  );
}

export default Header;