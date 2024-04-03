import React, { useState } from 'react'

const ProductNewObj = () => {
    // ---State Manegement ---
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0
    })

    // --- Event Handler ---
    const handleChange = (e) => {
        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [e.target.name]: e.target.value
            }
        })
    }

    // --- Event Handler ---
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`The name (with object) of the product is : ` + product.name)
        console.log(`The price (with object) of the product is : ` + product.price)
        console.log(`The quatity (with object) of the product is : ` + product.quantity)
    }
    return (
        <div className='ProductNew'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr><td colSpan={2}><h1>With Object</h1></td></tr>
                        <tr>
                            <td><label htmlFor="product_name">Produit Name</label></td>
                            <td><input
                                type="text"
                                id='name'
                                name='name'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="product_price">Produit Price</label></td>
                            <td><input
                                type="text"
                                id='price'
                                name='price'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="product_quantity">Produit Quantity</label></td>
                            <td><input
                                type="text"
                                id='quantity'
                                name='quantity'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr >
                            <td colSpan={2} style={{ textAlign: 'center' }}><button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}


export default ProductNewObj
