import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA/Getfromyt";
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
    { length: 5 },
    (_, index) => `../Getfromyt-Deliverables/Getfromyt-screen-${index}.png`
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

        <title>Getfromyt YouTube Converter | Portfolio | Tibsigner</title>
        <meta
          name="description"
          content="Getfromyt is a Converter which will help you download videos Online from YouTube to Mp3 or Mp4 based on your choices."
        />

        <link rel="favicon icon" href="../../Logo.png" type="image/png" />
        <link
          rel="canonical"
          href="https://tibsigner.com/projects/Getfromyt-YouTube-Converter"
        />

        <meta
          property="og:title"
          content="Getfromyt YouTube Converter | Portfolio | Tibsigner"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tibsigner.com/projects/Getfromyt-YouTube-Converter"
        />
        <meta
          property="og:description"
          content="Getfromyt is a Converter which will help you download videos Online from YouTube to Mp3 or Mp4 based on your choices."
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
          <h1>Getfromyt | YouTube Converter</h1>
          <p>
            Getfromyt is a software online to get videos from YouTube and
            convert them into Mp3 & Mp4. Furthermore, it is included features to
            cut or merge videos YouTube for free. This site grew with around
            6000 unique users daily. This is a start-up project which is
            required a lot of flexibilities.
          </p>
          <p>
            <strong>Role:</strong> UI/UX Designer & Developer, SEO Specialist
          </p>
        </div>
        <div className="technologies">
          <h2>Technologies Used</h2>
          <p>
            TypeScript, ReactJS - <br />
            Figma, GitHub - <br />
            Google Analytics, Google Search Console - <br />
            Other SEO Tools -
          </p>
          <h2>Source code</h2>
          <CTA />
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
          alt="Getfromyt project preview choosen"
        />
      </div>
    </main>
  );
}

export default ProjectDetail2;
