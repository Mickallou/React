import React, { useEffect } from 'react';
import Product from '../../../Models/Product';
import useProductForm from '../../../Hooks/useProductForm';

const ProductNew = ({ setProducts }) => {
    // const [product, setProduct] = useState(new Product('', '', 0, 0));
    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //     // Create a new instance of Product and update the field
    //     const updatedProduct = new Product(product.id, product.pName, product.price, product.quantity);

    //     // Update the field that has changed
    //     updatedProduct.updateField(e.target.name, e.target.value);

    //     // Use the state setter to update the state
    //     setProduct(updatedProduct);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const errorsVal = product.validate();

    //     if (Object.keys(errorsVal).length === 0) {
    //         alert("Product has been saved successfully");

    //         const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
    //         currProduct.generateUID();
    //         setProduct(currProduct);
    //     } else {
    //         setErrors(errorsVal);
    //     }
    // };

    const [product, errors, handleChange, handleSubmit] = useProductForm(new Product('', '', 0, 0));

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            console.log(errors);
        }
    }, [errors]);

    useEffect(() => {
        if (product.id) {
            setProducts(product);
        }
        // eslint-disable-next-line
    }, [product.id]);

    return (
        <div className='productNewList'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Product New Class Instance</h1></td>
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
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <button type='submit'>Submit</button>
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
    );
};

export default ProductNew;