import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <h1>Hi, I'm Tylor Le</h1>
      {/* Author Image */}
      <div className="author-image-container">
        <img src="./Avatar.png" alt="Tylor" className="author-image" />
      </div>
      <p>
        <b>UI/UX Designer & Developer</b>
        <br />
        <br />
        Strong capabilities in Front-end Development, UI/UX, and Search Engine
        Optimization (SEO)
      </p>
      <div className="scroll-message-container">
        <p className="scroll-message">
          Scroll down for detail
          <br />↓
        </p>
      </div>
    </section>
  );
}

export default Hero;
