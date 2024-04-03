import React, { useState, useEffect } from 'react'
import Product from '../../../Models/Product'

const ProductEdit = ({ theProduct, changePro }) => {
    const [product, setProduct] = useState(theProduct);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        // Create a new instance of Product and update the field
        const updatedProduct = new Product(product.id, product.pName, product.price, product.quantity);

        // Update the field that has changed
        updatedProduct.updateField(e.target.name, e.target.value);

        // Use the state setter to update the state
        setProduct(updatedProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsVal = product.validate();

        if (Object.keys(errorsVal).length === 0) {
            alert("Product has been saved successfully");
            console.log(product);
            changePro(product)
        } else {
            setErrors(errorsVal);
            setMessage('Product has not been saved successfully');
        }
    };

    useEffect(() => {
        setProduct(theProduct);
    }, [theProduct]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="id">Produit Id</label></td>
                            <td><input
                                type="number"
                                id='id'
                                name='id'
                                value={product.id}
                                onChange={handleChange}
                                disabled
                                readOnly
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pName">Produit Name</label></td>
                            <td><input
                                type="text"
                                id='pName'
                                name='pName'
                                value={product.pName}
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="price">Produit Price</label></td>
                            <td><input
                                type="number"
                                id='price'
                                name='price'
                                value={product.price}
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="quantity">Produit Quantity</label></td>
                            <td><input
                                type="number"
                                id='quantity'
                                name='quantity'
                                value={product.quantity}
                                onChange={handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <button type='submit'>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <div>{message}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {Object.keys(errors).length > 0 && (
                    <div>
                        <h3>Errors</h3>
                        <ul>
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    )
}

export default ProductEdit