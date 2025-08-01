import React, {useState} from 'react';
import "./ContactPart.css";
import topStar from "./assets/top-star.png";
import midStar from "./assets/middle-star.png";
import bottomStar from "./assets/bottom-star.png";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import gmail from "./assets/gmail.png";
import planet from "./assets/planet.png";

const ContactPart = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const params = new URLSearchParams();

      for (const [key, value] of formData.entries()) {
        params.append(key, value);
      }

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxwOtIja9TCUA91jvJvzzRiT6wCKgXwqhbwi7ySj-3oNOo8BeD7oG_gJc6XFPua361poA/exec",
          {
            method: "POST",
            body: params,
          }
        );

        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
          setMessage("");
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
      }
    };
    return (
      <div id="contact" className="contact-content">
        <div className="left-side">
          <div className="stars">
            <img src={topStar} alt="shooting star" className="top-star" />
            <img src={midStar} alt="shooting star" className="middle-star" />
            <img src={bottomStar} alt="shooting star" className="bottom-star" />
          </div>
          <div className="contact-icons">
            <a href="https://linkedin.com/in/tiffany-pham-63a7392a2">
              <img src={linkedin} alt="linkedin logo" className="linkedin" />
            </a>
            <a href="https://github.com/tifpham021">
              <img src={git} alt="git logo" className="git" />
            </a>
            <a href="mailto:tiffanypham021@gmail.com">
              <img src={gmail} alt="gmail logo" className="gmail" />
            </a>
          </div>
        </div>
        <div className="right-side">
          <h2>CONTACT ME</h2>
          <div className="form">
            <div className="contact-text">
              <form className="form-content" onSubmit={handleSubmit}>
                <div className="group name-group">
                  <label>name:</label>
                  <input className="name-input" name="name" required></input>
                </div>
                <div className="group email-group">
                  <label>email:</label>
                  <input className="email-input" type="email" name="email" required></input>
                </div>
                <div className="group message-group">
                  <label>message:</label>
                  <input
                    className="message-input"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></input>
                </div>
                <button className="launch" type="submit">
                  LAUNCH
                </button>
              </form>
            </div>
            <img src={planet} alt="blue planet" className="planet" />
          </div>
        </div>
      </div>
    );
}

export default ContactPart;