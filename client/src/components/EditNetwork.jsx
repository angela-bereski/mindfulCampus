import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import UserNav from './UserNav';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const EditNetwork = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [website,setWebsite] = useState('')
    const [location,setLocation] = useState('')
    const [wherework,setWherework] = useState('')
    const [specialties,setSpecialties] = useState('')

    const [errors,setErrors] = useState({})

    const localUser = localStorage.getItem('loggedUser');
    const loggedUser1 = JSON.parse(localUser);

    const { id } = useParams();
    const navigate = useNavigate()
    const audio = new Audio(buttonSound)

      // Fetch the user's existing network profile data and populate the form fields
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOneNetwork/${id}`)
      .then((response) => {
        const profileData = response.data;
        setFirstName(profileData.firstName);
        setLastName(profileData.lastName);
        setEmail(profileData.email);
        setWebsite(profileData.website);
        setLocation(profileData.location);
        setWherework(profileData.wherework);
        setSpecialties(profileData.specialties);
      })
      .catch((error) => {
        console.error('Error fetching profile data: ', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.put(`http://localhost:8000/api/editNetwork/${id}`, {
        firstName,
        lastName,
        email,
        website,
        location,
        wherework,
        specialties,
      });

      // Handle success or navigate as needed
      navigate('/networking');
    } catch (err) {
      const errorResponse = err.response.data.errors;
      setErrors(errorResponse);
    }
  };

  return (
    <div className="bg-div">
      <UserNav />
      <button className="jobButton" onClick={()=> {audio.play(); navigate("/jobboard")} }>back to networking</button>
      <div className="rotate">
        <div className="font-montserrat flex min-h-full p-3 pt-5">
          <form
            className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
            onSubmit={handleSubmit}
          >
            <div className="p-6">
              <p className="text-3xl pl-3">Edit Your Alumni Profile</p>
              {/* FIRST NAME START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Website"
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              {/* WEBSITE END */}

              {/* LOCATION START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Where are you located?"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              {/* LOCATION END */}

              {/* WHEREWORK START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="Where are you working?"
                  type="text"
                  value={wherework}
                  onChange={(e) => setWherework(e.target.value)}
                />
              </div>
              {/* WHEREWORK END */}

              {/* SPECIALTIES START */}
              <div className="mt-4 relative">
                <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                  <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                </div>
                <input
                  className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                  placeholder="List any modalities you specialize in"
                  type="text"
                  value={specialties}
                  onChange={(e) => setSpecialties(e.target.value)}
                />
              </div>
              {/* SPECIALTIES END */}
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


export default EditNetwork;