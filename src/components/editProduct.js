import React, { useState, useContext, useEffect } from 'react';
import { YourProvider } from './productContext'; 
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {

    const navigate = useNavigate();
    const contextValue = useContext(YourProvider);
    
    const [productName, setProductName] = useState("");
    const [purpose, setpurpose] = useState("");
    const [madeIn, setmadeIn] = useState("");
    const [availableIn, setavailableIn] = useState("");
    const [launchDate, setlaunchDate] = useState("");
    const [price, setprice] = useState("");
    const {id} = useParams() 
    // console.log(id)
    useEffect(() => {
        // console.log(props)
        let productData = contextValue.productList[parseInt(id) - 1]
        // console.log("contextValue",contextValue)
        // console.log("contextValue.productList",contextValue.productList)
        // console.log("productData", productData);
        
        if(productData){
            setProductName(productData.productName);
            setpurpose(productData.purpose);    
            setmadeIn(productData.madeIn);
            setavailableIn(productData.availableIn);
            setlaunchDate(productData.launchDate);
            setprice(productData.price);
        }
        
    },[contextValue, id])
    
    let handleSubmit = (e) => {
            e.preventDefault()
        
        let list = [...contextValue.productList]
        let productData = {...list[parseInt(id) - 1]}
        productData.productName = productName;
        productData.purpose = purpose;
        productData.madeIn = madeIn;
        productData.availableIn = availableIn;
        productData.launchDate = launchDate;
        productData.price = price;
    
        console.log(productData);
        list[parseInt(id) -1] = productData;
        
        contextValue.setproductList(list);
        navigate("/product")
    }

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>

            <div className='constainer'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e) => {setProductName(e.target.value)}} className='form-control' required />
                        </div>
                        <div className='col-lg-4'>
                            <label>Available In</label>
                            <input type="number" value={availableIn} onChange={(e) => {setavailableIn(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-8'>
                            <label>Purpose</label>
                            <input type="text" value={purpose} onChange={(e) => {setpurpose(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e) => {setprice(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-8'>
                            <label>Made In</label>
                            <input type="text" value={madeIn} onChange={(e) => {setmadeIn(e.target.value)}} className='form-control' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Launch Date</label>
                            <input type="date" value={launchDate} onChange={(e) => {setlaunchDate(e.target.value)}} className='form-control' />
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

export default EditProduct;
