import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../home.css'
const NetworkingList = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/networkProfiles',{withCredentials:true})
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])



  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
        <p className='title1'>BMTI Alumni & Community Members</p>
    <div className='descripA'>
       {
            list.map((networkProfile)=>(
                <div className='borderPeep'>
                    <p>{networkProfile.firstName} {networkProfile.lastName}</p>
                    <p>{networkProfile.location}</p>
                    <p>{networkProfile.email}</p>
                    <p>{networkProfile.website}</p>
                    <p>{networkProfile.wherework}</p>
                    <p>{networkProfile.specialties}</p>
                </div>
            ))
        }

    </div>
    </div>
  )
}

export default NetworkingList