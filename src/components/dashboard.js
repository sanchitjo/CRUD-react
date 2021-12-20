import React from "react";
import { useContext } from "react";
import { MyProvider } from "./userContext";
// import {UserContext} from "./userContext";
// import { UserProvider } from "./userContext";


function Dashboard() {
     const contextValue = useContext(MyProvider);
     console.log('context',contextValue)
    return (
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="/#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
    )
}

export default Dashboard ;