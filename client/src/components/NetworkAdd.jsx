import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserNav from './UserNav';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const NetworkAdd = () => {

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

    const navigate = useNavigate()
    const audio = new Audio(buttonSound)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8000/api/createNetwork', {
              createdBy: {
                id: loggedUser1._id,
                name: loggedUser1.firstName,
              },
              firstName,
              lastName,
              email, 
              website,
              location,
              wherework,
              specialties
            });
      
            setFirstName('');
            setLastName('');
            setEmail('');
            setWebsite('');
            setLocation('');
            setWherework('');
            setSpecialties('');
            // fetchTodoList(); // Fetch updated task list after adding a task
            navigate('/networking');
          } catch (err) {
            const errorResponse = err.response.data.errors;
            setErrors(errorResponse);
          }
        
        // axios.post('http://localhost:8000/api/networkProfile',{
        //     firstName,
        //     lastName,
        //     email,
        //     website,
        //     location,
        //     wherework,
        //     specialties
        // }).then((res)=>{
        //     console.log(res)
        //     console.log("catch from back-end")
        //     navigate('/networking')

        // }).catch((err)=>{
        //     console.log(err)
        //     console.log("error is caught on front-end")
        //     setErrors(err.response.data.errors)
        // })
    }

  return (
    <div>
        <UserNav />
    <div className="bg-div">
    {/* NEW FORM ########### */}
    <button className="jobButton" onClick={()=> {audio.play(); navigate("/networking")} }>back to networking</button>
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
                            onChange={(e) => setSpecialties(e.target.value)}
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
</div>
  )
}

export default NetworkAdd