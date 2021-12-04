import React from "react";
import "./style.css";
import headshot from "../../images/headshot.png";

export default function About() {
  return (
    <>
      <div className="About">
        <img src={headshot} alt="headshot" className="headshot" />
        <div className="container center-align">
          <div className="abraham">
            <div className="fullname">
              <span className="name-one">Abra</span>
              <span className="name-two">ham Ha-M</span>
              <span className="name-three">in</span> Hong
            </div>
            <div className="nametag">
              @<span className="name-one">abra</span>
              <span className="name-two">ham</span>
              <span className="name-three">in</span>
            </div>
          </div>
          <div className="textbox">
            <p className="bio">
              I'm a full-stack web developer proficient in MERN stack, with an
              emphasis on responsive, mobile-first web design. I pride myself in
              being capable of producing deployment-ready code while working in
              an agile workflow environment and contributing to a positive
              collaborative experience. Being confident in completing tasks in a
              timely manner as a methodical and prudent problem solver, I'm
              inspired to approach programming challenges from various
              perspectives and collaborate with others as a means to produce
              multifaceted products that please the client. With each project,
              my passion is to create a memorable user experience and shape a
              culture of premium web experiences and products.
              <ul className="bullets">
                <li>
                  B.S. from Wake Forest University - Major in Biology, Minor in
                  Chemistry
                </li>
              </ul>
              <div className="skills">
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-jquery-plain-wordmark colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-express-original colored"></i>
                <i class="devicon-mysql-plain-wordmark colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
