import React, {useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
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



  return (
    <div>EditNetwork</div>
  )
}

export default EditNetwork;