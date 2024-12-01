import React from "react";
import "./Contact.css";
import { FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons from react-icons

function Contact() {
  return (
    <main id="main">
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Send me an email or contact me directly by an intro message!</p>
        <p>
          Email address: <b>tibber.le@gmail.com</b>
        </p>
        <p>
          Phone number: <b>+61432461386</b>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/tib-designer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081637311281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
