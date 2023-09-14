import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../home.css'
import { useParams, useNavigate } from "react-router-dom";
const JobList = () => {

    const [list,setList] = useState([])

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllJobs',{withCredentials:true})
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const fetchJobList = () => {
    axios.get('http://localhost:8000/api/getAllJobs',{withCredentials:true})
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        });
    }

    useEffect(()=>{
        fetchJobList();
    },[])

    const deleteJob = (id) => {
		axios.delete(`http://localhost:8000/api/deleteJob/${id}`).then((res) => {
			console.log("Job deleted", res.data);
			alert(`You're about to delete this job posting`);
            fetchJobList();
			navigate("/jobboard");
		});
	};

  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
    <p className='title1'>Current Job Openings</p>
<div className='descripA'>
   {
        list.map((job, i)=>(
            <div className='borderPeep' key={i}>
                <p>{job.title}</p>
                <p>{job.nameOfBizHiring}</p>
                <p>{job.description}</p>
                <p>{job.contact}</p>
                {loggedUser1.firstName === job.createdBy.name ? <button onClick={() => deleteJob(job._id)}>Delete</button> : null}
            </div>

        ))
    }

</div>
</div>
  )
}

export default JobList