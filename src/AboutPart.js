import React, { useRef, useEffect, useState } from "react";
import "./AboutPart.css";
import helmet from "./assets/helmet.png";
import comet1 from "./assets/cometLeft.png";
import comet2 from "./assets/cometRight.png";
const AboutPart = () => {
    const cometRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(prev => !prev);
    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      if (cometRef.current) {
        observer.observe(cometRef.current);
      }

      return () => observer.disconnect();
    }, []);
    return (
      <div className={`about-content ${expanded ? "expanded" : ""}`}>
        <button onClick={handleClick} className="about-btn">
          {expanded ? "CLOSE" : "CLICK"}
        </button>
        <div className="no-button" ref={cometRef}>
          <img
            src={comet1}
            alt="purple comet"
            className="comet"
            style={{
              animation: visible ? "cometFly 1.5s ease-out forwards" : "none",
            }}
          />
          <div className="text">
            <h1>AB</h1>
            <img src={helmet} alt="astronaut helmet" className="helmet" />
            <p className={`${expanded ? "show-text" : "hide-text"}`}>
              Hi, I’m Tiffany. <br />
              I’m a CS student at Georgia Tech with a focused interest in
              frontend development and UX design. I’m passionate about building
              clean, responsive interfaces that are both visually compelling and
              user-centered. <br />
              <br />
              I’m continuously refining my design and development skills through
              hands-on projects. Feel free to explore some of my work below!
            </p>
            <h1>UT</h1>
          </div>
          <img
            src={comet2}
            alt="purple comet"
            className="comet"
            style={{
              animation: visible ? "cometFly 1.5s ease-out forwards" : "none",
            }}
          />
        </div>
      </div>
    );
}

export default AboutPart;