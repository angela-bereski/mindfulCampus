// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import CountdownView from './CountdownView';

// const CountdownAdd = () => {
//   const [date, setDate] = useState('');
//   const [countdown, setCountdown] = useState('');
//   const [errors, setErrors] = useState({});
//   const [countdownlist, setCountdownlist] = useState([]); // Moved state here

//   const localUser = localStorage.getItem('loggedUser');
//   const loggedUser1 = JSON.parse(localUser);

//   const navigate = useNavigate();

//   const fetchCountdownList = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/getAllCountdowns', {
//         withCredentials: true,
//       });
//       setCountdownlist(response.data);
//     } catch (error) {
//       console.error('Error fetching countdown list:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCountdownList();
//   }, []); // Fetch the initial list of tasks when the component mounts

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await axios.post('http://localhost:8000/api/createCountdown', {
//         createdBy: {
//           id: loggedUser1._id,
//           name: loggedUser1.firstName,
//         },
//         countdown,
//         date
//       });

//       setCountdown('')
//       setDate('');
//       fetchCountdownList(); // Fetch updated task list after adding a task
//       navigate('/dashboard');
//     } catch (err) {
//       const errorResponse = err.response.data.errors;
//       setErrors(errorResponse);
//     }
//   };

//     // Function to calculate the remaining time
//     const calculateTimeRemaining = () => {
//         const targetTime = new Date(date).getTime();
//         const currentTime = new Date().getTime();
//         const timeRemaining = targetTime - currentTime;
    
//         if (timeRemaining > 0) {
//           const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//           const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
//           setCountdownlist({ days, hours, minutes, seconds });
//         } else {
//           setCountdownlist(null); // Countdown has reached or passed the target date
//         }
//       };

//       useEffect(() => {
//         if (date) {
//           calculateTimeRemaining();
//           const timerInterval = setInterval(calculateTimeRemaining, 1000);
//           return () => clearInterval(timerInterval);
//         }
//       }, [date]);

//   return (
//     <div className="font-montserrat flex min-h-full p-3 pt-5">
//       <form
//         className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
//         onSubmit={submitHandler}
//       >
//         <div className="p-6">
//           <p className="text-3xl pl-3">Add a Countdown!</p>
//           <div className="mt-4 relative">
//             <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
//               <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
//             </div>
//             <input
//               className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
//               placeholder="Name of Countdown!"
//               type="text"
//               value={countdown}
//               onChange={(e) => setCountdown(e.target.value)}
//             />
//             {errors.countdown ? (
//               <p className="text-red-600 text-center">{errors.countdown.message}</p>
//             ) : null}
//             <input
//               className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
//               placeholder="Add a task!"
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             {errors.date ? (
//               <p className="text-red-600 text-center">{errors.date.message}</p>
//             ) : null}
//           </div>
//           <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest">
//             Submit
//           </button>
//         </div>
//       </form>
//       <div>
//         {countdown && (
//             <div>
//                 <p>Days: {countdown.days}</p>
//                 <p>Hours: {countdown.hours}</p>
//                 <p>Minutes: {countdown.minutes}</p>
//                 <p>Seconds: {countdown.seconds}</p>
//             </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default CountdownAdd;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CountdownView from './CountdownView';

const CountdownAdd = () => {
  const [date, setDate] = useState('');
  const [countdown, setCountdown] = useState('');
  const [errors, setErrors] = useState({});
  const [countdownlist, setCountdownlist] = useState([]); // Moved state here
  const [countdownItems, setCountdownItems] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const localUser = localStorage.getItem('loggedUser');
  const loggedUser1 = JSON.parse(localUser);

  const navigate = useNavigate();

//   const fetchCountdownList = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/getAllCountdowns', {
//         withCredentials: true,
//       });
//       setCountdownlist(response.data);
//     } catch (error) {
//       console.error('Error fetching countdown list:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCountdownList();
//   }, []); // Fetch the initial list of tasks when the component mounts

useEffect(() => {
    // Load countdown items from LocalStorage on component mount
    const storedCountdownItems = localStorage.getItem('countdownItems');
    if (storedCountdownItems) {
      setCountdownItems(JSON.parse(storedCountdownItems));
    }

    fetchCountdownList();
  }, []);

  const fetchCountdownList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getAllCountdowns', {
        withCredentials: true,
      });
      setCountdownlist(response.data);
    } catch (error) {
      console.error('Error fetching countdown list:', error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/api/createCountdown', {
        createdBy: {
          id: loggedUser1._id,
          name: loggedUser1.firstName,
        },
        countdown,
        date,
        countdownItems, // Send countdown items to the server
      });

      setCountdown('');
      setDate('');
      // Store countdown items in LocalStorage
      localStorage.setItem('countdownItems', JSON.stringify(countdownItems));

    //   setCountdownItems({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      fetchCountdownList(); // Fetch updated task list after adding a task

      navigate('/dashboard');
    } catch (err) {
      const errorResponse = err.response.data.errors;
      setErrors(errorResponse);
    }
  };


const calculateTimeRemaining = () => {
    const targetTime = new Date(date).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;
  
    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update the countdown items
      setCountdownItems({ days, hours, minutes, seconds });
  
      // Push the new countdown to the countdownlist array
      setCountdownlist([...countdownlist, { countdown, countdownItems: { days, hours, minutes, seconds } }]);
    } else {
      setCountdownItems({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reset the countdown items
    }
  };

  useEffect(() => {
    if (date) {
      calculateTimeRemaining();
      const timerInterval = setInterval(calculateTimeRemaining, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [date]);

  return (
    <div className="font-montserrat flex min-h-full p-3 pt-5">
      <form
        className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
        onSubmit={submitHandler}
      >
                <div className="p-6">
          <p className="text-3xl pl-3">Add a Countdown!</p>
          <div className="mt-4 relative">
            <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
              <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
            </div>
            <input
              className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
              placeholder="Name of Countdown!"
              type="text"
              value={countdown}
              onChange={(e) => setCountdown(e.target.value)}
            />
            {errors.countdown ? (
              <p className="text-red-600 text-center">{errors.countdown.message}</p>
            ) : null}
            <input
              className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
              placeholder=""
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date ? (
              <p className="text-red-600 text-center">{errors.date.message}</p>
            ) : null}
          </div>
          <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest">
            Submit
          </button>
        </div>
      </form>
      <div>
        {countdownlist.map((countdownItem, index) => (
          <div key={index}>
            <p>Days: {countdownItem.countdownItems.days}</p>
            <p>Hours: {countdownItem.countdownItems.hours}</p>
            <p>Minutes: {countdownItem.countdownItems.minutes}</p>
            <p>Seconds: {countdownItem.countdownItems.seconds}</p>
          </div>
        ))}
      </div>
      <div>
        <CountdownView  />
      </div>
    </div>
  );
};

export default CountdownAdd;