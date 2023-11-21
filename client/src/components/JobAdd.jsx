import React, {useState} from 'react'
import axios from 'axios';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import { useNavigate } from 'react-router-dom';
import UserNav from './UserNav';
const JobAdd = () => {


    const [title,setTitle] = useState('')
    const [nameOfBizHiring,setNameOfBizHiring] = useState('')
    const [description,setDescription] = useState('')
    const [contact,setContact] = useState('')
    // const [postedOn, setPostedOn] = useState('')
    const [errors,setErrors] = useState({})

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)


    const navigate = useNavigate();
    const audio = new Audio(buttonSound)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const result = await axios.post("http://localhost:8000/api/createJob", {
                createdBy:{
                    id:loggedUser1._id,
                    name:loggedUser1.firstName
                },
                title,
                nameOfBizHiring,
                description,
                contact,
                postedOn: new Date()
                })
                navigate('/jobboard')
                setTitle('');
                setNameOfBizHiring('');
                setDescription('');
                setContact('');
                // setPostedOn('');
        } catch(err) {
            debugger;
            const errorResponse = err.response.data.errors;
            console.log(errorResponse)
            
            setErrors(errorResponse);
        }
    }

  return (
    <div>
        <UserNav />
    
    <div className="bg-div">
                    <button className="jobButton" onClick={()=> {audio.play(); navigate("/jobboard")} }>back to job board</button>
    {/* NEW FORM ########### */}
    <div className="rotate">
        <div className="font-montserrat flex min-h-full p-3 pt-5">
            <form
                className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
                onSubmit={handleSubmit}
            >
                <div className="p-6">
                    <p className="text-3xl pl-3">Add Job Posting</p>
                    {/* TITLE START  */}
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
                        {errors.title ? (
                            <p className="text-red-600 text-center">{errors.title.message}</p>
                        ) : null}
                    </div>
                    {/* TITLE END */}

                    {/* BIZ NAME START  */}
                    <div className="mt-4 relative">
                        <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                            <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                        </div>
                        <input
                            className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                            placeholder="Name of Business/Person Hiring"
                            type="text"
                            value={nameOfBizHiring}
                            onChange={(e) => setNameOfBizHiring(e.target.value)}
                        />
                        {errors.nameOfBizHiring ? (
                            <p className="text-red-600 text-center">{errors.nameOfBizHiring.message} </p>
                        ) : null}
                    </div>

                    {/* BIZ NAME END  */}
                    {/* DESC START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Job Description"
									type="text"
									value={description} 
									onChange={(e) => setDescription(e.target.value)}
								/>
                            {errors.description ? (
                            <p className="text-red-600 text-center">{errors.description.message} </p>
                        ) : null}
							</div>
							{/* DESC END  */}

                    {/* CONTACT START  */}
                    <div className="mt-4 relative">
                        <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                            <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                        </div>
                        <input
                            className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                            placeholder="Who/How to Contact if Interested"
                            type="text"
                            value={contact} 
                            onChange={(e) => setContact(e.target.value)}
                        />
                                                    {errors.contact ? (
                            <p className="text-red-600 text-center">{errors.contact.message} </p>
                        ) : null}
                    </div>
                    {/* CONTACT END  */}
                    {/* <div className="mt-4 relative">
                        <div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
                            <i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
                        </div>
                    <input
                        className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
                        placeholder="Today's Date"
                        type="date"
                        value={postedOn}
                        onChange={(e) => setPostedOn(e.target.value)}
                    />
                        {errors.postedOn ? (
                        <p className="text-red-600 text-center">{errors.postedOn.message}</p>
                        ) : null}
                    </div> */}
                    <input type="hidden" name="userId" value={loggedUser1._id} />
                </div>
                <div>
                    <button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest" onClick={() => audio.play()}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <p className='title5'>*Please note: Your job posting will automatically delete 90 days after posting.</p>

    </div>
</div>
</div>
  )
}

export default JobAdd