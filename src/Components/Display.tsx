import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Display = () => {
    const countcontext:any=useContext(CounterContext);
  return (
    <div>
      <h1>{countcontext.count}</h1>
      <button onClick={()=>countcontext.setcount(countcontext.count+1)}>Increase</button>
    </div>
  )
}

export default Display
