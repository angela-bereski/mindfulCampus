import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Todolist = () => {
  const [todolist,setTodolist] = useState([])

  const localUser = localStorage.getItem('loggedUser')
  const loggedUser1 = JSON.parse(localUser)

  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(()=>{
      axios.get('http://localhost:8000/api/getAllTodos',{withCredentials:true})
      .then((res)=>{
          console.log(res)
          setTodolist(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  },[])

  const fetchTodoList = () => {
    axios.get('http://localhost:8000/api/getAllTodos',{withCredentials:true})
      .then((res)=>{
          console.log(res)
          setTodolist(res.data)
      }).catch((err)=>{
          console.log(err)
      });
  }

  useEffect(()=>{
    fetchTodoList();
  },[])


// const deleteTask = () => {
//   axios.delete(`http://localhost:8000//api/deleteTodo/${id}`).then((res) => {
//     console.log("Task deleted", res.data);
//     alert(`Are you sure you've completed this task?`);
//     navigate("/dashboard");
//   });
// };

const deleteTask = (id) => {
  axios.delete(`http://localhost:8000/api/deleteTodo/${id}`).then((res) => {
    console.log("Task deleted", res.data);
    alert(`You are about to permanently delete this task.`);
    fetchTodoList();
    navigate("/dashboard");
  });
};

const boxChecked = (id) => {
  const updatedTodoItem = todolist.map((todo, index)=> {
    if(id === index) {
      todo.completed = !todo.completed
    }
    return todo;
  })
  setTodolist(updatedTodoItem)
} 

  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
    <p className='title1'>{loggedUser1.firstName}'s To Do List</p>
    <div className='descripA'>

        {
          todolist.map((todo, index) => (
            todo.createdBy && loggedUser1.firstName === todo.createdBy.name ? (
              <div  key={index}>
                <p style={{textDecoration: todo.completed && "line-through"}}><input type="checkbox" checked={todo.completed} onClick={()=>boxChecked(index)} />{' '} {todo.task}</p>
                <button onClick={() => deleteTask(todo._id)}>Delete</button>
                {/* <button onClick={deleteTask}>Delete</button> */}
              </div>
            ) : null
          ))
        }


</div>
</div>
  );
};

export default Todolist;