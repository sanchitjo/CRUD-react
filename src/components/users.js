import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyProvider } from "./userContext";


function Users() {

    const userContext = useContext(MyProvider)
    console.log("userList", userContext);


    let handleDelete = ((index) => {
        let check = window.confirm("Are you sure?");
        if (check) {
            userContext.userList.splice(index - 1, 1);
            userContext.setUserList([...userContext.userList]);
        }
    })
    return (

        <div>

            <h1 className="h3 mb-2 text-gray-800">Users</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net" rel="noreferrer">official DataTables documentation</a>.</p>

            <Link to="createUser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Create User </Link>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    userContext.userList.map((obj, index) => {

                                        return (< tr >
                                            <td>{index + 1}</td>
                                            <td>{obj.userName}</td>
                                            <td>{obj.position}</td>
                                            <td>{obj.office}</td>
                                            <td>{obj.age}</td>
                                            <td>{obj.startdate}</td>
                                            <td>{obj.salary}</td>
                                            <td>
                                                <Link to={`/users/edit/${index + 1}`} className="btn btn-primary btn-sm">Edit</Link>
                                                <button onClick={() => { handleDelete(index + 1) }} className="btn btn-danger btn-sm ml-1">Delete</button>
                                            </td>
                                        </tr>)
                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Users;