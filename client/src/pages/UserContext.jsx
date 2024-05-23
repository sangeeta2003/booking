import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
    // Use state or other logic to manage context values
    const [user, setUser] = useState(null);
    useEffect(()=>{
if(!user){
    axios.get('/profile').then(({data})=>{
        setUser(data);
    });
   
}
    },[]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
