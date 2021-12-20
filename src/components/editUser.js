import React, { useState, useContext } from 'react';
import { MyProvider } from './userContext'; 
import { useNavigate } from 'react-router-dom';



function EditUser() {
    
    const navigate = useNavigate();
    const contextValue = useContext(MyProvider);
    
    const [userName, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [office, setOffice] = useState("");
    const [age, setAge] = useState("");
    const [startdate, setStartdate] = useState("");
    const [salary, setSalary] = useState("");

    // useEffect(() => {
    //     console.log(props);
    //     let userData = contextValue.userList[props.params.match.id]
    //     console.log(userData);
    // },[])
    
    let handleSubmit = (e) => {
            e.preventDefault()
        let userData = {userName, position, office, age, startdate, salary};
        console.log(userData, contextValue)
        contextValue.setUserList([...contextValue.userList, userData])
        navigate("/users")
    }


    return (
        
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create User</h1>
            </div>

            <div className='constainer'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <label>User Name</label>
                            <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Age</label>
                            <input type="number" value={age} onChange={(e) => {setAge(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-8'>
                            <label>Position</label>
                            <input type="text" value={position} onChange={(e) => {setPosition(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Salary</label>
                            <input type="text" value={salary} onChange={(e) => {setSalary(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-8'>
                            <label>Office</label>
                            <input type="text" value={office} onChange={(e) => {setOffice(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Start Date</label>
                            <input type="date" value={startdate} onChange={(e) => {setStartdate(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-12'>
                            <input type='submit' value='update' className='btn btn-outline-success mt-2' />
                        </div>

                    </div>
                </form>
            </div>


        </div>

    )
}

export default EditUser;
