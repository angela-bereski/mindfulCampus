import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Todoform = () => {
  const [task, setTask] = useState('');
  const [errors, setErrors] = useState({});
  const [todolist, setTodolist] = useState([]); // Moved state here

  const localUser = localStorage.getItem('loggedUser');
  const loggedUser1 = JSON.parse(localUser);

  const navigate = useNavigate();

  const fetchTodoList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getAllTodos', {
        withCredentials: true,
      });
      setTodolist(response.data);
    } catch (error) {
      console.error('Error fetching todo list:', error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []); // Fetch the initial list of tasks when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/api/createTodo', {
        createdBy: {
          id: loggedUser1._id,
          name: loggedUser1.firstName,
        },
        task,
        completed: false,
      });

      setTask('');
      fetchTodoList(); // Fetch updated task list after adding a task
      navigate('/dashboard');
    } catch (err) {
      const errorResponse = err.response.data.errors;
      setErrors(errorResponse);
    }
  };

  return (
    <div className="font-montserrat flex min-h-full p-3 pt-5">
      <form
        className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="p-6">
          <p className="text-3xl pl-3">Add a Task</p>
          <div className="mt-4 relative">
            <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
              <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
            </div>
            <input
              className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
              placeholder="Add a task!"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            {errors.task ? (
              <p className="text-red-600 text-center">{errors.task.message}</p>
            ) : null}
          </div>
          <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest">
            Submit
          </button>
        </div>
      </form>
      <div>
        {/* Render your todolist here */}
      </div>
    </div>
  );
};

export default Todoform;
