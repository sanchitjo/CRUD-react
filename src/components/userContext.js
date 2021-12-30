import React from 'react';
import { useState } from 'react';

let UserContext = React.createContext();

export const MyProvider = UserContext;

export const UserProvider = ({children}) => {
    const[userList, setUserList] = useState([])
    const a =((x) => {
        console.log(x, "this has been called")
        setUserList(x)
    })
    return(
        <UserContext.Provider value={{userList, setUserList:a}}> 
            {children}
        </UserContext.Provider>
    )
}