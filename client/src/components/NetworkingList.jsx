import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../home.css'
import { useParams, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
const NetworkingList = () => {

    const [list,setList] = useState([])

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllNetworks',{withCredentials:true})
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const fetchNetworkList = () => {
        axios.get('http://localhost:8000/api/getAllNetworks',{withCredentials:true})
            .then((res)=>{
                console.log(res)
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            });
        }

        useEffect(()=>{
            fetchNetworkList();
        },[])

        const deleteNetwork = (id) => {
            axios.delete(`http://localhost:8000/api/deleteNetwork/${id}`).then((res) => {
                console.log("Network Listing deleted", res.data);
                alert(`You're about to delete this network profile`);
                fetchNetworkList();
                navigate("/networking");
            });
        };


  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
        <p className='title1'>BMTI Alumni & Community Members</p>
    <div className='descripA flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
       {/* {
            list.map((networkProfile, i)=>(
                <div className='borderPeep'>

                    <p>{networkProfile.firstName} {networkProfile.lastName}</p>
                    <p>{networkProfile.location}</p>
                    <p>{networkProfile.email}</p>
                    <p>{networkProfile.website}</p>
                    <p>{networkProfile.wherework}</p>
                    <p>{networkProfile.specialties}</p>
                    {loggedUser1.firstName === networkProfile.createdBy.name ? <button className='navButtonMini' onClick={() => deleteNetwork(networkProfile._id)}>delete</button> : null} &nbsp; &nbsp;
                    {loggedUser1.firstName === networkProfile.createdBy.name ? <button className='navButtonMini' onClick={() => navigate(`/editNetwork/${networkProfile._id}`)}>edit</button> : null}

                </div>
            ))
        } */}

{
  list
    .slice() // Create a copy of the list to avoid modifying the original array
    .sort((a, b) => {
      // Compare last names (assumes last name is a string)
      const lastNameA = a.lastName.toLowerCase(); // Convert to lowercase for case-insensitive sorting
      const lastNameB = b.lastName.toLowerCase();
      
      // Compare the first letter of the last names
      return lastNameA.localeCompare(lastNameB);
    })
    .map((networkProfile, i) => (
      <div className='borderPeep' key={i}>
        <p>{networkProfile.firstName} {networkProfile.lastName}</p>
        <p>{networkProfile.location}</p>
        <p>{networkProfile.email}</p>
        <p>{networkProfile.website}</p>
        <p>{networkProfile.wherework}</p>
        <p>{networkProfile.specialties}</p>
        {loggedUser1.firstName === networkProfile.createdBy.name ? (
          <button className='navButtonMini' onClick={() => deleteNetwork(networkProfile._id)}>delete</button>
        ) : null} &nbsp; &nbsp;
        {loggedUser1.firstName === networkProfile.createdBy.name ? (
          <button className='navButtonMini' onClick={() => navigate(`/editNetwork/${networkProfile._id}`)}>edit</button>
        ) : null}
      </div>
    ))
}

    </div>
    </div>
  )
}

export default NetworkingList