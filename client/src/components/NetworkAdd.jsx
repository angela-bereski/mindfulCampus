import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NetworkAdd = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [website,setWebsite] = useState('')
    const [location,setLocation] = useState('')
    const [wherework,setWherework] = useState('')
    const [specialties,setSpecialities] = useState('')

    const [errors,setErrors] = useState({})

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/networkProfile',{
            firstName,
            lastName,
            email,
            website,
            location,
            wherework,
            specialties
        }).then((res)=>{
            console.log(res)
            console.log("catch from back-end")
            navigate('/networking')

        }).catch((err)=>{
            console.log(err)
            console.log("error is caught on front-end")
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div className="bg-div">
    {/* NEW FORM ########### */}
    <div className="rotate">
        <div className="font-montserrat flex min-h-full p-3 pt-5">
            <form
                className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
                onSubmit={handleSubmit}
            >
                <div className="p-6">
                    <p className="text-3xl pl-3">Add Your Alumni Profile</p>
                    {/* FIRST NAME START  */}
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
                        {errors.firstName ? (
                            <p className="text-red-600 text-center">{errors.firstName.message}</p>
                        ) : null}
                    </div>
                    {/* FIRST NAME END */}

                    {/* LAST NAME START  */}
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
                        {errors.lastName ? (
                            <p className="text-red-600 text-center">{errors.lastName.message} </p>
                        ) : null}
                    </div>

                    {/* LAST NAME END  */}
                    							{/* EMAIL START  */}
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
							{/* EMAIL END  */}

                    {/* WEBSITE START  */}
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
                    {/* WEBSITE END  */}

                    {/* LOCATION START  */}
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
                    {/* LOCATION END  */}
                    {/* WHEREWORK START  */}
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
                    {/* WHEREWORK END  */}
                    {/* SPECIALTIES START  */}
                    <div className="mt-4 relative">
                        <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                            <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                        </div>
                        <input
                            className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                            placeholder="List any modalities you specialize in"
                            type="text"
                            value={specialties}
                            onChange={(e) => setSpecialities(e.target.value)}
                        />
                    </div>
                    {/* LOCATION END  */}

                </div>
                <div>
                    <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default NetworkAdd