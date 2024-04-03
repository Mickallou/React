import React, { useState, useEffect } from 'react'

const ProductView = ({ props }) => {

    const [theProduct, setTheProduct] = useState(props);

    useEffect(() => {
        setTheProduct(props);
    }, [props]);

    return (
        <div>
            <h1>Your Product</h1>
            <p>The ID: {theProduct.id}</p>
            <p>The Name: {theProduct.pName}</p>
            <p>The Price: {theProduct.price}</p>
            <p>The Quantity: {theProduct.quantity}</p>
        </div>
    )
}

export default ProductView
