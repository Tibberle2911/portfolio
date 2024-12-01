import React, { useState } from "react";
import "./CTA.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="primary-button" onClick={toggleDropdown}>
        Navigate to:
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a
              href="https://www.figma.com/design/cVPjEOCHMXC564gdluHLqv/Build?node-id=0-1&t=ltCz2xT9rnDUd4Pg-1"
              className="dropdown-item"
            >
              User-flow in a High-Fidelity UI
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/kyqInZXnBgM2d9dKmcO7FB/Prepare?node-id=0-1&t=ga3YfHOVqjCCs4ky-1"
              className="dropdown-item"
            >
              Wireframing
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/kyqInZXnBgM2d9dKmcO7FB/Prepare?node-id=30-698&t=85JOMpSDjT6fmI4m-1"
              className="dropdown-item"
            >
              Style Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/board/dcYiccppbopxCfycx8OXiW/Diagram-Mapping?node-id=0-1&t=nFHQUGD4m20e31F6-1"
              className="dropdown-item"
            >
              Diagram Mapping
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
