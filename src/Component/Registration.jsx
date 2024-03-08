import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Login.css";

function Registration() {
  return (
    <>
      <div className="wrapper">
        <h1>Sign UP</h1>
        <form action="#">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-Enter Password" />
        </form>
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            I agree to these<a href="#">Terms & Conditions</a>
          </label>
        </div>
        <button>Sign Up</button>
        <div className="member">
          Already a member? <Link to="/login">Login here</Link>
        </div>
      </div>
    </>
  );
}

export default Registration;
