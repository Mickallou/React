import React, { useState } from 'react';
import Product from '../../../Models/Product';

const ProductNew = ({ setProducts, setShowForm }) => {
    const [product, setProduct] = useState(new Product('', '', 0, 0));
    const handleChange = (e) => {
        const updatedProduct = { ...product };
        updatedProduct[e.target.name] = e.target.value;
        setProduct(updatedProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.id || !product.pName || !product.price || !product.quantity) {
            alert("Please fill all fields");
            return;
        }
        setProducts(prevProducts => [...prevProducts, product]);
        setProduct(new Product());
        setShowForm(false);
    };

    return (
        <div className='productNewList'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Product New Class Instance</h1></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="id">Produit Id</label></td>
                            <td><input
                                type="number"
                                id='id'
                                name='id'
                                value={product.id}
                                onChange={handleChange}
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
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default ProductNew;
