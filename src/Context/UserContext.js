import React, { useState } from 'react'
export const UserContext=React.createContext(null);
export const UserContextProvider=({children})=>{
    const [user,setUser]=useState();
    return(
        <UserContext.Provider value={{userid,token,userEmail}}>
            {children}
        </UserContext.Provider>
    )
}