import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
 const navigate=useNavigate();
    const [authReq,setAuthReq]=useState({
      email:'',
      password:''
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthReq((prev) => ({
      ...prev,
      [name]: value
    }));
  };


const submitHandler = async(e:any)=>{
      e.preventDefault();
  const response=await axios.post("http://localhost:8081/api/user/login",authReq);
  if(response.status!==200)
    throw new Error("Login Failed");
  if(response.data.token==null)
    throw new Error("Invalid Credentials");
  localStorage.setItem('token',response.data.token);
  alert("Login Sucessfull");
  navigate('/');
}
  

 


  return (
    <div>
      <h1>Login</h1>
      <p>Email:<input name="email" onChange={handleChange}></input></p>
       <p>Password:<input name="password" onChange={handleChange } ></input></p>
    <button onClick={submitHandler}>Login</button>
    </div>
  )

};
export default Login
