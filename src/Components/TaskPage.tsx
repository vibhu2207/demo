import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'

const TaskPage = () => {
    const[task,setTask]=useState({
task_name:'',
task_description:'',
task_date:''
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTask((prev) => ({
          ...prev,
          [name]: value
        }));
      };

    const handleSubmit=async()=>{
        const token=localStorage.getItem('token');
        const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
};
 const response=await axios.post("http://localhost:8081/api/task/create",task, config);
 if(response.status!==201)
    throw new Error("Internal Server Error");
alert(`Task Created Successfully!! ${token}`);
    }
  return (
    <div>
      <p>Task Name: <input name="task_name" onChange={handleChange}></input></p>
      <p>Task Description: <input name="task_description" onChange={handleChange}></input></p>
      <p>Task Date: <input name="task_date" onChange={handleChange}></input></p>
      <button onClick={handleSubmit}>Create Task</button>
    </div>
  )
}

export default TaskPage
