import React from 'react';
import "./ContactPart.css";
import topStar from "./assets/top-star.png";
import midStar from "./assets/middle-star.png";
import bottomStar from "./assets/bottom-star.png";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import gmail from "./assets/gmail.png";
import planet from "./assets/planet.png";

const ContactPart = () => {
    return (
      <div className="contact-content">
        <div className="left-side">
          <img src={topStar} alt="shooting star" className="top-star" />
          <img src={midStar} alt="shooting star" className="middle-star" />
          <img src={bottomStar} alt="shooting star" className="bottom-star" />
          <div className="contact-icons">
            <img src={linkedin} alt="linkedin logo" />
            <img src={git} alt="git logo" />
            <img src={gmail} alt="gmail logo" />
          </div>
        </div>
        <div className="right-side">
          <h2>CONTACT ME</h2>
          <div className="form">
            <div className="contact-text">
              <form className="form-content">
                <div className="group name-group">
                  <label>name:</label>
                  <input className="name-input"></input>
                </div>
                <div className="group">
                  <label>email:</label>
                  <input></input>
                </div>
                <div className="group">
                  <label>message:</label>
                  <input className="message-input"></input>
                </div>
                <button className="launch">LAUNCH</button>
              </form>
            </div>
            <img src={planet} alt="blue planet" className="planet" />
          </div>
        </div>
      </div>
    );
}

export default ContactPart;