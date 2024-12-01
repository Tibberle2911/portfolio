import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import HeroSection from "./sections/Hero/Hero";
import ExpertiseSection from "./sections/MyExpertise/MyExpertise";
import WorkSection from "./sections/Work/Work";
import ContactSection from "./sections/Contact/Contact";
import TechcombankProject from "./projects/Techcombank-Website-Redesign";
import GetfromytProject from "./projects/Getfromyt-YouTube-Converter";
import TeslaRedesignProject from "./projects/Tesla-Dashboard-Redesign";
import UdacityCoffeeShopProject from "./projects/Udacity-Coffee-Shop";
import Navbar from "./components/Navbar/Navbar";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import ScrollHandler from "./components/ScrollHandler/ScrollHandler";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("expertise");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects/");

  // Ensure viewport resets to y=0 on project detail pages
  useEffect(() => {
    if (isProjectPage) {
      window.scrollTo(0, 0);
    }
  }, [isProjectPage]); // Added isProjectPage as a dependency to fix the warning

  const handleNavigation = (section) => {
    setActiveSection(section);
    scrollToNextSection();
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("main");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDayNightMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    const checkScreenHeight = () => {
      setIsMobileDevice(window.innerHeight < 725);
    };

    checkScreenHeight();
    window.addEventListener("resize", checkScreenHeight);
    return () => window.removeEventListener("resize", checkScreenHeight);
  }, []);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {isMobileDevice && (
        <div className="mobile-warning">
          <p>
            Please use a device with a screen height above 725px for an
            optimized experience.
          </p>
        </div>
      )}

      {!isProjectPage && (
        <ToggleSwitch
          isDarkMode={isDarkMode}
          toggleDayNightMode={toggleDayNightMode}
        />
      )}

      <ScrollHandler>
        <Navbar
          activeSection={activeSection}
          handleNavigation={handleNavigation}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    UI/UX Designer & Developer | Tibsigner aka Tylor Le
                  </title>
                  <meta
                    name="description"
                    content="I am Tylor Le (Tibsigner) with strong capabilities in Front-end Development, UI/UX, and Search Engine Optimization (SEO). Willingness to solve business's problems professionally."
                  />
                  <link rel="favicon icon" href="./Logo.png" type="image/png" />
                  <link rel="canonical" href="https://tibsigner.com/" />
                  <meta
                    property="og:title"
                    content="UI/UX Designer & Developer | Tibsigner aka Tylor Le"
                  />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://tibsigner.com/" />
                  <meta
                    property="og:description"
                    content="I am Tylor Le (Tibsigner) with strong capabilities in Front-end Development, UI/UX, and Search Engine Optimization (SEO). Willingness to solve business's problems professionally."
                  />
                  <meta property="og:site_name" content="Tibsigner" />
                  <meta
                    property="og:image"
                    content="https://tibsigner.com/logo.png"
                  />
                  <meta property="og:image:type" content="image/png" />
                  <meta property="og:image:width" content="500" />
                  <meta property="og:image:height" content="500" />
                  <meta property="og:image:alt" content="Tibsigner-logo" />
                </Helmet>
                <HeroSection />
                {activeSection === "expertise" && <ExpertiseSection />}
                {activeSection === "work" && <WorkSection />}
                {activeSection === "contact" && <ContactSection />}
              </>
            }
          />
          <Route
            path="/projects/Getfromyt-YouTube-Converter"
            element={<GetfromytProject />}
          />
          <Route
            path="/projects/Techcombank-Website-Redesign"
            element={<TechcombankProject />}
          />
          <Route
            path="/projects/Tesla-Dashboard-Redesign"
            element={<TeslaRedesignProject />}
          />
          <Route
            path="/projects/Udacity-Coffee-Shop"
            element={<UdacityCoffeeShopProject />}
          />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollHandler>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  );
}

export default AppWithRouter;
