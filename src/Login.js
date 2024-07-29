import React from 'react';
import "./login.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function Login() {

  const [inputData, setInputData] = useState({
    Username:"",
    Password:"",
  });
  

  let handleSubmit = (e) => {
    e.preventDefault();
    validateValues(inputData);
  };

  const validateValues = (inputData) => {

    if (inputData.Username.length === 0) {
      alert("Please enter the Username !!! ");
      return false;
    }else if (inputData.Password.length === 0) {
      alert("Please enter the Password!!!");
      return false;
    }else {
      return true;
    }
  };

  return (
    <div>
    <section id='login'>
      <form onSubmit={handleSubmit}>
        <div class="container">
            <h1>Login</h1>
            <div>
             <input
              type="text"
              name='Username'
              placeholder="Username"
              className="login"
              onChange={(e) =>
                setInputData({ ...inputData, Username: e.target.value })
              }
            />
            
          </div>
          <div>
             <input
              type="password"
              name='Password'
              placeholder="Password"
              className="login"
              onChange={(e) =>
                setInputData({ ...inputData, Password: e.target.value })
              }
            />
          </div>
          <div class="con">
             <input
             id='checkbox'
             type="checkbox"
             name="rememberme"
             />
            <span id='rem-me'>Remember ME</span>
            <span id='for-pass'><a href='#'>Forgot Password</a></span> 
          </div> <br/>
          <div>
          <Link to="/"> <button
            type='submit'
            name="submit"
            Value="Login"
            className='login btn btn-danger'
            >Login</button></Link>
          </div>
          <div>
            <p>Don't have account?<a href="Register.js">
              &nbsp;&nbsp;Register</a></p>
          </div>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Login
