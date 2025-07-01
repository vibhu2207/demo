import React from 'react'
import { useNavigate } from 'react-router';

const LogOut = () => {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        localStorage.removeItem('token');
navigate('/login');
    }
  return (
    <div>
      <button onClick={handleSubmit}>LogOut</button>
    </div>
  )
}

export default LogOut
