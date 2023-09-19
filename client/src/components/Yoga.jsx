import React, { useState } from "react";
import '../home.css'
import ReactPlayer from "react-player";
import {Link,NavLink, useNavigate} from 'react-router-dom';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import UserNav from "./UserNav";

const Yoga = () => {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

  return (
    <div>
    <UserNav />
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
        <div className='descripA'>
            <span className='title1'>Move & Groove the Mind & Body.</span>
        </div>
        <div className='yogaVids'>
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/Nnd5Slo02us`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/Nnd5Slo02us`}
                    playing={false}
                    controls={true}
                    loop={false}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    width={480}
                    height={272}
                />
            </div>
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/icfwMWYDeac`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/icfwMWYDeac`}
                    playing={false}
                    controls={true}
                    loop={false}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    width={480}
                    height={272}
                />
            </div>
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/F47hdaNXwT4`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/F47hdaNXwT4`}
                    playing={false}
                    controls={true}
                    loop={false}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    width={480}
                    height={272}
                />
            </div>
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/4pLUleLdwY4`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/4pLUleLdwY4`}
                    playing={false}
                    controls={true}
                    loop={false}
                    muted={true}
                    playsinline={true}
                    onReady={onLoadedData}
                    width={480}
                    height={272}
                />
            </div>
        </div>

    </div>
    </div>
  )
}

export default Yoga