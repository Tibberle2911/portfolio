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
            <a href="https://techcombank.com/en" className="dropdown-item">
              Official website
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/nDEFXzo22QiChlNU117VTF/TEMPLATE---REVISED?node-id=0-1&t=wqN3XTCiFLBjx371-1"
              className="dropdown-item"
            >
              Templates
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/Dkk97f5do566VK10P61dqN/TCB_About-%2B-Contact?node-id=28-823&t=263ZCz5Yxp6AFTyC-1"
              className="dropdown-item"
            >
              About + Contact pages
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/rfBsAc05fcK5Seq9bOjx9o/TCB_T%E1%BB%95ng-h%E1%BB%A3p-Components?node-id=209-5920&t=MR0RQBU7SzunXot6-1"
              className="dropdown-item"
            >
              UI components
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/fTfXIGoQcphavrCjR9e7JA/TCB_Card?node-id=0-1&t=kuJi0BBJeJ4ccpw6-1"
              className="dropdown-item"
            >
              Card designs
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/rlkm5hCqIv9fZxlH8chfJO/TCB_Form?node-id=13-710&t=nG1ThPhGB6shfqL9-1"
              className="dropdown-item"
            >
              Form designs
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
