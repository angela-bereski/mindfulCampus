import React, { useState, useEffect } from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom';
import '../navbar.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import mindfulLogo from '../assets/mindful2.svg'
const Navbar = (props) => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }


  return (
    <div className="navbar">

{mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              {loggedUser1 ? (
                <li className="mobile-menu-item">
                  <button onClick={() => { audio.play(); handleLogout(); }}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="mobile-menu-item">
                  <button onClick={() => { audio.play(); navigate('/login'); }}>
                    Login
                  </button>
                </li>
              )}
              <li className="mobile-menu-item">
                <a
                  href="https://www.bouldermassageinstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.play()}
                >
                  BMTI
                </a>
              </li>
              {loggedUser1 && (
                <>
                  <li className="mobile-menu-item">
                    <button onClick={() => { audio.play(); navigate('/dashboard'); }}>
                      Home
                    </button>
                  </li>
                  <li className="mobile-menu-item">
                    <button onClick={() => { audio.play(); navigate('/resources'); }}>
                      Resources
                    </button>
                  </li>
                  <li className="mobile-menu-item">
                    <button onClick={() => { audio.play(); navigate('/brainbreaks'); }}>
                      Brain Breaks
                    </button>
                  </li>
                  <li className="mobile-menu-item">
                    <button onClick={() => { audio.play(); navigate('/networking'); }}>
                      Networking
                    </button>
                  </li>
                  <li className="mobile-menu-item">
                    <button onClick={() => { audio.play(); navigate('/jobboard'); }}>
                      Job Board
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

<div className="mobile-menu-button" onClick={() => {audio.play(); setMobileMenuOpen(!mobileMenuOpen)}}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        
        {loggedUser1 ? (        <img className='plainLogo' src={mindfulLogo} alt="laptop img" onClick={()=> {audio.play(); navigate("/dashboard")}}></img>
) : (        <img className='plainLogo' src={mindfulLogo} alt="laptop img" onClick={()=> {audio.play(); navigate("/")}}></img>
)}
        {/* <img className='plainLogo' src={mindfulLogo} alt="laptop img" onClick={()=> {audio.play(); navigate("/")}}></img> */}
        {loggedUser1 ? (        <div className='centerNav'>
            <img src={mindfulLogo} alt="Mindful Campus" onClick={()=> {audio.play();  navigate("/dashboard")}}/>
        </div>) : (        <div className='centerNav'>
            <img src={mindfulLogo} alt="Mindful Campus" onClick={()=> {audio.play();  navigate("/")}}/>
        </div>)}
        {/* // <div className='centerNav'>
        //     <img src={mindfulLogo} alt="Mindful Campus" onClick={()=> {audio.play();  navigate("/")}}/>
        // </div> */}
        <div className='leftNav'>
            <ul className='navList flex lg:flex-row md:flex-row'>
                {/* <li className='listItem'>
                    <button className="navButton" onClick={()=> {audio.play(); navigate("/logreg")} }>login</button>
                </li> */}
                         <li className="listItem">
            {loggedUser1 ? (
              <button className="navButton" onClick={() => { audio.play(); handleLogout(); }}>
                logout
              </button>
            ) : (
              <button
                className="navButton"
                onClick={() => {
                  audio.play();
                  navigate('/login');
                }}
              >
                login
              </button>
            )}
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