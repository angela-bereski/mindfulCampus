import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom';
import '../usernav.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import axios from "axios";
import { useEffect } from 'react';
const UserNav = (props) => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

        // 3) GET THE CURRENT USER USING CREDENTIALS FROM TOKEN
    // -> You can see this token in the memory section of developer tools

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
        // axios.get('http://localhost:8000/api/logout')
        // .then((res)=>{
        //     history.push('/login')
        // }).catch((err)=>console.log(err))
    }

  return (
    <div className="navbar2">
        <div className='leftNav2'>
            <ul className='navList2 flex lg:flex-row md:flex-row'>
            <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {audio.play(); navigate("/dashboard")} }>home</button>
                </li>
                <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {audio.play(); navigate("/resources")} }>resources</button>
                </li>
                <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {audio.play(); navigate("/brainbreaks")} }>brain breaks</button>
                </li>
                <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {audio.play(); navigate("/networking")} }>networking</button>
                </li>
                <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {audio.play(); navigate("/jobboard")} }>job board</button>
                </li>
                {/* <li className='listItem2'>
                    <button className="navButton2" onClick={()=> {handleLogout(); audio.play()} }>logout</button>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default UserNav