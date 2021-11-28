import React from "react";
import "./style.css";

export default function Portfolio() {
  return (
    <>
      <div>
        <div class="parallax-container">
          <div class="parallax">
            <img src="images/parallax1.jpg" alt="image1" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <h2 class="header">Parallax</h2>
            <p class="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img src="images/parallax2.jpg" alt="image2" />
          </div>
        </div>
      </div>
    </>
  );
}
