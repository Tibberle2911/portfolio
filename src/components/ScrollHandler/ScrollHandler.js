import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollHandler.css";

const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const isProjectPage = location.pathname.includes("/projects/");

    // Update the body class based on the current route
    document.body.classList.toggle("default-scroll", isProjectPage);
    document.body.classList.toggle("custom-scroll", !isProjectPage);

    if (isProjectPage) return; // Default browser scrolling on the project page

    const scrollToNextSection = () => {
      const nextSection = document.getElementById("main");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToHeroSection = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleScrollEvent = (e) => {
      if (e.deltaY > 0) {
        scrollToNextSection();
      } else {
        scrollToHeroSection();
      }
    };

    window.addEventListener("wheel", handleScrollEvent);
    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
    };
  }, [location]);

  return children;
};

export default ScrollHandler;
