import React, { useState, useEffect } from 'react';
import Product from '../../../Models/Product';

const ProductNewValidation = () => {
    // --- State Management ---
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({});

    // --- Event Handler ---
    const handleChange = (e) => {
        // Create a new instance of Product and update the field
        const updatedProduct = new Product(product.id, product.pName, product.price, product.quantity);

        // Update the field that has changed
        updatedProduct.updateField(e.target.name, e.target.value);

        // Use the state setter to update the state
        setProduct(updatedProduct);
    };

    // --- Event Handler ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(product);
        } else {
            console.log(errors);
        }
    };

    const validateForm = () => {
        const error = {};
        let isValid = true;

        if (!product.id) {
            isValid = false;
            error['Id'] = 'Product Id is required';
        }

        if (!product.pName) {
            isValid = false;
            error['Name'] = 'Product Name is required';
        }

        if (!product.price) {
            isValid = false;
            error['Price'] = 'Product Price is required';
        } else if (product.price < 0 || product.price > 1000) {
            isValid = false;
            error['Price'] = 'Product Price must be between 0 and 1000';
        }

        if (!product.quantity) {
            isValid = false;
            error['Quantity'] = 'Product Quantity is required';
        }

        setErrors(error);
        return isValid;
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log(errors);
        }
    }, [errors]);

    return (
        <div className="ProductNew">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <h1>Product New Validation</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="id">Product Id</label>
                            </td>
                            <td>
                                <input type="number" id="id" name="id" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pName">Product Name</label>
                            </td>
                            <td>
                                <input type="text" id="pName" name="pName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Product Price</label>
                            </td>
                            <td>
                                <input type="number" id="price" name="price" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="quantity">Product Quantity</label>
                            </td>
                            <td>
                                <input type="number" id="quantity" name="quantity" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
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
        </div>
    );
};

export default ProductNewValidation;
