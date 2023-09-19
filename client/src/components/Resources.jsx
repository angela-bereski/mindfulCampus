import React from 'react'
import UserNav from './UserNav'
import '../home.css'
import massage from '../assets/massageResources.svg'
import biz from '../assets/businessResources.svg'
import doodle from '../assets/doodle.svg'
import soap from '../assets/SOAPChart.pdf'

const Resources = () => {
  return (
    <div>
    <UserNav />
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descripA'>
            <span className='title1'>Resources for your SUCCESS</span>
        </div>
        <div className='ideaDiv'>
            <div className='side1'>
                <img style={{whiteSpace:'nowrap',  display:'inline'}} src={massage} alt="Walk" />
            </div>
            <div className='side2'>
                <h3 className='title2'>Massage Resources</h3>
                <p className='title5'><a href = {soap} target = "SOAPChart" >Downloadable SOAP Chart</a></p>
                <p className='title5'><a href={"https://dpo.colorado.gov/HPPP"} target="_blank" rel="noopener noreferrer">DORA</a></p>
            </div>
        </div>
        <div className='ideaDiv'>
            <div className='side1'>
            <h3 className='title2'>Business Resources</h3>
            <p className='title5'><a href={"https://saundersmassagetherapy.com/bodyworkers-business-coach/"} target="_blank" rel="noopener noreferrer">BMTI Instructor Nancy's Business Coaching</a></p>            
            <p className='title5'><a href={"https://a.co/d/gWKXcse"} target="_blank" rel="noopener noreferrer">Suzanne Eccher's 90 Day Success Express</a></p>            

            </div>
            <div className='side2'>
                <img style={{whiteSpace:'nowrap',  display:'inline'}} src={biz} alt="Walk" />
            </div>
        </div>

    </div>
</div>
  )
}

export default Resources