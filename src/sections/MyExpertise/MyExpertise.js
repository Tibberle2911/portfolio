import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSearch,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./MyExpertise.css";

function MyExpertise() {
  return (
    <main id="main">
      <section id="my-expertise" className="expertise-section">
        <h2>My Expertise</h2>
        <div className="expertise-container">
          <div className="expertise-box">
            <h3>
              <FontAwesomeIcon
                icon={faObjectGroup}
                className="expertise-icon"
              />
              UI/UX - Design System
            </h3>
            <p>
              Creating comprehensive design systems to ensure the consistency of
              user experience across all platforms. Including the scalability of
              UI components in both coding and design files.
            </p>
          </div>
          <div className="expertise-box">
            <h3>
              <FontAwesomeIcon icon={faCode} className="expertise-icon" />
              Frontend - React.js
            </h3>
            <p>
              Developing maintainable, and interactive web applications using
              React.js, ensuring consistency across platforms with reusable
              styled components and scalable JavaScript interactions.
            </p>
          </div>
          <div className="expertise-box">
            <h3>
              <FontAwesomeIcon icon={faSearch} className="expertise-icon" />
              On-page SEO
            </h3>
            <p>
              Optimizing web pages for search engines through the strategic use
              of semantic HTML / meta tags and/or Structured Data plus
              customizing user flows for SEO metrics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyExpertise;
