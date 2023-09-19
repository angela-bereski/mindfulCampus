import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ errors, setErrors ] = useState([]);
	
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let response = await axios.post('http://localhost:8000/api/login',{
            email,
            password
        },{withCredentials:true})
        let logged = await axios.get("http://localhost:8000/api/loggedUser", {withCredentials: true})
        console.log(`Email is: ${logged.data.email}`);
        localStorage.setItem('loggedUser', JSON.stringify(logged.data))
        console.log(`Logged in user is: ${logged.data.firstName}`)
        navigate('/dashboard')
    } catch(err) {
        const errorResponse = err.response.data.message;
        setErrors(errorResponse);
        console.log('error')
    }
	};

	return (
		<div className="bg-div">
			{/* <p className="text-3xl">Admin Login</p> */}

			{/* FORM STARTS */}
			<div className="rotate">
				<div className="font-montserrat flex min-h-full p-3 pt-5">
					<form
						className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
						onSubmit={handleSubmit}
					>
						<div className="p-6">
							<p className="text-3xl pl-3">User Login</p>
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Email"
									type="text"
								/>
							</div>
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									onChange={(e) => setPassword(e.target.value)}
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Password"
									type="password"
								/>
							</div>
						</div>
						{
							errors ? <p className="text-red-600 text-center mb-2">{errors}</p> : null
						}
						<div>
							<button
								className="bg-[#f8906d] uppercase py-4 w-full text-white text-m tracking-widest"
								value="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* FORM ENDS  */}
		</div>
	);
};

export default Login;