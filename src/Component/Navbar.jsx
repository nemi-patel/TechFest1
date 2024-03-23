import React from "react";
import "../CSS/Background.css";
// import "../CSS/Navbar.css";
import vbyte from "../Image/v-bytes.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
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
    </>
  );
}
export default Navbar;
