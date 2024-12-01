import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/CTA/Tesla-Redesign.js";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import { Helmet } from "react-helmet";
import "./ProjectDetail.css";

function ProjectDetail2() {
  const navigate = useNavigate(); // Use the navigate hook to control routing

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the homepage
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image sources
  const images = Array.from(
    { length: 8 },
    (_, i) => `../Tesla-Deliverables/Tesla-screen-${i}.png`
  );

  const handleImageClick = (index) => {
    setCurrentImageIndex(index); // Change the current image when a preview is clicked
  };

  return (
    <main className="project-page">
      <Helmet>
        <meta
          name="google-site-verification"
          content="ZOvSOnHHIkFeR3U0S0t9gFQvjUZ4D7PLK-A-7rgONHU"
        />
        <script
          async=""
          src="https://www.googletagmanager.com/gtag/js?id=G-ESG6BZ7MDZ"
        ></script>

        <title>Tesla Dashboard Redesign | Portfolio | Tibsigner</title>
        <meta
          name="description"
          content="Redesign the dashboard of Tesla with an additional feature to manage Tesla cars from a far distance."
        />
        <link rel="favicon icon" href="../../Logo.png" type="image/png" />
        <link
          rel="canonical"
          href="https://tibsigner.com/projects/Tesla-Dashboard-Redesign"
        />

        <meta
          property="og:title"
          content="Tesla Dashboard Redesign | Portfolio | Tibsigner"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tibsigner.com/projects/Tesla-Dashboard-Redesign"
        />
        <meta
          property="og:description"
          content="Redesign the dashboard of Tesla with an additional feature to manage Tesla cars from a far distance."
        />
        <meta property="og:site_name" content="Tibsigner" />
        <meta property="og:image" content="https://tibsigner.com/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="Tibsigner-logo" />
      </Helmet>

      <button onClick={handleBackClick} className="back-button">
        <FaArrowLeft />
        <span className="back-button-text">Back to Home</span>
      </button>

      <section>
        <div className="overview">
          <h1>Tesla | Dashboard Redesign</h1>
          <p>
            An idea to manage Tesla cars from a far distance, fully designing
            from end-to-end. Implement Neumorphism style to illustrate Tesla
            brand attributes. Conducted researches to present for the implement
            of the ideas.
          </p>
          <p>
            <strong>Role:</strong> UI/UX Designer, Researcher
          </p>
        </div>
        <div className="technologies">
          <h2>Technologies Used</h2>
          <p>Figma, Photoshop</p>
          <h2>Showcases</h2>
          <DropdownMenu />
        </div>
      </section>
      <div className="project-details">
        <h3>Deliverables</h3>
        {/* Image Preview List */}
        <div className="image-preview-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project preview ${index}`}
              className={`image-preview ${
                currentImageIndex === index ? "active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <img
          src={images[currentImageIndex]}
          alt="Tesla Redesign project preview choosen"
        />
      </div>
    </main>
  );
}

export default ProjectDetail2;
