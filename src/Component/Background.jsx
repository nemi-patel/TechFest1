import React, { useState, useEffect } from "react";
import "../CSS/Background.css";
import "../CSS/Navbar.css";
import { IoIosArrowForward } from "react-icons/io";
import vbyte from "../Image/v-bytes.png";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import edit from "../Image/user-profile-edit.png";
import logout from "../Image/user-profile-logout.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const BackgroundVideo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [user, setUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store logged-in user data
  const navigate = useNavigate(); // Initialize useNavigate


  // const fetchUserData = async () => {
  //   try {
  //     const userData = await fetch("http://127.0.0.1:8000/api/teacher/");
  //     const userJson = await userData.json();
  //     setUser(userJson);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  useEffect(() => {
    // Fetch user data from local storage on component mount
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setLoggedInUser(userData);
    }
  }, []);
    const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    // navigate('/');
    window.location.href = "/";
  };
  // useEffect(() => {
  //   try {
  //     axios
  //       .get("http://127.0.0.1:8000/api/teacher/")
  //       .then((res) => {
  //         console.log(res);
  //         setUser(res.data);
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     throw error;
  //   }
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            {loggedInUser && (
              <div className="user-info">
                <img src={vbyte} alt="" style={{ width: "50px" }} />
                <h2>{loggedInUser.full_name}</h2><br/>
                <hr />
                <br />
                <h2>{loggedInUser.email}</h2>
              </div>
            )}
            <Link to="#" className="sub-menu-link">
              <img src={edit} alt="Edit Profile" />
              <p>Edit Profile</p>
              <span>
                <IoIosArrowForward />{" "}
              </span>
            </Link>
            <Link to="#" className="sub-menu-link" onClick={handleLogout}>
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
      <div className="content_back">
        <h1>{typeEffect}</h1>
        {/* <p></p><br/>
        <p>1st Women's University Of Gujarat</p> */}
      </div>
    </div>
  );
};

export default BackgroundVideo;
