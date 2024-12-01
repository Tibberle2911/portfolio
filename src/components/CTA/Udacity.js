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
              href="https://www.figma.com/proto/NrSccRaPzdrps4YhAabuT8/UXND?node-id=255-12679&scaling=scale-down&page-id=221%3A13305&starting-point-node-id=255%3A12679"
              className="dropdown-item"
            >
              High-Fidelity prototype
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/proto/NrSccRaPzdrps4YhAabuT8/UXND?node-id=73-8208&scaling=scale-down&page-id=48%3A4827&starting-point-node-id=73%3A8208&show-proto-sidebar=1"
              className="dropdown-item"
            >
              Low-Fidelity prototype
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=87-7819&node-type=canvas"
              className="dropdown-item"
            >
              Style Guide + UI Components
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=136-9758&node-type=canvas"
              className="dropdown-item"
            >
              High-Fidelity mockup
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=19-709&node-type=canvas"
              className="dropdown-item"
            >
              Low-Fidelity mockup
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=65-7385&node-type=canvas"
              className="dropdown-item"
            >
              Iteration 1
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=213-11561&node-type=canvas"
              className="dropdown-item"
            >
              Iteration 2
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/NrSccRaPzdrps4YhAabuT8/UXND?node-id=221-13305&t=pmuILQHPiETPe5KI-1"
              className="dropdown-item"
            >
              Interactive Prototype
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
