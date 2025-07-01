import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router';

const EditTaskPage = () => {
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
          const token=localStorage.getItem('token');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
};
const { taskName } = useParams<{ taskName: string }>();
const decodedtaskname=decodeURIComponent(taskName||'');
          const handleSubmit=async()=>{
            const newtask={
                task_name:task.task_name,
                task_description:task.task_description,
                task_date:task.task_date
            }
             
const response=await axios.put(`http://localhost:8081/api/task/editTask/${encodeURIComponent(decodedtaskname)}`,newtask,config);
if(response.status !==200)
    throw new Error("Could not complete request")
alert("task updated successfully");
          }
  return (
    <div>
      <p>Task Name: <input name="task_name" onChange={handleChange}></input></p>
      <p>Task Description: <input name="task_description" onChange={handleChange}></input></p>
      <p>Task Date: <input name="task_date" onChange={handleChange}></input></p>
      <button onClick={handleSubmit}>Edit Task</button>
    </div>
  )
}

export default EditTaskPage
