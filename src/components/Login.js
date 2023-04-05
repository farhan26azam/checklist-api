import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const baseURL='https://drftest.herokuapp.com/user/login/';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const [loginData, setLoginData] = useState({
    username: "",
    password:""
  })
  const {username, password} = loginData;

  const handleChange = (e) =>{
    setLoginData({...loginData, [e.target.name]: e.target.value});
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
  if (username && password){
    const formData = new FormData();
    formData?.append("username",loginData?.username);
    formData?.append("password", loginData?.password);
    formData?.append("email", loginData?.email);
    console.log("Login data: : ", loginData);

    const response = await axios.post(baseURL, formData);
    console.log(response);

    if(response.status === 200){
      console.log("yes");
        navigate("/List");
      }
  }

  

  
  }

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
    <label>Username</label>
    <input 
        type="text" 
        onChange={handleChange} 
        name="username" 
        value={username}
        className="form-control" 
        id="username" 
        placeholder="Enter name"/>


    {/* <input type="text" className="form-control" id="username" placeholder="Enter username"/> */}
  </div>
  <div className="form-group">
    <label>Password</label>
    <input 
        type="password" 
        className="form-control" 
        id="password"
        name="password" 
        value={password} 
        onChange={handleChange} 
        placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input  onClick={showPassword} type="checkbox" className='show-password'></input>
      Show password
    </div>
      <button  type="submit" onClick={handleSubmit} className="submit-button">Submit</button>
      <Link type="submit" to="/" className="not-button">Sign up</Link>
  
    </form>
    </div>
    </React.Fragment>

  )
}

export default Login