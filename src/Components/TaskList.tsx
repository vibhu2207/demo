import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router';
interface TaskDTO{
 id:number;
task_name:string;
task_description:string;
task_date:string;
userId:string;
}
const TaskList = () => {
    const [tasks,setTask]=useState<TaskDTO[]>([]);
    const fetchData=async()=>{

  const response=await axios.get("http://localhost:8081/api/task/view-all-tasks");
  setTask(response.data);}
    useEffect(()=>{

  fetchData();
    },[]);

   
    const [currUserId,setCurrUserId]=useState('');
    const token=localStorage.getItem('token');
  const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
};
const navigate=useNavigate();

    useEffect(()=>{
      const fetchCurrUserId=async()=>{
const response=await axios.get("http://localhost:8081/api/user/me",config);
localStorage.setItem('userId',response.data.user_id);
setCurrUserId(localStorage.getItem('userId')||'');
      }
      fetchCurrUserId();
    },[]);

    
    const handleDelete=async(id:string)=>{
const response=await axios.delete(`http://localhost:8081/api/task/delete/${id}`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  data: null
});
fetchData();
    }
  
    const alltasks=useMemo(()=>{
      console.log("re rendered")
      return tasks.map(task => (
        <div key={task.id} >
          <p><strong>Task ID:</strong> {task.id}</p>
          <p><strong>Name:</strong> {task.task_name}</p>
          <p><strong>Description:</strong> {task.task_description}</p>
          <p><strong>Date:</strong> {task.task_date}</p>
          <p>{`http://localhost:8081/api/task/delete/${task.id}`}</p>

          {currUserId == task.userId && (
            <div>
              <button onClick={() => navigate(`/edit/${task.task_name}`)}>Edit</button>
              <button onClick={() => handleDelete(""+task.id)}>Delete</button>
            </div>
          )}
        </div>
      ));},[tasks]);
return (
    <div>
      <h2>Task List</h2>
      {alltasks}
    </div>
  );
};

export default TaskList
