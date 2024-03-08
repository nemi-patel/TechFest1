import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Login.css";

function Login() {
  return (
    <>
      <div className="wrapper">
        <h1>Login</h1>
        <form action="#">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="recover">
            {/* <a href="#">Forget Password ?</a> */}
          </div>
        </form>
        <button>Login</button>
        <div className="member">
          Not a member ? <Link to="/registration">Registration here</Link>
        </div>
      </div>
    </>
  );
}
export default Login;
