import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'


const Register = () => {


	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState("");


	const navigate = useNavigate();
	const audio = new Audio(buttonSound)


	const handleSubmit = async (e) => {
		e.preventDefault();

		// Clear errors when the user attempts to submit.
		setErrors({});

        try {
            let newUser = {
                firstName,
				lastName,
                email,
                password,
                confirmPassword
            }

            const reg = await axios.post("http://localhost:8000/api/register", newUser, { withCredentials: true})
            console.log("registered: ", reg.data)
            
            const login = await axios.post('http://localhost:8000/api/login',{
                    email,
                    password
                },{withCredentials:true})
                console.log(login.data);
                let logged = await axios.get("http://localhost:8000/api/loggedUser", {withCredentials: true})
                // console.log(logged.data)
                localStorage.setItem('loggedUser', JSON.stringify(logged.data))
                console.log(`Logged in user is: ${logged.data.firstName}`)
				alert(`Thanks for registering and welcome to the BMTI fam! Please login to access your personal dashboard.`)
                navigate('/login')
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				setConfirmPassword('');
        } catch(err) {
            console.log("comes from register route")
            // console.log(err)
            setErrors(err.response.data.err)
        }
	};


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
							<p className="text-3xl pl-3">Register New User</p>
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
								{errors.email ? (
									<p className="text-red-600 text-center">{errors.email.message} </p>
								) : null}
							</div>
							{/* EMAIL END  */}

							{/* PASSWORD START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								{errors.password ? (
									<p className="text-red-600 text-center">{errors.password.message} </p>
								) : null}
							</div>
							{/* PASSWORD END  */}
							{/* CONFIRM PASSWORD START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Confirm Password"
									type="password"
									onChange={(e)=> setConfirmPassword(e.target.value)}
								/>
								{/* {errors.password ? (
									<p className="text-red-600 text-center">Passwords must match.</p>
								) : null} */}
								    {password !== confirmPassword ? (  
        <p className="text-red-600 text-center">Passwords must match.</p>
    ) : null}
							</div>
							{/* CONFIRM PASSWORD END  */}
						</div>
						<div>
							<button className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest" onClick={() => audio.play()}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;