import React, { useState } from "react";
import "../CSS/Login.css";
import signup from "../Image/signup.png";
import signin from "../Image/signin.png";
import axios from "axios";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaUser,
  FaLock,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||REGISTRATION|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// --------------------------------1st---------------------
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
    mobile_number: "",
  });

  // -------------------------------2nd-----------------------
  const handleregisterChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
    // console.log(registration);
  };
  // -------------------------------3rd-----------------------
  const submiteRegistration = () => {
    try {
      axios
        .post("http://127.0.0.1:8000/api/register/", registration) 
        .then((data) => {})
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      throw error;
    }
  };
  // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||REGISTRATION|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  //-----------------------UI Design--------------------
  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };
  //-----------------------UI Design--------------------
  return (
    <div
      className={`container_login ${isSignUp ? "sign-up-mode" : ""}`}
      onSubmit={{}}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={registration.username}
                onChange={handleregisterChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <MdEmail />
              </i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={registration.email}
                onChange={handleregisterChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaPhone />
              </i>
              <input
                type="phone_number"
                placeholder="phonenumber"
                value={registration.mobile_number}
                name="mobile_number"
                onChange={handleregisterChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={registration.password}
                onChange={handleregisterChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="confirm Password"
                // onChange={handleregisterChange}
              />
            </div>

            <button className="btn" onClick={submiteRegistration}>
              Sign Up
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src={signin} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInMode}>
              Sign in
            </button>
          </div>
          <img src={signup} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
