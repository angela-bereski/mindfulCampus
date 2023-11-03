

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'

const CountdownView = () => {
  const [countdownItems, setCountdownItems] = useState([]);
  const [countdownlist, setCountdownlist] = useState([]);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight);


  const localUser = localStorage.getItem('loggedUser');
  const loggedUser1 = JSON.parse(localUser);

  const { id } = useParams();
  const navigate = useNavigate();
  const audio = new Audio(buttonSound)

  // Function to retrieve countdown data from the server
  const fetchCountdownList = () => {
    axios
      .get('http://localhost:8000/api/getAllCountdowns', { withCredentials: true })
      .then((res) => {
        setCountdownlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCountdownList();
  }, []);



  // Function to delete a countdown
  const deleteCountdown = (id) => {
    axios
      .delete(`http://localhost:8000/api/deleteCountdown/${id}`)
      .then((res) => {
        console.log('Countdown deleted', res.data);
        alert('You are about to permanently delete this countdown.');

        // Activate the confetti animation
        

        fetchCountdownList();
        navigate('/dashboard');
        setIsConfettiActive(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isConfettiActive) {
      const confettiTimeout = setTimeout(() => {
        setIsConfettiActive(false);
      }, 3000); // Adjust the delay as needed (in milliseconds)
  
      return () => clearTimeout(confettiTimeout);
    }
  }, [isConfettiActive]);

  // Function to calculate time remaining and update countdown
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const updatedCountdownList = countdownlist.map((countdown) => {
      if (countdown.countdownItems[0].days > 0 || countdown.countdownItems[0].hours > 0 || countdown.countdownItems[0].minutes > 0 || countdown.countdownItems[0].seconds > 0) {
        const targetTime = new Date(countdown.date).getTime();
        const timeRemaining = targetTime - currentTime;

        if (timeRemaining > 0) {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          return {
            ...countdown,
            countdownItems: [{ days, hours, minutes, seconds }],
          };
        }
      }

      // If the countdown has reached 0, keep it as is
      return countdown;
    });

    setCountdownlist(updatedCountdownList);
  };


  useEffect(() => {
    const countdownInterval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(countdownInterval);
  }, [countdownlist]);

  useEffect(() => {
    // Update the scroll height when the window is resized
    window.addEventListener('resize', () => {
      setScrollHeight(window.innerHeight);
    });
  }, []);

  return (
    <div className="homeHome flex-row flex p-1 justify-around flex-wrap rounded">
      {isConfettiActive && <Confetti width={window.innerWidth} height={scrollHeight}/>}
      <p className="title1">{loggedUser1.firstName}'s Countdown</p>
      {/* <div className="descripA">
        {countdownlist.map((countdown, index) =>
          countdown.createdBy && loggedUser1.firstName === countdown.createdBy.name ? (
            <div key={index}>
              <p>{countdown.countdown}</p>
              <div>
                <p>Days: {countdown.countdownItems[0].days}</p>
                <p>Hours: {countdown.countdownItems[0].hours}</p>
                <p>Minutes: {countdown.countdownItems[0].minutes}</p>
                <p>Seconds: {countdown.countdownItems[0].seconds}</p>
              </div>
              <button onClick={() => deleteCountdown(countdown._id)}>Delete</button>
            </div>
          ) : null
        )}
      </div> */}
      <div className="descripA">
        {countdownlist.map((countdown, index) => 
        countdown.createdBy && loggedUser1.firstName === countdown.createdBy.name ? (
          <div key={index}>
            <p>{countdown.countdown}</p>
            {countdown.countdownItems[0].days === 0 &&
            countdown.countdownItems[0].hours === 0 &&
            countdown.countdownItems[0].minutes === 0 &&
            countdown.countdownItems[0].seconds === 0 ? (
              <p>Countdown complete!</p>
            ) : (
              <div>
                <p>Days: {countdown.countdownItems[0].days}</p>
                <p>Hours: {countdown.countdownItems[0].hours}</p>
                <p>Minutes: {countdown.countdownItems[0].minutes}</p>
                <p>Seconds: {countdown.countdownItems[0].seconds}</p>
              </div>
            )}
            <button onClick={() =>  deleteCountdown(countdown._id)}>Delete</button>
          </div>
        ): null
        )}
      </div>
      <button className="navButton2" onClick={()=> {audio.play(); navigate("/addCountdown")} }>Add a Countdown</button>
    </div>
  );
};

export default CountdownView;