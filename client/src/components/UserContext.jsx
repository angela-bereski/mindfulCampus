import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [ email, setEmail ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ todos, setTodos ] = useState([]);
    const [ jobs, setJobs ] = useState([]);
    const [ networkProfiles, setNetworkProfiles ] = useState([]);

  return (
    <UserContext.Provider value={{
            email, 
            setEmail, 
            loggedIn, 
            setLoggedIn,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            userId,
            setUserId,
            todos,
            setTodos,
            jobs,
            setJobs,
            networkProfiles,
            setNetworkProfiles
        }}>
            {props.children}
    </UserContext.Provider>
  )
}