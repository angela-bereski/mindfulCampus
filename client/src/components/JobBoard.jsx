import React from 'react'
import '../home.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import JobAdd from './JobAdd';
import JobList from './JobList';
import UserNav from './UserNav';

const JobBoard = () => {

  const navigate = useNavigate();
  const audio = new Audio(buttonSound)

  return (
    <div >
    <UserNav />
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descrip2A'>
            <button className="jobButton" onClick={()=> {audio.play(); navigate("/addnewjob")} }>add a new job</button>
        </div>
        <JobList />
    </div>


</div>
  )
}

export default JobBoard