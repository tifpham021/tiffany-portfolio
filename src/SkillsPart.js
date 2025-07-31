import React, { useState } from "react";
import "./SkillsPart.css";
import spaceship from "./assets/spaceship.png";
import beam from "./assets/beam.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
import javascript from "./assets/javascript.png";
import svelte from "./assets/svelte.png";

const SkillsPart = () => {
    const [expanded, setExpanded] = useState(false);
    const [frontend, setFrontend] = useState(false);

    const clickHandler = () => {
        setExpanded(prev => !prev);
    }

    const clickFrontend = () => {
        setFrontend(prev => !prev);
    }
    return (
      <div className={`skills-content ${expanded ? "skills-expanded" : ""}`}>
        <button onClick={clickHandler} className="click-btn">
          CLICK
        </button>
        <div className="below-button">
          <div className={expanded ? "without-img" : ""}>
            <h1>SKILLS</h1>
            <div className={expanded ? "skill-types" : "hidden"}>
              <button className="frontend" onClick={clickFrontend}>
                frontend
              </button>
              <button className="backend">backend</button>
              <button className="etc">
                design/
                <br />
                other
              </button>
            </div>
          </div>
          <div className="spaceship-wrapper">
            <div className={`spaceship-inner ${expanded ? "shrink" : ""}`}>
              <img src={spaceship} alt="spaceship" className="spaceship" />
            </div>
            <div className="beam-wrapper">
                <img
                  src={beam}
                  alt="beam"
                  className={expanded ? "beam" : "hidden"}
                />
              </div>
            <div className="skill-icons">
              <div className={frontend ? "frontend-icons" : "hidden"}>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={html} alt="html icon" />
                    <p>html</p>
                  </div>
                  <div className="icon-set">
                    <img src={css} alt="html icon" />
                    <p>css</p>
                  </div>
                </div>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={javascript} alt="html icon" />
                    <p>javascript</p>
                  </div>
                  <div className="icon-set">
                    <img src={react} alt="html icon" />
                    <p>react</p>
                  </div>
                </div>
                <div className="icon-set-svelte">
                  <img src={svelte} alt="html icon" />
                  <p>svelte</p>
                </div>
              </div>
              <div className="backend-icons"></div>
              <div className="etc-icons"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SkillsPart;