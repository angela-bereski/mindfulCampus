import React from 'react'
import '../home.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
const ThankYouReg = () => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descripA'>
            <span className='title1'>Congrats! You are officially registered with BMTI's Mindful Campus.</span>
            <span className='title2'>Welcome to the family.&nbsp;</span>
        </div>
        <div className='descrip2A'>
            <p className='title5'>Please login to experience all our community has to offer!</p>
            <button className="navButton" onClick={()=> {audio.play(); navigate("/logreg")} }>login</button>
            </div>
    </div>
  )
}

export default ThankYouReg