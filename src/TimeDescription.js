import React from "react";
import "./TimeDescription.css";

export default function TimeDescription() {
  return (
    <div className="TimeDescription">
      <h2>
        <span id="currentTime">Saturday 10:57, </span>
        <span id="condition">Sunny</span>
      </h2>
    </div>
  );
}
