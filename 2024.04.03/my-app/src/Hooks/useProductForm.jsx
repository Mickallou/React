import { useState } from "react";
import Product from "../Models/Product";

const useProductForm = (product) => {
    const [productState, setProductState] = useState(product);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const updatedProduct = new Product(productState.id, productState.pName, productState.price, productState.quantity);
        updatedProduct.updateField(e.target.name, e.target.value);
        setProductState(updatedProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsVal = productState.validate();
        if (Object.keys(errorsVal).length === 0) {
            const currProduct = new Product(productState.id, productState.pName, productState.price, productState.quantity);
            currProduct.generateUID();
            setProductState(currProduct);
        } else {
            setErrors(errorsVal);
        }
    };

    return [productState, errors, handleChange, handleSubmit];
}

export default useProductForm;
