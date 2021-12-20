import React from "react";
import { Link } from "react-router-dom";

function Product() {

    let productData = [{
        id: 1,
        name: "Person 1",
        position: "SDE 1",
        office: "California LA",
        age: 31,
        startDate: "14 Dec 2021",
        salary: "$100k"
    }
    ]

    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Product</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net" rel="noreferrer">official DataTables documentation</a>.</p>

            <Link to="createProduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Create Product </Link>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    productData.map((obj) => {
                                        return (<tr>
                                            <td>{obj.id}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.position}</td>
                                            <td>{obj.office}</td>
                                            <td>{obj.age}</td>
                                            <td>{obj.startDate}</td>
                                            <td>{obj.salary}</td>
                                            <td>
                                                <Link to={`/product/edit/${obj.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                                <Link to={`/product/edit/${obj.id}`} className="btn btn-danger btn-sm">Delete</Link>
                                            </td>
                                        </tr>)
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;