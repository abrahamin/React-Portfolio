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
          <ul id="nav-mobile" className="left">
            <li>
              <Link to="/about" className="headers">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="headers">
                PORTFOLIO
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/contact" className="headers">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/resume" className="headers">
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
