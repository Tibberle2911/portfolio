import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = ({ activeSection, handleNavigation }) => {
  const location = useLocation();

  return location.pathname === "/" ? (
    <nav className="navbar">
      <ul>
        <li
          onClick={() => handleNavigation("expertise")}
          className={activeSection === "expertise" ? "active" : ""}
        >
          Expertise
        </li>
        <li
          onClick={() => handleNavigation("work")}
          className={activeSection === "work" ? "active" : ""}
        >
          Work
        </li>
        <li
          onClick={() => handleNavigation("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </li>
      </ul>
    </nav>
  ) : null;
};

export default Navbar;
