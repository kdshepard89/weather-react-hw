import React from "react";
import "./styles.css";

export default function TodayWeather() {
  return (
    <div className="CurrentTemp">
      <span id="currentTemp">19</span>
      <span className="unit">°C</span>
    </div>
  );
}
