import React from 'react'
import Child from './Child'
import Product from './Product'

const Parent = () => {
    const userName = "Shubhra"
    const product = {
        pname: "Tea",
        price: 20,
        qty: 50,
        pimage: "https://cdn.pixabay.com/photo/2014/12/04/15/21/tea-556777_1280.jpg"
    }
    return (
        <>
            <h1> This is the Parent Component  </h1>
            <Child fname={userName} />

            <Product data = {product} />
        </>
    )
}

export default Parent
