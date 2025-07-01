import React, { JSX } from 'react'
import { Navigate, useNavigate } from 'react-router';


const PrivateRoute = ({children}:{children:React.ReactNode}) => {
    const token=localStorage.getItem('token');
 

   return token?<>{children}</>:<Navigate to='/login'></Navigate>;
  
}

export default PrivateRoute
