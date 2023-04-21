import React from "react";
import "./styles.css";

export default function Conditions() {
  return (
    <div className="Conditions">
      <ul>
        <li className="phw">
          Humidity: <span id="humid">83</span>%
        </li>
        <li className="phw">
          Wind: <span id="wind">9</span>km/hr
        </li>
      </ul>
    </div>
  );
}
