import axios from 'axios';
import React, { useState } from 'react'

const SignUp = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const user={
name:name,
email:email,
password:password
  }
  const handleSubmit=async()=>{
const response=await axios.post("http://localhost:8081/api/user/register",user);
if (response.status !== 201)
    throw new Error("An error occured");
alert("Registeration Successfull");
setName('');setEmail('');setPassword('');
  }
  return (
    <div>
      <p>Name: <input name="name" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name}></input></p>
    <p>Email: <input name="email" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} value={email}></input></p>
    <p>Password: <input type="password" placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)}></input></p>
    <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}

export default SignUp
