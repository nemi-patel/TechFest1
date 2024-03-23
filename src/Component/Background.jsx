import React from "react";
import "../CSS/Background.css";
import "../CSS/Navbar.css";
import vbyte from "../Image/v-bytes.png";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const BackgroundVideo = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "VANITA VISHRAM WOMEN'S UNIVERSITY",
      "(Managed By : Vanita Vishram,Surat)",
      "1st Women's University Of Gujarat",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source
          src={require("../Video/background_video.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <header>
        <div class="logo">
          <img src={vbyte} alt="EVLEARN Logo" />
          {/* <span>VANITA</span> */}
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/event_photo">Event</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
        <label for="nav_check" class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
      <div className="content_back">
        <h1>{typeEffect}</h1>
        {/* <p></p><br/>
        <p>1st Women's University Of Gujarat</p> */}
      </div>
    </div>
  );
};

export default BackgroundVideo;
