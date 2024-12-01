import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";

function Work() {
  return (
    <main id="main">
      <section id="work" className="work-section">
        <h2>Featured Works</h2>
        <div className="work-grid">
          <div className="work-item">
            <Link
              to="/projects/Techcombank-Website-Redesign"
              className="work-link"
            >
              <div
                className="work-thumbnail"
                style={{
                  backgroundImage: "url('Techcombank-logo.png')",
                }}
              ></div>
              <h3>Techcombank | Redesigning</h3>
              <p>
                It is a project based clients which are developed by a team to
                redesign the whole Techcombank website.
              </p>
            </Link>
          </div>
          <div className="work-item">
            <Link to="/projects/Udacity-Coffee-Shop" className="work-link">
              <div
                className="work-thumbnail"
                style={{
                  backgroundImage: "url('Udacity-logo.png')",
                }}
              ></div>
              <h3>Udacity | Capstone Project</h3>
              <p>
                This application is created to connect students in the Udacity
                campus, including interactions with coffee.
              </p>
            </Link>
          </div>
          <div className="work-item">
            <Link
              to="/projects/Getfromyt-YouTube-Converter"
              className="work-link"
            >
              <div
                className="work-thumbnail"
                style={{
                  backgroundImage: "url('Getfromyt-logo.png')",
                }}
              ></div>
              <h3>Getfromyt | Startup Project</h3>
              <p>
                Worked at a start-up team to develop and maintain a website with
                around 6000 unique users daily.
              </p>
            </Link>
          </div>

          <div className="work-item">
            <Link to="/projects/Tesla-Dashboard-Redesign" className="work-link">
              <div
                className="work-thumbnail"
                style={{
                  backgroundImage: "url('Tesla-logo.png')",
                }}
              ></div>
              <h3>Tesla | Dashboard Redesign</h3>
              <p>
                Redesign the dashboard of Tesla with an additional feature to
                manage Tesla cars from a far distance.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;
