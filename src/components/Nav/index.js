import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <>
      <nav className="Nav">
        <div className="nav-wrapper">
          <Link to="/" id="logo" className="brand-logo center">
            abrahamin
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/about" className="large-font">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="large-font">
                Portfolio
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/contact" className="large-font">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className="large-font">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
