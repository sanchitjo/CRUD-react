import React from "react";
import { useState } from "react";

let ProductContext = React.createContext();

export const YourProvider = ProductContext;

export const ProductProvider = ({children}) => {
    const[productList, setproductList] = useState([])
    const a =((x) => {
        console.log(x, "this has been called")
        setproductList(x)
    })
    return(
        <ProductContext.Provider value={{productList, setproductList:a}}> 
            {children}
        </ProductContext.Provider>
    )
}