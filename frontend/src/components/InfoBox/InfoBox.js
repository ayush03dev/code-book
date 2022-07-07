import React from "react";
import "./InfoBox.css";

function InfoBox({ text }) {
  return (
    <div className="info-box">
      <div className="title">
        <span className="info">Description</span>
      </div>
      {text}
    </div>
  );
}

export default InfoBox;
