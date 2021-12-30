import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { YourProvider } from "./productContext";

function Product() {

    const productContext = useContext(YourProvider);
    console.log("productList", productContext);

    let handleDelete = (index) => {
        let check = window.confirm("you sure?");
        if (check) {
            productContext.productList.splice(index - 1, 1);
            productContext.setproductList([...productContext.productList]);
        }
    }

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
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Purpose</th>
                                    <th>Made in</th>
                                    <th>Available in</th>
                                    <th>Launch date</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    productContext.productList.map((obj, index) => {
                                        return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{obj.productName}</td>
                                            <td>{obj.purpose}</td>
                                            <td>{obj.madeIn}</td>
                                            <td>{obj.availableIn}</td>
                                            <td>{obj.launchDate}</td>
                                            <td>{obj.price}</td>
                                            <td>
                                                <Link to={`/product/edit/${index + 1}`} className="btn btn-primary btn-sm">Edit</Link>
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
        </div>
    )
}

export default Product;