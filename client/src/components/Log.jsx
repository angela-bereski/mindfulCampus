import React from 'react'
import Register from './Register'
import Login from './Login'
import '../logreg.css'
import { useState } from 'react';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import { useNavigate } from 'react-router-dom';
const Log = () => {

  const navigate = useNavigate();
  const audio = new Audio(buttonSound)

  return (
    <div className='logRegForms'>
        <div>
            <Login  />
        </div>
        <br></br>
        <div>
          <p className='titleLog'>Don't have an account?</p>
          <button className="navButton5" onClick={()=> {audio.play(); navigate("/register")} }>register here</button>
        </div>
    </div>
  )
}

export default Log