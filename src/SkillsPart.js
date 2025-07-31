import React, { useState, useEffect } from "react";
import "./SkillsPart.css";
import spaceship from "./assets/spaceship.png";
import beam from "./assets/beam.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
import javascript from "./assets/javascript.png";
import svelte from "./assets/svelte.png";

import python from "./assets/python.png";
import java from "./assets/java.png";
import nodejs from "./assets/nodejs.png";
import django from "./assets/django.png";
import expressjs from "./assets/expressjs.png";

import github from "./assets/github.png";
import figma from "./assets/figma.png";
import postman from "./assets/postman.png";

const SkillsPart = () => {
    const [expanded, setExpanded] = useState(false);
    const [icons, setIcons] = useState(null);


    const clickHandler = () => {
        setExpanded(prev => !prev);
    }

    useEffect(() => {
      if (expanded) {
        setIcons("frontend-icons");
      } else {
        setIcons(null);
      }
    }, [expanded]);

    return (
      <div className={`skills-content ${expanded ? "skills-expanded" : ""}`}>
        <button onClick={clickHandler} className="click-btn">
          {expanded ? "CLOSE" : "CLICK"}
        </button>
        <div className="below-button">
          <div className={expanded ? "without-img" : ""}>
            <h1>SKILLS</h1>
            <div className={expanded ? "skill-types" : "hidden"}>
              <button className="frontend" onClick={() => setIcons("frontend-icons")}>
                frontend
              </button>
              <button className="backend" onClick={() => setIcons("backend-icons")}>
                backend
              </button>
              <button className="etc" onClick={() => setIcons("etc-icons")}>
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
              <div className={icons === "frontend-icons" ? "frontend-icons" : "hidden"}>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={html} alt="html icon" />
                    <p>html</p>
                  </div>
                  <div className="icon-set">
                    <img src={css} alt="css icon" />
                    <p>css</p>
                  </div>
                </div>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={javascript} alt="javascript icon" />
                    <p>javascript</p>
                  </div>
                  <div className="icon-set">
                    <img src={react} alt="react icon" />
                    <p>react</p>
                  </div>
                </div>
                <div className="icon-set-svelte">
                  <img src={svelte} alt="svelte icon" />
                  <p>svelte</p>
                </div>
              </div>
              <div className={icons === "backend-icons" ? "backend-icons" : "hidden"}>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={python} alt="python icon" />
                    <p>python</p>
                  </div>
                  <div className="icon-set">
                    <img src={java} alt="java icon" />
                    <p>java</p>
                  </div>
                </div>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={nodejs} alt="node.js icon" />
                    <p>node.js</p>
                  </div>
                  <div className="icon-set">
                    <img src={django} alt="django icon" />
                    <p>django</p>
                  </div>
                </div>
                <div className="icon-set-svelte">
                  <img src={expressjs} alt="express.js icon" />
                  <p>express.js</p>
                </div>
              </div>
              <div className={icons === "etc-icons" ? "etc-icons" : "hidden"}>
                <div className="two-icons">
                  <div className="icon-set">
                    <img src={github} alt="github icon" />
                    <p>github</p>
                  </div>
                  <div className="icon-set">
                    <img src={figma} alt="figma icon" />
                    <p>figma</p>
                  </div>
                </div>
                <div className="icon-set-svelte">
                  <img src={postman} alt="postman icon" />
                  <p>postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SkillsPart;