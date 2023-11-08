import React from 'react'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
import '../home.css'
import rocket from '../assets/icons8-rocket (1).gif'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home4 from '../assets/home4.png'

const Home = () => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)
      
    return (        
    
        <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
            <div className='descripA'>
                <span className='title1'>Resources.&nbsp;</span>
                <span className='title2'>Community.&nbsp;</span>
                <span className='title3'>Success.</span>
            </div>
            <div className='rowPics'>
                <img className='homePic' style={{whiteSpace:'nowrap',  display:'inline'}} src={home1} alt="blast off..." />
                <img className='homePic' style={{whiteSpace:'nowrap',  display:'inline'}} src={home4} alt="blast off..." />
                <img className='homePic' style={{whiteSpace:'nowrap',  display:'inline'}} src={home2} alt="blast off..." />
            </div>
            <div className='descrip2A'>
                <p className='title5'>Welcome to BMTI's Mindful Campus,<br/>your productivity launchpad.<img style={{whiteSpace:'nowrap',  display:'inline'}} className='rocket' src={rocket} alt="blast off..." /></p>
                <button className="navButton" onClick={()=> {audio.play(); navigate("/login")} }>enter</button>
            </div>


        </div>
    )
}

export default Home