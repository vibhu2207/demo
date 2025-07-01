import React, { useState } from 'react'
import TaskContext from './TaskContext'
import { useSearchParams } from 'react-router'
const TaskContextProvider = ({children}) => {
  const [x,setx]=useState('');
  return (
   <TaskContext.Provider value={{x,setx}}>
      {children}</TaskContext.Provider>
  
  )
}

export default TaskContextProvider
