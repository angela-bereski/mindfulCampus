import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom';
import '../navbar.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import mindfulLogo from '../assets/mindful2.svg'
const Navbar = () => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

  return (
    <div className="navbar">
        <img className='plainLogo' src={mindfulLogo} alt="laptop img" onClick={()=> {audio.play(); navigate("/")}}></img>
        <div className='centerNav'>
            <img src={mindfulLogo} alt="Mindful Campus" onClick={()=> {audio.play(); navigate("/")}}/>
        </div>
        <div className='leftNav'>
            <ul className='navList flex lg:flex-row md:flex-row'>
                <li className='listItem'>
                    <button className="navButton" onClick={()=> {audio.play(); navigate("/logreg")} }>login</button>
                </li>
                <li className = 'listItem'>
                    <a href="https://www.bouldermassageinstitute.com" target="_blank" rel="noopener noreferrer">
                    <button className="navButton" onClick={()=> {audio.play()}}>bmti</button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar