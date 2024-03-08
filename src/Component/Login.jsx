import React, { useState } from 'react';
import '../CSS/Login.css'; // Import your CSS file
import signup from '../Image/signup.png';
import signin from '../Image/signin.png';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGoogle , FaUser , FaLock} from 'react-icons/fa'; // Import the LinkedIn icon from Font Awesome
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"><FaUser /></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
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
              <i className="fas fa-user"><FaUser /></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"><MdEmail /></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
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
