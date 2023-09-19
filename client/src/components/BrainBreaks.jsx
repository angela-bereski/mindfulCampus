import React from 'react'
import '../home.css'
import yogaBrain from '../assets/yoga.svg'
import mediBrain from '../assets/meditation.svg'
import more from '../assets/moreBrainIdeas.svg'
import {Link,NavLink, useNavigate} from 'react-router-dom';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import UserNav from './UserNav'

const BrainBreaks = () => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)
  
  return (
    <div>
    <UserNav />
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descripA'>
            <span className='title1'>Take a break. Your brain will thank you.</span>
        </div>
        <div className='descrip2A'>
            <p className='title5'>BRAIN BREAKS are short exercises in movement or mindfulness that help to rest and refocus the brain.<br/>10-20 minutes is all you need to reset and increase productivity!</p>
        </div>
        <div className='rowPics'>
                <img  style={{whiteSpace:'nowrap',  display:'inline'}} src={yogaBrain} alt="yoga brain" onClick={()=> {audio.play(); navigate("/yoga")} }/>
                <img  style={{whiteSpace:'nowrap',  display:'inline'}} src={mediBrain} alt="meditation brain" onClick={()=> {audio.play(); navigate("/meditation")} }/>
                <img  style={{whiteSpace:'nowrap',  display:'inline'}} src={more} alt="meditation brain" onClick={()=> {audio.play(); navigate("/brainbreaks/more")} }/>
        </div>
    </div>
    </div>
  )
}

export default BrainBreaks