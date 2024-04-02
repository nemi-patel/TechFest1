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
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/03/img-20240330-wa00066423348321908089757-300x225.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/03/img-20240330-wa00045766916288325398024-300x211.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/02/img-20240225-wa0008101957376952966474.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/02/img-20240225-wa0008101957376952966474.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/02/img-20240225-wa0008101957376952966474.jpg"
            width="100%"
            height="auto"
          />
        </div>
        <div class="child-container" id="two">
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/02/img-20240225-wa0008101957376952966474.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/03/img-20240330-wa00033240459084344212276-300x225.jpg"
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
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/03/img-20240330-wa00057259485435206742005-300x210.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="https://vvwusurat.ac.in/wp-content/uploads/2024/03/img-20240330-wa00066423348321908089757-300x225.jpg"
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
