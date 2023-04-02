import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseURL='https://www.melivecode.com/api/login';

const Login = () => {

  const [loginData, setLoginData] = useState({
    username: "",
    password:""
  })

    function showPassword() {
        var passShow = document.getElementById("myInput");
        if (passShow.type === "password") {
          passShow.type = "text";
        } else {
          passShow.type = "password";
        }
      }

  return (
    <React.Fragment>
    <div className='log-in'>
      <form className='form'>
        <div>
          <h1>  
          Log In
          </h1>
        </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input id="myInput" type="password" className="form-control" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input  onClick={showPassword} type="checkbox" className='show-password'></input>
      Show password
    </div>
      <button  type="submit" className="submit-button">Submit</button>
      <Link type="submit" to="/" className="not-button">Sign up</Link>
  
    </form>
    </div>
    </React.Fragment>

  )
}

export default Login