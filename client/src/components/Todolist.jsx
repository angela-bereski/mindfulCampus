import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Todolist = () => {
  const [todolist,setTodolist] = useState([])

  const localUser = localStorage.getItem('loggedUser')
  const loggedUser1 = JSON.parse(localUser)

  const { id } = useParams();

  const navigate = useNavigate()
  const audio = new Audio(buttonSound)

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

// const deleteTask = (id) => {
//   axios.delete(`http://localhost:8000/api/deleteTodo/${id}`).then((res) => {
//     console.log("Task deleted", res.data);
//     alert(`You are about to permanently delete this task.`);
//     fetchTodoList();
//     navigate("/dashboard");
//   });
// };

const deleteTask = (id) => {
  const confirmation = window.confirm('Are you sure you want to delete this task?');
  if (confirmation) {
    axios
      .delete(`http://localhost:8000/api/deleteTodo/${id}`)
      .then((res) => {
        console.log('Countdown deleted', res.data);
        setTodolist((prevList) => prevList.filter((job) => job._id !== id));
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
    <div className='homeHome1 flex-row flex p-1 justify-around flex-wrap rounded' >
    <p className='title2Dash'>To Do List
        <span className="tooltip">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="tooltiptext">
            Your digital assistant for staying organized. Use it to jot down tasks, chores, and goals you need to accomplish. Check them off as you complete them or delete to fully remove from the list, and stay on top of your daily, weekly, or long-term responsibilities effortlessly.
          </span>
        </span>
    </p>
    
    <div className='orgWithin'>

        {
          todolist.map((todo, index) => (
            todo.createdBy && loggedUser1.firstName === todo.createdBy.name ? (
              <div  key={index}>
                <p style={{textDecoration: todo.completed && "line-through"}}><input type="checkbox" checked={todo.completed} onClick={()=>boxChecked(index)} />{' '} {todo.task} <button className="navButtonMini" onClick={() => deleteTask(todo._id)}>delete</button>
</p>
                {/* <button onClick={deleteTask}>Delete</button> */}
              </div>
            ) : null
          ))
        }
    </div>
    <button className="navButton3" onClick={()=> {audio.play(); navigate("/addToDo")} }>add a task</button>
</div>
  );
};

export default Todolist;