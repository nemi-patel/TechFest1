import React, { useState } from "react";
import "../CSS/Login.css";
import signup from "../Image/signup.png";
import { useHistory } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registration, setRegistration] = useState({
    student_name: "",
    college_name: "",
    email: "",
    password: "",
    mobile_number: "",
  });
  const [login, setLogin] = useState({
    full_name: "",
    email: "",
    password: "",
    mobile_no: "",
  });

  const handleregisterChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleloginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const validateLoginForm = () => {
    if (!login.email || !login.password || !login.mobile_no) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const validateRegistrationForm = () => {
    if (!registration.student_name || !registration.college_name || !registration.email || !registration.password || !registration.mobile_number) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const submiteRegistration = (e) => {
    e.preventDefault();
    if (validateRegistrationForm()) {
      axios.post("http://127.0.0.1:8000/api/students/", registration)
        .then(() => {
          alert("Registration successful!");
          setIsSignUp(false); // Reset signup mode
          setIsAuthenticated(true); // Set authenticated state
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  // const submiteLogin = (e) => {
  //   e.preventDefault();
  //   if (validateLoginForm()) {
  //     axios.post("http://127.0.0.1:8000/api/teacher/", login)
  //       .then((response) => {
  //         const userData = response.data; 
  //         if (
  //           userData.full_name === registration.student_name &&
  //           userData.email === registration.email &&
  //           userData.password === registration.password &&
  //           userData.mobile_no === registration.mobile_number
  //         ) {
  //           setIsAuthenticated(true);
  //           alert("Login successfully !!!")
  //           navigate("/home")
  //         } else {
  //           alert("Login successfully  !!!")
  //           console.log('Login failed. Invalid credentials.');
  //         }
  //       })
  //       .catch((error) => {
  //         alert("An error occurred while logging in. Please try again later.");
  //         console.log(error);
  //       });
  //   }
  // };

  const submiteLogin = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      axios.post("http://127.0.0.1:8000/api/teacher/", login)
        .then((response) => {
          const userData = response.data; 
          if (
            userData.full_name === registration.student_name &&
            userData.email === registration.email &&
            userData.password === registration.password &&
            userData.mobile_no === registration.mobile_number
          ) {
            setIsAuthenticated(true);
            alert("Login successfully !!!")
            navigate("/home");

            // Store login data and generate token
            localStorage.setItem('userData', JSON.stringify(userData));
            const token = generateToken(); // You need to implement this function to generate a token
            localStorage.setItem('token', token);
          } else {
            alert("Login failed. Invalid credentials.");
            console.log('Login failed. Invalid credentials.');
          }
        })
        .catch((error) => {
          alert("An error occurred while logging in. Please try again later.");
          console.log(error);
        });
    }
  };

  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };

   // Dummy function, replace this with your actual token generation logic
   const generateToken = () => {
    return 'dummytoken';
  };

  //-----------------------UI Design--------------------
  return (
    <div
      className={`container_login ${isSignUp ? "sign-up-mode" : ""}`}
      onSubmit={{}}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="/home" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="Full name"
                name="full_name"
                value={login.full_name}
                onChange={handleloginChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                value={login.email}
                onChange={handleloginChange}
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
                value={login.password}
                onChange={handleloginChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input
                type="text"
                placeholder="mobile_no"
                name="mobile_no"
                value={login.mobile_no}
                onChange={handleloginChange}
              />
            </div>
            {/* <input type="submit" value="Login" className="btn solid" /> */}
            <button className="btn" onClick={submiteLogin}>
              Login
            </button>
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
          
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="student_name"
                name="student_name"
                value={registration.student_name}
                onChange={handleregisterChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="collage_name"
                name="college_name"
                value={registration.college_name}
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
                type="text"
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
             Don't have an account ? Register now !!! 
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
              Have an account ? Login now !!
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
