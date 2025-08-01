import './FirstPart.css';
import React from "react";
import moonFigure from "./assets/figure-on-moon.png";
import planet1 from "./assets/inner-top.png"
import planet2 from "./assets/inner-bottom.png";
import planet3 from "./assets/left-outer.png";
import planet4 from "./assets/right-outer.png";
import planet5 from "./assets/bottom-left-outer.png";
import constell1 from "./assets/constell1.png";
import constell2 from "./assets/constell2.png";
import gemini from "./assets/gemini.png";
import star from "./assets/star.png"

const FirstPart = () => {
    return (
      <div className="all-content">
        <div className="whole-moon-figure">
          <img
            src={moonFigure}
            className="moonFigure"
            alt="white figure sitting on moon while holding a fishing pole"
          />
          <div className="swing-container">
            <div className="string"></div>
            <div className="star-container">
              <a href="#contact">
                <img src={star} className="star" alt="star" />
                <p className="star-text">
                  CONTACT <br />
                  ME
                </p>
              </a>
            </div>
          </div>
        </div>
        <img src={constell1} className="top-constell" alt="constellation" />
        <img src={constell2} className="bottom-constell" alt="constellation" />
        <div className="circles">
          <div className="outer-circle">
            <div className="outer-planets">
              <img src={planet3} className="planet3" alt="planet" />
              <div className="white-planet"></div>
              <img src={planet4} className="planet4" alt="planet" />
              <div className="pink-planet"></div>
              <img src={planet5} className="planet5" alt="planet" />
              <div className="small-white-planet"></div>
            </div>
            <div className="inner-circle">
              <div className="inner-planets">
                <img src={planet1} className="planet1" alt="planet" />
                <div className="purple"></div>
                <img src={planet2} className="planet2" alt="planet" />
                <div className="light-blue"></div>
              </div>
              <div className="middle-circle"></div>
              <div className="name">
                <h1>TIFFANY</h1>
                <h1>PHAM</h1>
              </div>
            </div>
          </div>
        </div>
        <img src={gemini} alt="gemini constellation" className="gemini" />
      </div>
    );
}

export default FirstPart;