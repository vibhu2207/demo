import React, { useState } from 'react'
export const CounterContext=React.createContext(null);
export const CounterProvider=({children})=>{
    const [count,setcount]=useState(0);
    return(
        <CounterContext.Provider value={{count,setcount}}>
            {children}
        </CounterContext.Provider>
    )
}
