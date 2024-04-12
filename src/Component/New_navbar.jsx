import React, { useState, useEffect } from "react";
import axios from "axios";
import vbyte from "../Image/v-bytes.png";
import { Link } from "react-router-dom";
import "../CSS/New_navbar.css"; // Import your Navbar CSS file

function New_navbar() {
  const [userData, setUserData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming you have a way to get the user's token, replace YOUR_TOKEN with the actual token
        const token = "YOUR_TOKEN";

        // Fetch user-specific data using the token
        const response = await axios.get("/teachers/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Add an empty dependency array to run this effect only once on mount

  const togglePopup = () => {
    setShowPopup(!showPopup);
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
            {userData && (
              <li>
                <span className="user-profile-link" onClick={togglePopup}>
                  {userData.student_name} {/* Display user's name */}
                </span>
                {showPopup && (
                  <div className="popup">
                    <h3>User Information</h3>
                    <p>Name: {userData.student_name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Mobile Number: {userData.mobile_number}</p>
                  </div> 
                )}
              </li>
            )}
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </>
  );
}

export default New_navbar;
