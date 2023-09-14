import React from 'react'
import UserNav from './UserNav'
import '../home.css'
import walking from '../assets/walking.svg'
import lungs from '../assets/lungs.svg'
import doodle from '../assets/doodle.svg'

const MoreIdeas = () => {
  return (
    <div>
    <UserNav />
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descripA'>
            <span className='title1'>Reset with MORE Brain Break Ideas</span>
        </div>
        <div className='ideaDiv'>
            <div className='side1'>
                <img style={{whiteSpace:'nowrap',  display:'inline'}} src={walking} alt="Walk" />
            </div>
            <div className='side2'>
                <h3 className='title2'>Take a Walk</h3>
                <p className='title5'>Get outside. Breathe in the fresh air. Feel your feet on the ground. This can boost your mood, help to get more steps in, and refresh your mind!</p>
            </div>
        </div>
        <div className='ideaDiv'>
            <div className='side1'>
            <h3 className='title2'>Breathe Deep</h3>
                <p className='title5'>Sit comfortably and place one hand on your chest and one hand on your belly. Breathe in slowly as you count to 4. Pause and hold your breath for 4 counts. Slowly exhale for 4 counts. Repeat as many times as you like, and eventually increase your count as you become more comfortable.</p>
            </div>
            <div className='side2'>
                <img style={{whiteSpace:'nowrap',  display:'inline'}} src={lungs} alt="Walk" />
            </div>
        </div>
        <div className='ideaDiv'>
            <div className='side1'>
                <img style={{whiteSpace:'nowrap',  display:'inline'}} src={doodle} alt="Walk" />
            </div>
            <div className='side2'>
                <h3 className='title2'>Become An Artist</h3>
                <p className='title5'>Break out your adult coloring book. Grab your favorite pen and doodle away. Maybe clay is your media of choice. Whatever it is, take a break to CREATE!</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default MoreIdeas