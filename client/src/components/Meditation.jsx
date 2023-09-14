import '../home.css'
import React, { useState } from "react";
import '../home.css'
import ReactPlayer from "react-player";
import {Link,NavLink, useNavigate} from 'react-router-dom';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import UserNav from "./UserNav";


const Meditation = () => {

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
            <span className='title1'>Quiet the mind. Find your center.</span>
        </div>
        <div className='yogaVids'>
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/euCACO-KtHE`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/euCACO-KtHE`}
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
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/pFl4TEjF600`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/pFl4TEjF600`}
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
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/xXQ2o6IJ2bg`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/xXQ2o6IJ2bg`}
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
            <div className='yogaVideo' style={{ opacity: isVideoLoaded ? 1 : 0 }} onClick={()=> {audio.play(); navigate(`https://youtu.be/CqnWMPuyT0g`)} }>
                <ReactPlayer
                    className='player'
                    url={`https://youtu.be/CqnWMPuyT0g`}
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

export default Meditation