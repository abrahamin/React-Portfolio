import React from "react";
import "./style.css";
import email from "../../images/email.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import phone from "../../images/phone.png";

export default function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="container center-align">
          <div className="icon-links">
            <div>
              <a
                href="https://www.linkedin.com/in/abraham-hong/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin icon" className="icons"></img>
              </a>
              <a
                href="https://github.com/abrahamin/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="github icon" className="icons"></img>
              </a>
            </div>
            <div>
              <a href="mailto:abrahamin.html@gmail.com" rel="noreferrer">
                <img src={email} alt="github icon" className="icons"></img>
              </a>
              <a href="tel:6786221669" rel="noreferrer">
                <img src={phone} alt="github icon" className="icons"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
