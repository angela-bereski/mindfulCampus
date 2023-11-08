import React from 'react'
import NetworkAdd from './NetworkAdd';
import '../logreg.css'
import '../home.css'
import { useState } from 'react';
import NetworkingList from './NetworkingList';
import UserNav from './UserNav';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
const Networking = () => {

  const navigate = useNavigate();
  const audio = new Audio(buttonSound)

  return (
    <div >
        <UserNav />
        <div lassName='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descrip2A'>
            <button className="jobButton" onClick={()=> {audio.play(); navigate("/addnewnetwork")} }>add a new networking profile</button>
        </div>
            <NetworkingList />
        </div>


    </div>
  )
}

export default Networking