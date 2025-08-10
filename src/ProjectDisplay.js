import React, { useState } from 'react';
import "./ProjectDisplay.css";
import poketrade from "./assets/poketrade.png";
import nomadiq from "./assets/nomadiq.png";
import scrollytelly from "./assets/kwk-bwdc.png";
import figbuild from "./assets/figbuild.png";
import figbuild2 from "./assets/figbuild2.png";
import leftArr from "./assets/leftarrow.png";
import rightArr from "./assets/rightarrow.png";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDisplay = () => {
    const [currProject, setCurrProject] = useState(0);
    const [direction, setDirection] = useState(0);
    const projects = [
      {
        image: nomadiq,
        title: "Nomadiq",
        description:
          "A travel app that helps users plan trips with real-time weather, custom packing lists, itinerary suggestions, booking integration, budget planning, emergency info, and collaborative features — designed in Figma and built with MERN stack, HTML, CSS, and APIs.",
        prototype:
          "https://www.figma.com/design/RhAfAVCMiWdFTRW6OzdIue/Travel-Website-Project?m=dev&t=rgpdmOpGanz9wrHZ-1",
        github: "https://github.com/tifpham021/Nomadiq-Website.git",
      },
      {
        image: poketrade,
        title: "PokeTrade",
        description:
          "A web app where users trade, buy, and sell Pokémon in a dynamic marketplace with API-powered card data — built with Django, Node.js, Express, HTML, CSS, and the PokéAPI.",
        prototype: "",
        github: "https://github.com/tifpham021/PokeTrade.git",
      },
      {
        image: scrollytelly,
        title: "Same Degree, Different Doors",
        description:
          "A data story showing how Black graduates face barriers to homeownership despite equal education, created for a challenge and winning the Overall Showstopper Award — designed in Figma and built with Svelte.",
        prototype:
          "https://www.figma.com/design/8PMlVNVbufGMlsU5aKsTPc/BWDC-Scrollytelling?node-id=0-1&m=dev&t=uKaYv5oOXtDokM9m-1",
        github: "https://github.com/tifpham021/bwdc-scrollytelling.git",
        launch: "https://tifpham021.github.io/bwdc-scrollytelling/",
      },
      {
        image: figbuild,
        image2: figbuild2,
        title: "Ctrl Z",
        description:
          "Made for the Figbuild Designathon, CTRLZ lets users set checkpoints to time travel and redo events with interactive timelines— designed in Figma.",
        prototype:
          "https://www.figma.com/design/GCfdxJg7TH5zWyjJe680CT/FigBuild-2025?m=dev&t=uKaYv5oOXtDokM9m-1",
        launch:
          "https://www.figma.com/proto/GCfdxJg7TH5zWyjJe680CT/FigBuild-2025?node-id=8-7&t=uKaYv5oOXtDokM9m-1",
      },
    ];

    const variants = {
      enter: (direction) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4 },
      },
      exit: (direction) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.4 },
      }),
    };

    const prevProject = () => {
      setDirection(-1);
      setCurrProject((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const nextProject = () => {
        setDirection(1);
        setCurrProject((prev) => (prev < projects.length - 1 ? prev + 1: prev));
    }

    const handleLaunch = () => {
      const project = projects[currProject];
      const link = project.launch || project.github;
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    };


    return (
      <div className="project-display">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currProject}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="top-part">
              {projects[currProject].image2 ? (
                <div className="images">
                  <img src={projects[currProject].image} alt="project" />
                  <img
                    src={projects[currProject].image2}
                    alt="project secondary"
                  />
                </div>
              ) : (
                <img
                  src={projects[currProject].image}
                  alt="project"
                  className="project-img"
                />
              )}
              <div className="descript-part">
                <h1 className="project-title">{projects[currProject].title}</h1>
                <h3 className="description">
                  {projects[currProject].description}
                </h3>
                {projects[currProject].prototype && (
                  <h4 className="prototype">
                    Prototype:{" "}
                    <a
                      href={projects[currProject].prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Here
                    </a>
                  </h4>
                )}
                {projects[currProject].github && (
                  <h4 className="github">
                    GitHub:{" "}
                    <a
                      href={projects[currProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo
                    </a>
                  </h4>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="controls">
          <button className="left-btn" onClick={prevProject}>
            <img src={leftArr} className="arrow" alt="left arrow" />
          </button>
          <button className="launch-btn" onClick={handleLaunch}>
            LAUNCH
          </button>
          <button className="right-btn" onClick={nextProject}>
            <img src={rightArr} className="arrow" alt="right arrow" />
          </button>
        </div>
      </div>
    );
}

export default ProjectDisplay;