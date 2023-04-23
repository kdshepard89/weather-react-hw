import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./TimeDescription.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";
import TodayWeather from "./TodayWeather";
import Conditions from "./Conditions";
import City from "./City";
import Icon from "./Icon";
import TimeDescription from "./TimeDescription";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <div className="Container">
        <Search />
        <City />
        <TimeDescription />
        <div className="row">
          <div className="col-2">
            <Icon />
          </div>
          <div className="col-4">
            <TodayWeather />
          </div>
          <div className="col-6">
            <Conditions />
          </div>
        </div>
      </div>
    </div>
    <p className="git-link">
      This was coded by Katie Shepard and can be found open-sourced on
      <a href="https://github.com/kdshepard89/weather-react-hw"> GitHub</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
