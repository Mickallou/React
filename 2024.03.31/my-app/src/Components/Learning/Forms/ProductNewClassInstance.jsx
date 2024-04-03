import React, { useState } from 'react'
import Product from '../../../Models/Product'

const ProductNewClassInstance = () => {
    // ---State Manegement ---
    const [product, setProduct] = useState(new Product())

    // --- Event Handler ---
    const handleChange = (e) => {
        // Create a new instance of Product and update the field
        const upadatedProduct = new Product(product.id, product.pName, product.price, product.quantity);

        // Update the field that has changed
        upadatedProduct.updateField(e.target.name, e.target.value);

        // Use the state setter to update the state
        setProduct(upadatedProduct);

        console.log(upadatedProduct)
    }

    // --- Event Handler ---
    const handleSubmit = (e) => {

    }
    return (
        <div className='ProductNew'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr><td colSpan={2}><h1>Product New Class Instance</h1></td></tr>
                        <tr>
                            <td><label htmlFor="id">Produit Id</label></td>
                            <td><input
                                type="number"
                                id='id'
                                name='id'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pName">Produit Name</label></td>
                            <td><input
                                type="text"
                                id='pName'
                                name='pName'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="price">Produit Price</label></td>
                            <td><input
                                type="number"
                                id='price'
                                name='price'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="quantity">Produit Quantity</label></td>
                            <td><input
                                type="number"
                                id='quantity'
                                name='quantity'
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr >
                            <td colSpan={2} style={{ textAlign: 'center' }}><button type='submit'>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div >
    )
}


export default ProductNewClassInstance
