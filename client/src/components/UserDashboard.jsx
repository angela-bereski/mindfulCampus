import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserNav from './UserNav';
import brainBreak from '../assets/brainbreak.svg'
import studentResources from '../assets/studentResources.svg'
import networking from '../assets/networking.svg'
import jobBoard from '../assets/jobBoard.svg'
import ReactPlayer from "react-player";
import '../userDash.css'
import {Link,NavLink, useNavigate, useParams} from 'react-router-dom';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import Todolist from './Todolist';
import Todoform from './Todoform';
import Todo2 from './Todo2';
import CountdownAdd from './CountdownAdd';
import CountdownView from './CountdownView';
import Confetti from 'react-confetti';



const UserDashboard = () => {
  const [todolist,setTodolist] = useState([])

  const localUser = localStorage.getItem('loggedUser')
  const loggedUser1 = JSON.parse(localUser)

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };


  // const { id } = useParams();
  const navigate = useNavigate();
  const audio = new Audio(buttonSound)


  // const [arr, setArr] = useState([])
  // get all per user
  // useEffect(() => {
  //     axios.get(`http://localhost:8000/api/user/${id}`, {withCredentials:true})
  //         .then(res => { console.log(res.data); setArr(res.data) })
  //         .catch(err => console.log("getall error: " + err))
  // }, [])

  // useEffect(() => {
  //   // Fetch user data from the server
  //   axios
  //     .get('http://localhost:8000/api/user/${id}')
  //     .then((res) => {
  //       console.log(res.data.first);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


  return (
    <div>
      <UserNav />
      <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='title1'>Welcome, {loggedUser1.firstName} !</div>
        <div className='orgStuff'>
          <div className='orgWithin'>
            <Todolist/>
          </div>
          <div className='orgWithin'>
            < CountdownView />
          </div>
        </div>
        <div className='dashSidebar'>
          <div className='dashItems'>
            <img style={{whiteSpace:'nowrap',  display:'inline'}} src={studentResources} alt="Student Resources" onClick={()=> {audio.play(); navigate("/resources")} }/>
            <img style={{whiteSpace:'nowrap',  display:'inline'}} src={brainBreak} alt="Brain Breaks" onClick={()=> {audio.play(); navigate("/brainbreaks")} }/>
            <img style={{whiteSpace:'nowrap',  display:'inline'}} src={networking} alt="Networking" onClick={()=> {audio.play(); navigate("/networking")} }/>
            <img style={{whiteSpace:'nowrap',  display:'inline'}} src={jobBoard} alt="Job Board" onClick={()=> {audio.play(); navigate("/jobboard")} }/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard