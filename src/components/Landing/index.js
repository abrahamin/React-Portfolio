import React from "react";
import "./style.css";

export default function Landing() {
  return (
    <>
      <div>
        <div className="container center-align landing-text">Hi, I'm Abe.</div>
        <div className="container center-align landing-text">
          I'm a full stack web developer.
        </div>
        <div className="container center-align landing-name">
          Abra<span className="name-color-two">ham Ha-M</span>in Hong
        </div>
        <div className="container center-align landing-name">
          Abra<span className="name-color-one">Ha-M</span>in Hong
        </div>
        <div className="container center-align landing-name">@abrahamin</div>
      </div>
    </>
  );
}
