import React from "react";
import "../CSS/General_rules.css";
import backgroundImg from "../Image/General_rules_back.jpg";

function General_rules() {
  return (
    <>
      <div className="General_rules" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="overlay" />
        <div className="content">
          <h1 className="General_rules_title" style={{ color: "#fff" }}>
            GENERAL RULES FOR PARTICIPANT
          </h1>
          <p className="General_rules_subtitle">The E-Way Learning.</p>
          <div className="General_rules_subtitle">Welcome To Tutorials.</div>
        </div>
      </div>
    </>
  );
}

export default General_rules;
