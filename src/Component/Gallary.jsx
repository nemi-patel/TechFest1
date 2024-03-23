import React from "react";
import "../CSS/Gallary.css"
import Navbar from "./Navbar";
function Gallary() {
  return (
    <>
    <Navbar/>
      <div class="parent-container">
        <div class="child-container" id="one">
          <img
            src="https://source.unsplash.com/s4uCgs7qVQc"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/6Pou6SeJ6cY"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/QwoNAhbmLLo"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/an-artists-rendering-of-a-distant-object-in-space-fSLGThEmY2Y"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/3yQY9GPM8Mg"
            width="100%"
            height="auto"
          />
        </div>
        <div class="child-container" id="two">
          <img
            src="https://source.unsplash.com/QrlCL6DH3yU"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/7bnvNN3R_eo"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/zwk1sQqGRcQ"
            width="100%"
            height="auto"
          />
        </div>
        <div class="child-container" id="three">
          <img
            src="https://source.unsplash.com/UGNXT7QryGA"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/nc1zsYGkLFA"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/a-man-in-a-space-suit-standing-on-top-of-a-rock-XDFfAHlxw9I"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/kXLgdCmmGYk"
            width="100%"
            height="auto"
          />
          <img
            src="https://source.unsplash.com/OiiVv1iiB0A"
            width="100%"
            height="auto"
          />
        </div>
      </div>
      <div class="greeting">
        <h1>Thanks for visiting</h1>
        <a href="https://codepen.io/Mysha484">
          <i class="fa-brands fa-codepen" target="_blank"></i>
        </a>
      </div>
    </>
  );
}
export default Gallary;
