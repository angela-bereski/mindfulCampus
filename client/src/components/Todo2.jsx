import React, {useState} from 'react'
import {nanoid} from 'nanoid';

const ToDoList = () => {
    const [list, setList] = useState([])
  const [item, setItem] = useState("");

  const localUser = localStorage.getItem('loggedUser')
  const loggedUser1 = JSON.parse(localUser)


  const addItem = (e) => {
    e.preventDefault()
    const newItem = {
        createdBy:{
            id:loggedUser1._id,
            name:loggedUser1.firstName
        },
      item,
      completed: false
    }
    setList([...list, newItem]);
    setItem("");
  }
  


  const boxChecked = (id) => {
    const updatedTodoItem = list.map((todo, index)=> {
      if(id === index) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    setList(updatedTodoItem)
  } 
    // if (index.target.style.textDecoration) {
    //   index.target.style.removeProperty("text-decoration");
    // } else {
    //   index.target.style.setProperty("text-decoration", "line-through");
    // }
  

  const deleteItem = (id) => {
    const itemDeleted = list.filter((todo)=> {
      return todo.id !== id
    })
    setList(itemDeleted)
  }


  return (
    <div>
      <div>
        <h1>To Do List:</h1>
        {
          list.map((todo, index)=>(
            <div key={index}>
              <h2><span style={{textDecoration: todo.completed && "line-through"}}>{todo.item}</span> 
                <input type="checkbox" checked={todo.completed} onClick={()=>boxChecked(index)} />
                <button onClick={()=> deleteItem(todo.id)}>Delete</button>
              </h2>
            </div>
          ))
        }
      </div>
      <div>
        <h1>Add a New Item</h1>
        <form onSubmit={addItem}>
          <input onChange={e => setItem(e.target.value)} value={item} />
          <button>Add Item</button>
        </form>
      </div>
    </div>
  )
}

export default ToDoList