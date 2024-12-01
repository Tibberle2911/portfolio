import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isDarkMode, toggleDayNightMode }) => {
  return (
    <div className="toggle-switch-container">
      <span className="logo">Ts</span>
      <span className="line"></span>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDayNightMode}
        />
        <span className="slider">
          <span className="icon-sun">
            <FaSun />
          </span>
          <span className="icon-moon">
            <FaMoon />
          </span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
