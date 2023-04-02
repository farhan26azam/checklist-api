import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./Signup.css"
import axios from 'axios';
import { Link} from "react-router-dom";

const baseURL = "https://d075-39-55-212-215.in.ngrok.io/user/signup/";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    email: ""
  });

const [data, setData] = useState([]);
const [refresh, setRefresh] = useState(0)
const {username, password, email} = signUpData;

const handleChange = (e) =>{
  setSignUpData({...signUpData, [e.target.name]: e.target.value});
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if (username && password && email){
    const formData = new FormData();
    formData?.append("username",signUpData?.username);
    formData?.append("password",signUpData?.password);
    formData?.append("email",signUpData?.email);
    console.log("Sign up data: : ", signUpData);

    axios.post(baseURL, formData).
    then(res => {
      setSignUpData([...data, res.data]);
      setSignUpData({ username: "", password: "", email: ""});
    })
    .catch(err => console.log(err))
  }
  // console.log("Sign up data: : ", signUpData);
}

const handleUpdate=()=>{
  // if(username && password && email){
  //   console.log("Sign up data: : ", signUpData);
  //   axios.put(baseURL, signUpData).then(res =>{
  //     setSignUpData({username: "", password: "", email:""});

  //   }).catch(err => console.log(err))
  // }
  
}

useEffect(() => {
  // axios.get(baseURL)
  //     .then(res => {
  //         setData(res.data)
  //     })
  //     .catch(err => console.log(err))
  // console.log(data);
}, [refresh]);


  return (
    <div className='sign-up'>
      <form className='form' onSubmit={handleSubmit} method="submit">
        <div><h1>    
        Sign up
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
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
        type="email" 
        onChange={handleChange} 
        name="email" 
        value={email}
        className="form-control" 
        id="email" 
        placeholder="Enter email"/>
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
      <div className='buttons'>
        <button type="submit" className="submit-button"  onClick={() => {
                            handleUpdate()
                        }}>Submit</button>
        <Link to="/Login" className="already-button">Already a user?</Link>
      </div>
    </form>


  </div>
  )
}

export default Signup