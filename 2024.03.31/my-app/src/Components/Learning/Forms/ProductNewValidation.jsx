import React, { useState, useEffect } from 'react';
import Product from '../../../Models/Product';
import classNames from 'classnames';

const ProductNewValidation = () => {
    // --- State Management ---
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const cmpStyle = {
        color: Object.keys(errors).length > 0 ? 'red' : 'green',
    };

    // const cpmClass = Object.keys(errors).length > 0 ? 'error' : 'success';

    const msgClass = classNames({
        'error': Object.keys(errors).length > 0,
        'success': Object.keys(errors).length === 0,
    });



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
        const fromErrors = product.validate();

        if (Object.keys(fromErrors).length === 0) {
            console.log(product);
            setMessage('Product has been saved successfully');
        } else {
            console.log(errors);
            setMessage('Please fill all fields');
            setErrors(fromErrors);
        }

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
                        <tr style={cmpStyle} className={msgClass}>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <div>{message}</div>
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
