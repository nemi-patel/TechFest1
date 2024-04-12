import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "../CSS/Background.css";
import vbyte from "../Image/v-bytes.png";
import edit from "../Image/user-profile-edit.png";
import logout from "../Image/user-profile-logout.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const userData = await fetch("http://127.0.0.1:8000/api/teacher/");
      const userJson = await userData.json();
      setUser(userJson);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData(); 
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={vbyte} alt="EVLEARN Logo" />
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
              <Link to="/gallery">Event</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <img src={vbyte} className="user-pic" onClick={toggleMenu} alt="User" />
          </ul>
        </nav>
        <div className="sub-menu-wrap" id="subMenu" style={{ display: isMenuOpen ? "block" : "none" }}>
          <div className="sub-menu">
            {user && (
              <div className="user-info">
                <img src={vbyte} alt="" style={{ width: "50px" }} />
                <h2>{user.name}</h2>
                <hr />
                <br />
              </div>
            )}
            <Link to="#" className="sub-menu-link">
              <img src={edit} alt="Edit Profile" />
              <p>Edit Profile</p>
              <span>
                <IoIosArrowForward />{" "}
              </span>
            </Link>
            <Link to="#" className="sub-menu-link">
              <img src={logout} alt="Logout" />
              <p>Logout</p>
              <span>
                <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </>
  );
}

export default Navbar;
