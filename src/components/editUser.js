import React, { useState, useContext, useEffect } from 'react';
import { MyProvider } from './userContext'; 
import { useNavigate, useParams } from 'react-router-dom';




function EditUser(props) {
    
    const navigate = useNavigate();
    const contextValue = useContext(MyProvider);
    
    const [userName, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [office, setOffice] = useState("");
    const [age, setAge] = useState("");
    const [startdate, setStartdate] = useState("");
    const [salary, setSalary] = useState("");
    const {id} = useParams() 
    // console.log(id)
    useEffect(() => {
        // console.log(props)
        let userData = contextValue.userList[parseInt(id) - 1]
        // console.log("contextValue",contextValue)
        // console.log("contextValue.userList",contextValue.userList)
        // console.log("userData", userData);
        
        if(userData){
            setUserName(userData.userName);
            setPosition(userData.position);    
            setOffice(userData.office);
            setAge(userData.age);
            setStartdate(userData.startdate);
            setSalary(userData.salary);
        }
        
    },[contextValue, id])
    
    let handleSubmit = (e) => {
            e.preventDefault()
        // let userData = {userName, position, office, age, startdate, salary};
        // console.log(userData, contextValue)
        let list = [...contextValue.userList]
        let userData = {...list[parseInt(id) - 1]}
        userData.userName = userName;
        userData.position = position;
        userData.office = office;
        userData.age = age;
        userData.startdate = startdate;
        userData.salary = salary;
    
        console.log(userData);
        list[parseInt(id) -1] = userData;
        
        contextValue.setUserList(list);
        navigate("/users")
    }


    return (
        
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
            </div>

            <div className='constainer'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <label>User Name</label>
                            <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} className='form-control' required />
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
                            <input type='submit' value='update' className='btn btn-primary mt-2' />
                        </div>

                    </div>
                </form>
            </div>


        </div>

    )
}

export default EditUser;
