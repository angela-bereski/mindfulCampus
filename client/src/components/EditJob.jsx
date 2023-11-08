import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import UserNav from './UserNav';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const EditJob = () => {

    const [title,setTitle] = useState('')
    const [nameOfBizHiring,setNameOfBizHiring] = useState('')
    const [description,setDescription] = useState('')
    const [contact,setContact] = useState('')
    // const [postedOn, setPostedOn] = useState('')
    const [errors,setErrors] = useState({})

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

    const { id } = useParams();
    const navigate = useNavigate();
    const audio = new Audio(buttonSound)


    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneJob/${id}`)
          .then((response) => {
            const jobData = response.data;
            setTitle(jobData.title);
            setNameOfBizHiring(jobData.nameOfBizHiring);
            setDescription(jobData.description);
            setContact(jobData.contact);
          })
          .catch((error) => {
            console.error('Error fetching job data: ', error);
          });
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const result = await axios.put(`http://localhost:8000/api/editJob/${id}`, {
            title,
            nameOfBizHiring,
            description,
            contact,
          });
    
          // Handle success or navigate as needed
          navigate('/jobboard');
        } catch (err) {
          const errorResponse = err.response.data.errors;
          setErrors(errorResponse);
        }
      };


  return (
<div className="bg-div">
      <UserNav />
      <button className="jobButton" onClick={()=> {audio.play(); navigate("/jobboard")} }>back to job board</button>
      <div className="rotate">
        <div className="font-montserrat flex min-h-full p-3 pt-5">
          <form
            className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
            onSubmit={handleSubmit}
          >
            <div className="p-6">
              <p className="text-3xl pl-3">Edit Your Job Posting</p>
              {/* FIRST NAME START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Job Title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* FIRST NAME END */}

              {/* LAST NAME START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Name of Business hiring"
                  type="text"
                  value={nameOfBizHiring}
                  onChange={(e) => setNameOfBizHiring(e.target.value)}
                />
              </div>
              {/* LAST NAME END */}

              {/* EMAIL START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* EMAIL END */}

              {/* WEBSITE START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              {/* WEBSITE END */}

              
            </div>
            <div>
              <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJob