import React, { useState } from 'react';
import "./ProjectDisplay.css";
import poketrade from "./assets/poketrade.png";
import leftArr from "./assets/leftarrow.png";
import rightArr from "./assets/rightarrow.png";

const ProjectDisplay = () => {
    const [currProject, setCurrProject] = useState(0);
    const projects = [
      {
        image: poketrade,
        description: "project1",
      },
      {
        image: poketrade,
        description: "project2",
      },
      {
        image: poketrade,
        description: "project3",
      },
    ];

    const prevProject = () => {
      setCurrProject((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const nextProject = () => {
        setCurrProject((prev) => (prev < projects.length - 1 ? prev + 1: prev));
    }

    return (
      <div className="project-display">
        <div className="top-part">
          <img
            src={projects[currProject].image}
            alt="project"
            className="project-img"
          />
          <h3 className='description'>{projects[currProject].description}</h3>
        </div>
        <div className="controls">
          <button className="left-btn" onClick={prevProject}>
            <img src={leftArr} className="arrow" alt="left arrow"/>
          </button>
          <button className="launch-btn">LAUNCH</button>
          <button className="right-btn" onClick={nextProject}>
            <img src={rightArr} className="arrow" alt="right arrow"/>
          </button>
        </div>
      </div>
    );
}

export default ProjectDisplay;