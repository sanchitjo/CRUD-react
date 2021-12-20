import React from 'react';
import { useState } from 'react';

let UserContext = React.createContext();

export const MyProvider = UserContext;

export const UserProvider = ({children}) => {
    const[userList, setUserList] = useState([])
    return(
        <UserContext.Provider value={{userList, setUserList}}>
            {children}
        </UserContext.Provider>
    )
}